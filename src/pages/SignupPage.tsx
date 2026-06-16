// Import signup UI
import SignupForm
from "../features/auth/presentation/SignupForm";

// Page component

export default function SignupPage(){
    return (
        <div>
            <h1>
                Create Account
            </h1>
            <SignupForm/>
        </div>
    );
}