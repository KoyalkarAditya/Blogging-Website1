import { Appbar } from "../components/Appbar";
import { TextEditor } from "../components/TextEditor";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="  flex justify-center items-center ">
        <div className=" mt-10 w-full max-w-screen-md flex flex-col justify-center items-center">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter Title"
            type="text"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg text-lg   dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500  dark:focus:border-blue-500"
          />
        </div>
      </div>
      <TextEditor
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <div className="flex justify-center">
        <button
          onClick={async () => {
            const token = localStorage.getItem("token");
            const response = await axios.post(
              `${BACKEND_URL}/api/v1/blog`,
              {
                title,
                content: description,
              },
              {
                headers: {
                  Authorization: token,
                },
              }
            );
            navigate(`/blog/${response.data.blog.id}`);
          }}
          className="  mt-5 px-10 py-2 bg-blue-600 text-white rounded-md"
        >
          Publish Post
        </button>
      </div>
    </div>
  );
};
