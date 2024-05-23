import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto text-gray-200">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form action="">
          <div>
            <label htmlFor="username" className="label pb-0">
              <span className="text-base label-text text-gray-300">
                Username
              </span>
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="password" className="label pb-0">
              <span className="text-base label-text text-gray-300">
                Password
              </span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 bg-gray-800"
            />
          </div>
          <a
            href=""
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account? Sign up
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
