import {authApi}
from "../infrastructure/authApi";

import type {
    LoginRequest
}

from "../types";

export function useLogin(){
    const login =async(
        data:LoginRequest
    )=>{
        const response = await authApi.login(data);
        return response;
    }
    return {
        login
    };
}