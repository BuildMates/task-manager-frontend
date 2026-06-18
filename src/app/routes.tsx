import {
    Routes,
    Route,
    Navigate
}
from "react-router-dom";

import SignupPage
from "../pages/SignupPage";

import WelcomePage
from "../pages/WelcomePage";

import LoginPage
from "../pages/LoginPage";

export default function AppRoutes() {

return (
    <Routes>
        <Route
            path="/"
            element={
                <Navigate to ="/signup"/>
            }
        />
        <Route

            path="/signup"

            element={
                <SignupPage/>
            }

        />
        <Route
            path="/login"
            element={
                <LoginPage/>
            }
        />

        <Route
            path="/welcome"
            element={
                <WelcomePage/>
            }
        />

        <Route
            path="*"
            element={
                <Navigate to="/signup"/>
            }
        />
    </Routes>
);
}