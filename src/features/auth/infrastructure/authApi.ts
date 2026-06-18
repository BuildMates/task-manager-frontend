// Import our common axios instance
import { api } from "../../../shared/api/axios";

// Import TypeScript types
import type {
    SignupRequest,
    SignupResponse,
    LoginRequest,
    LoginResponse
}
    from "../types";

// Create auth API object
export const authApi = {
    // Signup function It receives user data
    signup: async (
        data: SignupRequest
    ) => {
        // Calling Python API
        // POST /signup
        const response = await api.post<SignupResponse>(
            "/auth/signup",
            data
        );

        return response.data;
    },
     login: async(
        data:LoginRequest
     )=>{
        const response = await api.post<LoginResponse>(
            "/auth/login",
            data
        );
        return response.data;
     }
};