import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
interface blogCardprops {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}
export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: blogCardprops) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="mt-3 border-b border-slate-200 pb-4">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <Avatar name="Aditya" />
          </div>
          <div className="flex justify-center items-center">
            <div className=" ml-2 font-semibold text-slate-900">
              {authorName}
            </div>
            <Circle />
            <div className="ml-2 text-slate-500">{publishedDate}</div>
          </div>
        </div>
        <div className="font-bold text-2xl">{title}</div>
        <div className=" font-sans  text-md font-semibold text-slate-600">
          {content.length > 300 ? content.slice(300) + "..." : content}
        </div>
        <div className=" mt-4 font-thin text-slate-950 text-sm">
          {Math.ceil(content.length / 100)} minute(s) read
        </div>
      </div>
    </Link>
  );
};
export function Circle() {
  return (
    <div className="relative ml-3 inline-flex items-center justify-center w-1  h-1 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"></div>
  );
}
