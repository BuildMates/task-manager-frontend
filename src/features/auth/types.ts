// This describes what we send to backend
export interface SignupRequest {
    name: string;
    email: string;
    password: string;
}

// This describes backend response
export interface SignupResponse {
    id: string;
    email: string;
    message: string;
}