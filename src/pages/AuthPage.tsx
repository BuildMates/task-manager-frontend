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
        <div>
            <h1>
                Build Mates
            </h1>
            {/* Toggle buttons */}
            <div>
                <button
                    onClick={()=>
                        setMode("login")
                    }
                    disabled={
                        mode === "login"
                    }
                >
                    Login
                </button>

                <button
                    onClick={()=>
                        setMode("signup")
                    }
                    disabled={
                        mode === "signup"
                    }
                >
                    Signup
                </button>
            </div>

            {/* Show selected form */}

            {
                mode === "login"
                ?
                <LoginForm/>
                :
                <SignupForm/>
            }

            {/* Bottom switch text */}

            {
                mode === "login"
                &&
                <p>
                    Not a member?
                    <button
                        onClick={()=>
                            setMode("signup")
                        }
                    >
                        Signup now
                    </button>
                </p>
            }
        </div>
    );
}