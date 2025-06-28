import React from "react";
import Header from "../Header";
import LeftSideLogin from "./LeftSideLogin";
import SocialLoginButtons from "./SocialLoginButtons";

function Login() {
  return (
    <div>
      <Header />
      <SocialLoginButtons />
      <LeftSideLogin />
    </div>
  );
}

export default Login;
