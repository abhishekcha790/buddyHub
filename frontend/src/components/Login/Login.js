import React from "react";
import Header from "../Header";
import LeftSideLogin from "./LeftSideLogin";
import RightSideLogin from "./RightSideLogin";

function Login() {
  return (
    <div>
      <Header />
     <RightSideLogin />
     <LeftSideLogin/>
    </div>
  );
}

export default Login;
