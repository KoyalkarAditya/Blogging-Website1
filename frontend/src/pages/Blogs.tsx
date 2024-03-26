import { BlogSkeleton } from "../components/Skeleton";
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
export function Blogs() {
  const { isLoading, blogs } = useBlogs();
  if (isLoading) {
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
      <div className="flex justify-center">
        <div className="p-5 flex justify-center w-1/2">
          <div className="flex flex-col justify-center w-full">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                authorName={blog.author.name}
                publishedDate="Dec 3 2023"
                content={blog.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
