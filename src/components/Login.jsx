import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-[url(https://img.freepik.com/free-vector/gradient-technological-background_23-2148884155.jpg]">
        <div className="border-cyan-700 border-2 shadow-lg inset-shadow-3xl rounded-md p-10 py-18 backdrop-blur-3xl">
          {/*<div className="flex items-center justify-center text-2xl text-white">
            Login
          </div> */}
          <form onSubmit={submitHandler}>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="UserName"
                className="text-white placeholder:text-md rounded-3xl border-1 border-cyan-700 outline-none border mt-6 p-1 pl-3 bg-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="password"
                placeholder="Password"
                className="text-white placeholder:text-md rounded-3xl border-1 border-cyan-700 outline-none mt-2 p-1 pl-3 bg-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mt-4 text-white">
              <label className="mx-4 cursor-pointer">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember Me
              </label>
              <a href="#" className="ml-2 underline hover:text-cyan-300">
                Forgot password?
              </a>
            </div>

            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="bg-cyan-400 rounded-2xl p-1 px-20 py-1.5 text-sm text-white hover:bg-cyan-600 cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
