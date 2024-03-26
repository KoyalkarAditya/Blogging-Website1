import { Appbar } from "./Appbar";
import { Blog } from "./../hooks/index";
export const BlogData = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-10">
          <div className=" col-span-8 border-r-2 border-slate-300">
            <div className=" font-extrabold text-5xl">{blog.title}</div>
            <div className=" text-slate-400">Posted on 2 Dec 2024</div>
            <div className=" text-lg font-sans font-semibold text-slate-700">
              {blog.content}
            </div>
          </div>
          <div className=" ml-2 w-full flex flex-col justify-center col-span-4">
            <div className=" text-xl font-semibold text-slate-800 mb-8">
              Author
            </div>
            <div className="flex ml-3 items-center">
              <Circle />
              <div className="flex flex-col">
                <div className=" ml-5 font-bold  text-2xl">
                  {blog.author.name}
                </div>
                <div className="ml-5">Random text about Author Ability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function Circle() {
  return (
    <div className="relative ml-3 inline-flex items-center justify-center w-5  h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-200"></div>
  );
}
