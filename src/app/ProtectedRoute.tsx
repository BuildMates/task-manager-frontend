import {
    Navigate
}
from "react-router-dom";

interface Props {

    children: React.ReactNode;

}

export default function ProtectedRoute(
    {
        children
    }: Props
){
    const userDetails =

    localStorage.getItem(
        "userDetails"
    );

    // No signup/login happened
    // Send user back to auth page
    if(!userDetails){

        return (

            <Navigate
                to="/"
            />

        );

    }

    // User exists
    // Allow welcome page

    return children;
}