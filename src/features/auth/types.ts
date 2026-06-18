// This describes what we send to backend
export interface SignupRequest {
    //name: string;
    email: string;
    password: string;
}

// This describes backend response
export interface SignupResponse {
    //id: string;
    //email: string;
    message: string;
    user: User;
}

//Data sent to backend for login
export interface LoginRequest {
    email: string;
    password: string;
}

//Backend login response
export interface LoginResponse {
    message: string;
    user: User;
}

// This describes backend user object
export interface User{
    email:string;
}