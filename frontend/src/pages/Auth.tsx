import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@koyalkaraditya/medium-common";
import { LabelledInput } from "../components/LabelledInput";
import axios from "axios";
import { BACKEND_URL } from "../config";
export const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const navigate = useNavigate();

  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        postInputs,
      });
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blog");
    } catch (e) {
      alert("error");
    }
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-3xl font-extrabold">Create an Account</div>
      <div className=" text-slate-600">
        {type == "signup"
          ? "Already have an account?"
          : "Don't have an account"}{" "}
        <Link
          className="pb-2 underline"
          to={type == "signup" ? "/signin" : "/signup"}
        >
          {type == "signup" ? "Sign in" : "Signup"}
        </Link>
      </div>
      {type == "signup" ? (
        <LabelledInput
          label={"Username"}
          type={"text"}
          placeholder={"Enter Your Username"}
          onChange={(e) => {
            // setPostInputs({
            //   ...setPostInputs,
            //   name : e.target.value
            // })
            setPostInputs((c: SignupInput) => ({
              ...c,
              name: e.target.value,
            }));
          }}
        />
      ) : null}
      <LabelledInput
        type={"email"}
        label={"Email"}
        placeholder={"Enter Your Email"}
        onChange={(e) => {
          setPostInputs((c: SignupInput) => ({
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
          setPostInputs((c: SignupInput) => ({
            ...c,
            password: e.target.value,
          }));
        }}
      />
      <button
        onClick={sendRequest}
        className="bg-slate-900 mt-8 px-20 hover:bg-slate-700 text-white font-bold py-2  rounded-lg"
      >
        {type == "signin" ? "Sign in" : "Sign up"}
      </button>
    </div>
  );
};
