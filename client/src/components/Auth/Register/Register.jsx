import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const existingUser = JSON.parse(localStorage.getItem(data.email));
    if (existingUser) {
      alert("User already registered with this email");
    } else {
      localStorage.setItem(data.email, JSON.stringify(data));
      alert("Registration successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ff4d4d] to-[#ff9900]">
      <div className="w-full max-w-[450px] bg-white p-8 rounded-[20px]
                      shadow-[0_20px_40px_rgba(0,0,0,0.2)]">

        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl text-center text-[#ff4d4d] font-bold mb-6">
            Register
          </h1>

          <div className="relative mb-5">
            <input
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="w-full px-4 py-3 pr-12 border-2 border-[#eee]
                         rounded-[10px] focus:border-[#ff4d4d]
                         outline-none transition"
            />
            <i className="bx bxs-user absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
          </div>

          <div className="relative mb-5">
            <input
              {...register("username", { required: true })}
              placeholder="Username"
              className="w-full px-4 py-3 pr-12 border-2 border-[#eee]
                         rounded-[10px] focus:border-[#ff4d4d]
                         outline-none transition"
            />
            <i className="bx bxs-user-circle absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>

          <div className="relative mb-5">
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full px-4 py-3 pr-12 border-2 border-[#eee]
                         rounded-[10px] focus:border-[#ff4d4d]
                         outline-none transition"
            />
            <i className="bx bxs-lock-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>

          <div className="relative mb-5">
            <input
              type="password"
              {...register("confirmPassword", { required: true })}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 pr-12 border-2 border-[#eee]
                         rounded-[10px] focus:border-[#ff4d4d]
                         outline-none transition"
            />
            <i className="bx bxs-lock absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>

          <div className="flex justify-between text-sm mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" required />
              I agree to <span className="text-[#ff4d4d] underline">Terms and Conditions</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Is Staff
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#ff4d4d] hover:bg-[#e63946]
                       text-white font-bold rounded-[10px] transition"
          >
            Register
          </button>

          <div className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="/account/login" className="text-[#ff4d4d] font-semibold hover:underline">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
