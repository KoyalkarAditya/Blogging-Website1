import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import {
  signinInputSchema,
  signupInputSchema,
} from "@koyalkaraditya/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = signupInputSchema.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Invalid credentials",
    });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    const token = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.json({
      jwt: token,
    });
  } catch (e) {
    console.log(e);
    c.status(403);
    return c.json({ error: "error while signing up" });
  }
});
userRouter.post("signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = signinInputSchema.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Invalid credentials",
    });
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user) {
      return c.json({
        msg: "User not found",
      });
    }
    const token = await sign(user?.id, c.env.JWT_SECRET);

    return c.json({
      jwt: token,
    });
  } catch (e) {
    c.status(403);
    console.log(e);
    return c.text("Invalid");
  }
});
