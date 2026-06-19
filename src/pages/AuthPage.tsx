import {
    useState
}
from "react";

import LoginForm
from "../features/auth/presentation/LoginForm";

import SignupForm
from "../features/auth/presentation/SignupForm";

export default function AuthPage(){
    const [mode,setMode] =
    useState<"login" | "signup">("login");

    return (
        <div
            style={{
                width:"350px",
                margin:"80px auto",
                padding:"30px",
                border:"1px solid #ddd",
                borderRadius:"12px"
            }}
        >
            <h1>
                Build Mates
            </h1>
            {/* Login Signup buttons */}
            <div>
                <button
                onClick={()=>setMode("login")}
                disabled={mode==="login"}
                >
                    Login
                </button>
                <button
                onClick={()=>setMode("signup")}
                disabled={mode==="signup"}
                >
                    Signup
                </button>
            </div>
            {
                mode==="login"
                ?
                <LoginForm/>
                :
                <SignupForm/>
            }
            {
                mode==="login"
                &&
                <p>
                    Not a member?
                    <button
                        onClick={()=>setMode("signup")}
                    >
                        Signup now
                    </button>
                </p>
            }
            {
                mode==="signup"
                &&
                <p>
                    Already have account?
                    <button
                        onClick={()=>setMode("login")}
                    >
                        Login
                    </button>
                </p>
            }
        </div>
    );
}