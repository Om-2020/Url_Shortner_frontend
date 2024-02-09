import React, { useState } from "react";
import { checkvalidData } from "../utilis/validate";
import axios from "axios";
import { server } from "../utilis/constant";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../Redux/userSlice";


export const Login = () => {

    const [islogin, setlogin] = useState(false);
    const [ErrorMsg, setErrorMsg] = useState(null);
    
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");

    const dispatch = useDispatch();

    const handleButtonClick = async() => {
        // validate form data
        const message = checkvalidData(email, password);
        setErrorMsg(message);

        if (message) return;

        if (!islogin) {
            // sign Up Logic
            try {
                const { data } = await axios.post(`${server}/users/new`, {
                    name, 
                    email, 
                    password,
                }, 
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                })
                toast.success(data.message);
                dispatch(authenticateUser());
                window.location.replace("http://localhost:3000/home")

            } catch (e) {
                toast.error(e.response.data.message);
            }

            
        }
        else {

            try {
                const { data } = await axios.post(`${server}/users/login`, {
                    email,
                    password,
                },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    })
                toast.success(data.message);
                dispatch(authenticateUser());
                window.location.replace("http://localhost:3000/home")
                

            } catch (e) {
                toast.error(e);
            }
        }
        




    }
    const istogle = () => {
        setlogin(!islogin);
    }
    return (
        <div>
            
            <div className="absolute">
            </div>
            <div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="w-4/12  bg-black absolute p-12  mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                    <h1 className="font-bold text-2xl py-4">{islogin ? "Sign in" : "Sign Up"}</h1>
                    {
                        islogin === false ? <input type="text"
                            placeholder="Name"
                            className="p-4 my-5 w-full bg-gray-700 "
                            required
                            onChange={(e)=>{
                                setname(e.target.value)
                            }}

                        >
                        </input> : ""
                    }
                    <input
                        type="text"
                        placeholder="Email"
                        className="p-4 mt-1 w-full bg-gray-700 "
                        required
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}

                    ></input>
                    <input
                        type="text"
                        placeholder="Password"
                        className="p-4 my-5 w-full bg-gray-700"
                        required
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}

                    ></input>
                    <p className="text-red-500 font-bold text-lg py-2">{ErrorMsg}</p>
                    <button className="p-4 my-5 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{islogin ? "Sign in" : "Sign Up"}</button>
                    <p className="p-4 py-3 cursor-pointer" onClick={istogle}>{islogin === false ? "Already registered? Sign In Now" : "New to Url Shortner? Sign Up Now"}</p>
                </form>
            </div>
        </div>
    );
};
