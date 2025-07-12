import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { googleAuth } from "../../api";
import { useAuth } from "../../context/AuthContext";

function GoogleCallback() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const code = params.get("code");
    if (code) {
      googleAuth(code)
        .then((res) => {
          login(res.data.user, res.data.token);
          navigate("/");
        })
        .catch((err) => {
          console.error("Login failed:", err);
        });
    }
  }, []);

  return <p className="text-center mt-5">Logging you in...</p>;
}

<<<<<<< HEAD
export default GoogleCallback;
=======
export default GoogleCallback;
>>>>>>> signup
