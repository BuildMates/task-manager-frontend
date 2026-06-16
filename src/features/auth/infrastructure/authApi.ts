// Import our common axios instance
import { api } from "../../../shared/api/axios";

// Import TypeScript types
import type {
    SignupRequest,
    SignupResponse
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
            "/signup",
            data
        );

        return response.data;
    }
};