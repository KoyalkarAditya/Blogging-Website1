import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";
export const Appbar = () => {
  return (
    <div className="border-b px-10 mt-3  border-slate-300 ">
      <div className="mb-2 flex justify-between">
        <div className="font-bold text-xl">Medium</div>
        <div className="flex justify-between items-center">
          <Link to={"/publish"}>
            {" "}
            <button className="mr-10 bg-green-600 rounded-2xl px-6 text-white">
              Publish
            </button>
          </Link>
          <Avatar name="Aditya" />
        </div>
      </div>
    </div>
  );
};
