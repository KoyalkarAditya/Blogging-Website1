import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
export interface Blog {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };
}
export const useBlog = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      axios
        .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setBlog(res.data.blog);
          setIsLoading(false);
        });
    } catch (e) {}
  }, [id]);
  return {
    isLoading,
    blog,
  };
};
export const useBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      axios
        .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setBlogs(res.data.blogs);
          setIsLoading(false);
        });
    } catch (e) {}
  }, [blogs]);
  return {
    isLoading,
    blogs,
  };
};
