import { PhoneProvider} from "./context/PhoneContext"; 

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { PhoneProvider} from "./context/PhoneContext"; 

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthProvider>
    <PhoneProvider>
    <RouterProvider router={router} />
    </PhoneProvider>
  </AuthProvider>
);