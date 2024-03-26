import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput } from "@koyalkaraditya/medium-common";
import { LabelledInput } from "../components/LabelledInput";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Quote } from "../components/Quote";
export const Signin = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      const jwt = response.data.jwt;
      if (jwt) {
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      } else {
        alert("Invalid Credentials");
      }
    } catch (e) {
      alert("error");
    }
  }
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center items-center flex-col">
          <div className="text-3xl font-extrabold">Create an Account</div>
          <div className=" text-slate-600">
            Don't have an account?{" "}
            <Link className="pb-2 underline" to="/signup">
              Sign up
            </Link>
          </div>
          <LabelledInput
            type={"email"}
            label={"Email"}
            placeholder={"Enter Your Email"}
            onChange={(e) => {
              setPostInputs((c: SigninInput) => ({
                ...c,
                email: e.target.value,
              }));
            }}
          />
          <LabelledInput
            type={"password"}
            label={"Password"}
            placeholder={"Enter Password"}
            onChange={(e) => {
              setPostInputs((c: SigninInput) => ({
                ...c,
                password: e.target.value,
              }));
            }}
          />
          <button
            onClick={sendRequest}
            className="bg-slate-900 mt-8 px-20 hover:bg-slate-700 text-white font-bold py-2  rounded-lg"
          >
            Sign in
          </button>
        </div>
        <div className=" invisible lg:visible">
          <Quote />
        </div>
      </div>
    </div>
  );
};
