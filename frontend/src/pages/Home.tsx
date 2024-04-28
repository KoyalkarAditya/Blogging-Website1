import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/blogs");
    } else {
      navigate("signin");
    }
  }, []);
  return null;
}
