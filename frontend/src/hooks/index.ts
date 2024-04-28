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

export const useMyBlogs = () => {
  const [isMyLoading, setIsLoading] = useState(true);
  const [myBlogs, setMyBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${BACKEND_URL}/api/v1/blog/myblogs`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        setMyBlogs(response.data.blogs);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [myBlogs]);

  return {
    isMyLoading,
    myBlogs,
  };
};
