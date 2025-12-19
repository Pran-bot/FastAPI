import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../../App.css";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem("data.email"));
        if (userData) {
            if (userData.passwword == data.password) {
                console.log(userData.name + " You are Successfully Logged In");
                navigate("/dashboard");
            }
            else {
                console.log("Invalid Password or email, try again!!");
            }
        }
        else {
            console.log("Invalid Password or email, try again!!");
        }
    };
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#ff4d4d] to-[#ff9900]">
                <div className="w-full max-w-[400px] p-8 bg-white rounded-[20px]">
                    <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-center text-3xl text-[#ff4d4d] font-bold mb-[23px]">Login</h1>
                        <div className="mb-4 relative" >
                            <input {...register("username", { required: true })}
                                placeholder="Username"
                                className="w-full px-4 py-3 pr-12 border-2 border-[#eee] rounded-[10px] text-base transition duration-300 focus:border-[#ff4d4d] outline-none" type="username" />
                            <i className="bx bxs-user absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" ></i>
                            {errors.username && <span className="text-red-500 text-sm mt-1">*Username* is Mandatory</span>}
                        </div>
                        <div className="mb-4 relative">
                            <input type="password"
                                {...register("password", { required: true })}
                                placeholder="Password"
                                className="w-full px-4 py-3 pr-12 border-2 border-[#eee] rounded-[10px] text-base transition duration-300 focus:border-[#ff4d4d] outline-none" />
                            <i className="bx bxs-lock-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" ></i>
                            {errors.password && <span className="text-red-500 text-sm mt-1">*Password* is Mandatory</span>}
                        </div>


                        <div className="flex justify-between text-sm mb-6">
                            <label className="flex items-center gap-2"><input type="checkbox"/>Remember Me</label>
                            <label className="flex items-center gap-2"><input type="checkbox"/>Is Staff</label>
                        </div>
                            <button className="w-full p-3 bg-[#ff4d4d] text-white rounded-[10px] font-bold cursor-pointer transition duration-300">Login</button>
                        <div className="text-center text-sm mt-4">
                            <p>Don't have an account? <a className="text-[#ff4d4d] text-decoration-none font-[600] hover:underline" href="/account/register">Register</a></p>
                        </div>

                    </form >
                </div>
            </div >
        </>
    );
}
export default Login;