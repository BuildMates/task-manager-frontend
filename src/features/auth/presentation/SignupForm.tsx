// Import React state
// useState stores changing data
import {
    useState
}
    from "react";


// Import our signup business logic
import {
    useSignup
}
    from "../application/useSignup";



// React component
export default function SignupForm() {



    // Getting signup function
    const {
        signup
    } = useSignup();




    // Form data storage
    // Initially all values empty

    const [form, setForm] = useState({

        name: "",
        email: "",
        password: ""

    });

    // Runs when button clicked

    const handleSubmit = async () => {


        // Calling application layer

        const response =
            await signup(form);



        // For now print result

        console.log(response);


    };

    return (
        <div>
            <h2>
                Signup
            </h2>

            <input

                placeholder="Name"


                value={
                    form.name
                }


                onChange={(event) => {


                    setForm({

                        ...form,


                        name:
                            event.target.value

                    })


                }}

            />

            <input

                placeholder="Email"


                value={
                    form.email
                }


                onChange={(event) => {


                    setForm({

                        ...form,


                        email:
                            event.target.value

                    })


                }}

            />

            <input

                placeholder="Password"


                type="password"


                value={
                    form.password
                }


                onChange={(event) => {


                    setForm({

                        ...form,


                        password:
                            event.target.value

                    })


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