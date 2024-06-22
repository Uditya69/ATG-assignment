import React from "react";
import Login from "./Signup";
import Signup from "./Login";
import AuthCard from "./AuthCard";

function Auth() {
  const [newuser, setNewuser] = React.useState(false);
  const handleLogin = () => {
    setNewuser(false);
  };
  const handleJoin = () => {
    setNewuser(true);
  };

  return (
    <div className="flex flex-col gap-3 items-center mx-auto">
      <nav className="flex flex-row w-full justify-center lg:justify-start gap-5 font-semibold">
        <button
          className={`${
            newuser ? "text-purple-600 underline underline-offset-[45%]" : ""
          }`}
          onClick={handleJoin}
        >
          Sign in
        </button>
        <button
          className={`${
            !newuser ? "text-purple-600 underline underline-offset-[45%]" : ""
          }`}
          onClick={handleLogin}
        >
          Join in
        </button>
      </nav>

      <div className="flex flex-col lg:flex-col-reverse gap-2 items-center">
        <div>{newuser ? <Signup /> : <Login />}</div>
        <div>Or Connect With</div>
        <div className="w-full">
          <AuthCard />
        </div>
      </div>
    </div>
  );
}

export default Auth;
