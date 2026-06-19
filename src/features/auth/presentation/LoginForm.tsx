import {
    useState
}
from "react";

import {
    useNavigate
}
from "react-router-dom";

import {
    useLogin
}
from "../application/useLogin";

export default function LoginForm(){
    const navigate = useNavigate();

    const {
        login
    } = useLogin();

    const [form,setForm] = useState({
        email:"",
        password:""
    });

    const [error,setError] = useState("");
    const handleSubmit = async()=>{
        try{
            const response =
            await login(form);
            console.log(response);
            
            // Save login state
            localStorage.setItem(
                "isLoggedIn",
                "true"
            );
            // move to welcome
            navigate("/welcome", {
                state: {
                    email: response.user.email,
                    type: "login"
                }
            });
        }
        catch(error:unknown){
            if(
                error &&
                typeof error === "object" &&
                "response" in error
            ){
                const apiError =
                error as {
                    response?:{
                        data?:{
                            detail?:string;
                        }
                    }
                };

                setError(
                    apiError.response?.data?.detail
                    ||
                    "Login failed"
                );
            }
        }
    };

    return (
        <div>
            <h2>
                Login
            </h2>
            {
                error && (
                    <p>
                        {error}
                    </p>
                )
            }
            <div>

                <input
                    placeholder="Email"
                    value={
                        form.email
                    }

                    onChange={(event)=>{
                        setForm({
                            ...form,
                            email:
                            event.target.value
                        });
                    }}
                />
            </div>
            <div>
                <input
                    placeholder="Password"
                    type="password"
                    value={
                        form.password
                    }
                    onChange={(event)=>{
                        setForm({
                            ...form,
                            password:
                            event.target.value
                        });
                    }}
                />
            </div>
            <div>

                <button
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </div>
        </div>
    );
}