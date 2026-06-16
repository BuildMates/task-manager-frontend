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



// React component
export default function SignupForm(){


    // Gives function to move pages
    const navigate = useNavigate();



    // Getting signup API function
    const {
        signup
    } = useSignup();



    // Store form values
    const [form,setForm] = useState({

        email:"",
        password:""

    });



    // Store error message
    const [error,setError] = useState("");



    // Runs when signup button clicked
    const handleSubmit = async()=>{


        try{


            // Call backend API

            const response =
            await signup(form);



            console.log(response);



            // Success -> go welcome page

            navigate("/welcome");


        }

        catch(error:any){



            // Backend response:
            // {
            //   detail:"User already exists"
            // }

            setError(

                error.response?.data?.detail
                ||
                "Something went wrong"

            );


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




            <button

                onClick={handleSubmit}

            >

                Signup

            </button>



        </div>

    );

}