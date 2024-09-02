"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
        {
          email: state.email,
          password: state.password,
        }
      );

      if (response.status === 200) {
        // Handle successful login

        console.log(response);

        const { access, refresh } = response.data;

        // Save token to localStorage or cookie (or use a global state management solution)
        localStorage.setItem("token", access);

        // Redirect to a protected page or dashboard
        router.push("/dashboard"); // Change this to your protected route
      } else {
        toast.error("Invalid password or email");
      }
    } catch (err) {
      toast.error("Invalid password or email ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="logo">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={225}
          height={102}
          className="mb-5"
        />
      </div>
      <div className="form">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 md:w-[616px] w-full p-4 border rounded-lg border-[#9d9d9d33]"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-semibold text-[17px] leading-[32px]"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="nouran@cyparta.com"
              id="email"
              className="px-4 py-2 rounded-md bg-transparent border border-[#9d9d9d33] focus:outline-none focus:border-[#9d9d9d]"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1 mb-6">
            <label
              htmlFor="password"
              className="font-semibold text-[17px] leading-[32px]"
            >
              Password
            </label>
            <div className="flex items-center relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="************"
                id="password"
                className="px-4 py-2 w-full rounded-md bg-transparent border border-[#9d9d9d33] focus:outline-none focus:border-[#9d9d9d]"
                value={state.password}
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              />
              {!showPassword ? (
                <FaRegEyeSlash
                  className="absolute right-4 text-xl cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              ) : (
                <FaRegEye
                  className="absolute right-4 text-xl cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#262626] text-white w-2/3 px-7 py-3 rounded-lg mx-auto mb-4 disabled:bg-slate-500"
            disabled={loading}
          >
            {loading ? "Logging..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
