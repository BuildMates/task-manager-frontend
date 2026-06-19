// Import React state
import {
    useState
}
from "react";

// Import navigation
import {
    useNavigate
}
from "react-router-dom";

// Import signup business logic
import {
    useSignup
}
from "../application/useSignup";

// Signup component
export default function SignupForm(){
    // Used to navigate pages
    const navigate = useNavigate();

    // Get signup API function
    const {
        signup
    } = useSignup();

    // Store form values
    const [form,setForm] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        password:"",
        confirmPassword:""
    });

    // Store error message
    const [error,setError] = useState("");

    // Check passwords match
    const isPasswordMatch =
        form.password !== "" &&
        form.password === form.confirmPassword;

    // Signup button click

    const handleSubmit = async()=>{
        // Safety validation
        if(!isPasswordMatch){
            setError(
                "Passwords do not match"
            );
            return;
        }

        try{
            // Call backend API
            // Sending only required fields
            const response =
            await signup({
                email:
                form.email,

                password:
                form.password
            });

            console.log(response);

            // Save frontend user details
            const userDetails = {
                fname: form.fname,
                lname: form.lname,
                phone: form.phone,
                email: form.email,
                type: "signup"
            };
            localStorage.removeItem(
                "userDetails"
            );
            localStorage.setItem(
                "userDetails",
                JSON.stringify(userDetails)
            );

            // Move to welcome page
            navigate("/welcome");
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
                    "Signup failed"
                );
            }
            else{
                setError(
                    "Something went wrong"
                );
            }
        }
    };

    return (
        <div>
            <h2>
                Signup
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
                    placeholder="First Name"
                    value={form.fname}
                    onChange={(event)=>{
                        setForm({
                            ...form,
                            fname:
                            event.target.value
                        });
                    }}
                />
            </div>
            <div>
                <input
                    placeholder="Last Name"
                    value={form.lname}
                    onChange={(event)=>{
                        setForm({
                            ...form,
                            lname:
                            event.target.value
                        });
                    }}
                />
            </div>
            <div>
                <input
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(event)=>{
                        setForm({
                            ...form,
                            phone:
                            event.target.value
                        });
                    }}
                />
            </div>
            <div>
                <input
                    placeholder="Email"
                    value={form.email}
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
                    value={form.password}
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
                <input
                    placeholder="Confirm Password"
                    type="password"
                    value={form.confirmPassword}
                    onChange={(event)=>{
                        setForm({
                            ...form,
                            confirmPassword:
                            event.target.value
                        });
                    }}
                />
            </div>
            <button
                disabled={!isPasswordMatch}
                onClick={handleSubmit}
            >
                Signup
            </button>
        </div>
    );
}