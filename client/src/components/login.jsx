import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../components/App.css";

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
        else{
            console.log("Invalid Password or email, try again!!");
        }
    }
    else{
        console.log("Invalid Password or email, try again!!");
    }
};
return (
    <>
    <h2>Login Form</h2>
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input type="email"
        {...register("email", {required:true})}
        placeholder="Email"/>
        {errors.email && <span style={{color:"red"}}>*Email* is Mandatory</span>}
        <input type="password"
        {...register("password", {required:true})}
        placeholder="Password"/>
        {errors.password && <span style={{color:"red"}}>*Password* is Mandatory</span>}
        <input type="submit" style = {{backgroundColor:"blue", color:"white"}} />
    </form>
    </>
);
}

export default Login;