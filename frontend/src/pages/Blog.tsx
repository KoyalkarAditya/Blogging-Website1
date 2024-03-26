import { BlogSkeleton } from "../components/Skeleton";
import { BlogData } from "../components/BlogData";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
export const Blog = () => {
  const { id } = useParams();
  const { isLoading, blog } = useBlog({
    id: id || "",
  });
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div>
          <Appbar />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </div>
    );
  }
  return (
    <BlogData
      blog={
        blog || {
          title: "",
          content: "",
          id: "",
          author: {
            name: "",
          },
        }
      }
    />
  );
};
