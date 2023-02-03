import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate()
  useEffect(() => {
    localStorage.clear("access_token");
    navigate("/")
  }, []);
  return <p>logout page</p>;
}
