import {
    useEffect,
    useState
}
from "react";

interface UserDetails {

    fname:string;
    lname:string;
    phone:string;
    email:string;
    type:"login" | "signup";
}

export default function WelcomePage(){
    const [data,setData] =
    useState<UserDetails | null>(null);
    useEffect(()=>{
        const user =
        localStorage.getItem(
            "userDetails"
        );

        if(user){
            setData(
                JSON.parse(user)
            );
        }
    },[]);

    return (
        <div
            style={{
                width:"400px",
                margin:"50px auto",
                padding:"30px",
                border:"1px solid #ddd",
                borderRadius:"10px"
            }}
        >

            <h1>
                Welcome 🎉
            </h1>
            {
                data?.type === "signup"
                ?
                <p>
                    Your account has been created successfully.
                </p>
                :
                <p>
                    You have logged in successfully.
                </p>
            }

            <h2>
                Your Details
            </h2>
            {
                data &&
                <table
                    border={1}
                    width="100%"
                >
                    <tbody>
                        <tr>
                            <td>
                                First Name
                            </td>

                            <td>
                                {data.fname}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Last Name
                            </td>
                            <td>
                                {data.lname}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Phone
                            </td>
                            <td>
                                {data.phone}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email
                            </td>
                            <td>
                                {data.email}
                            </td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    );
}