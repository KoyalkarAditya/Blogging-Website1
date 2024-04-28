import { Link } from "react-router-dom";
export const SelectBlog = () => {
  return (
    <div className="mt-5 flex justify-center border-b border-slate-300">
      <Link to={"/blogs"}>
        <div className="mr-20 font-semibold font-sans">For you</div>
      </Link>
      <Link to={"/myBlogs"}>
        <div className="mr-5 font-semibold font-sans mb-3">My blogs</div>
      </Link>
    </div>
  );
};
