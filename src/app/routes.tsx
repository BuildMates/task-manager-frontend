import {
    Routes,
    Route,
    Navigate
}
    from "react-router-dom";

import AuthPage
    from "../pages/AuthPage";

import WelcomePage
    from "../pages/WelcomePage";

import ProtectedRoute
    from "./ProtectedRoute";

export default function AppRoutes() {

    return (
        <Routes>
            {/* Default route */}
            {/* When user opens localhost:5173 */}
            {/* show Auth page */}
            <Route
                path="/"
                element={
                    <AuthPage />
                }
            />
            {/* After successful login/signup */}
            <Route
                path="/welcome"
                element={
                    <ProtectedRoute>
                        <WelcomePage />
                    </ProtectedRoute>
                }
            />
            {/* Any wrong URL */}
            {/* Example: /abc */}
            {/* redirect back to auth */}

            <Route
                path="*"
                element={
                    <Navigate to="/" />
                }
            />
        </Routes>
    );
}