import { useCallback } from "react";
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { SelectBlog } from "../components/SelectBlogs";
import { BlogSkeleton } from "../components/Skeleton";
import { useMyBlogs } from "../hooks";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const MyBlogs = () => {
  const { isMyLoading, myBlogs } = useMyBlogs();
  const handleDeleteBlog = useCallback(async (id: string) => {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/blog/delete/${id}`,
      {},
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    if (response.data) {
      alert(response.data.message);
    }
  }, []);
  if (isMyLoading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <SelectBlog />
      <div className="flex justify-center">
        <div className="p-5 flex justify-center w-1/2">
          <div className="flex flex-col justify-center w-full">
            {myBlogs.map((blog) => (
              <div className=" flex justify-between items-center">
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  authorName={blog.author.name}
                  publishedDate="Dec 3 2023"
                  content={blog.content}
                />
                <div
                  className=" cursor-pointer"
                  onClick={() => handleDeleteBlog(blog.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
