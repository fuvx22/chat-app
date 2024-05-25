import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signup, loading } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSumit = (e) => {
    e.preventDefault();
    // console.log("inputs: ", inputs);
    signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto text-gray-200">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSumit}>
          <div>
            <label htmlFor="fullname" className="label pb-0">
              <span className="text-base label-text text-gray-300">
                Full name
              </span>
            </label>
            <input
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              id="fullname"
              type="text"
              placeholder="Enter fullname"
              className="w-full input input-bordered h-10 bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="username" className="label pb-0">
              <span className="text-base label-text text-gray-300">
                Username
              </span>
            </label>
            <input
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="label pb-0">
              <span className="text-base label-text text-gray-300">
                Confirm Password
              </span>
            </label>
            <input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              id="confirm-password"
              type="password"
              placeholder="Enter confirm password"
              className="w-full input input-bordered h-10 bg-gray-800"
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 inline-block"
          >
            Already have an account? Login
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
