import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@koyalkaraditya/medium-common";
import { LabelledInput } from "../components/LabelledInput";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Quote } from "../components/Quote";
export const Signup = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
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
            Already have an account?{" "}
            <Link className="pb-2 underline" to="/signin">
              Sign in
            </Link>
          </div>

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
            Sign up
          </button>
        </div>
        <div className=" invisible lg:visible">
          <Quote />
        </div>
      </div>
    </div>
  );
};
