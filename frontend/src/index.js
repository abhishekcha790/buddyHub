import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // use 'react-router-dom'
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Login from "./components/Login/Login.js";
import PageNotFound from "./components/PageNotFound.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Define wrapper properly
function GoogleAuthWrapper() {
  return (
    <GoogleOAuthProvider clientId="340646190291-um5fbv5ol90mqqu1gbt1op0hgvjrrfsm.apps.googleusercontent.com">
      <Login />
    </GoogleOAuthProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <GoogleAuthWrapper />,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
