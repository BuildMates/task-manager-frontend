import {authApi}
from "../infrastructure/authApi";

import type{
    SignupRequest
}
from "../types";

// Custom React hook
// Hooks start with "use"
export function useSignup(){
    // Function responsible for signup
    const signup = async (
        data:SignupRequest

    )=>{
           // Calling API layer
        const result = await authApi.signup(data);
        return result;
    };
    return {
        signup
    };
}