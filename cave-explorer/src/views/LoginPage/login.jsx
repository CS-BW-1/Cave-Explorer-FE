import React, { useState } from "react";
import axios from "axios";
import { AuthContainer } from "../ViewStyles/AuthStyles";
import { Link, withRouter } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Login = props => {
    const [userInput, setUser] = useState({
        username: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const validateForm = () => {
        return userInput.username.length > 1 && userInput.password.length > 7;
    };

    return (
        <AuthContainer>
            <h1>Login</h1>
            <form /*</AuthContainer>onSubmit={handleSubmit}*/ style={{ height: "180px" }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={userInput.username}
                    onChange={e => setUser({ ...userInput, username: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={userInput.password}
                    onChange={e => setUser({ ...userInput, password: e.target.value })}
                />
                <input
                    type="submit"
                    disabled={!validateForm()}
                    value={props.loading ? "Loading..." : "Login"}
                />
                <PropagateLoader
                    sizeUnit={"px"}
                    size={8}
                    color={"darkred"}
                    loading={loading}
                />
                {error && (
                    <p style={{ color: "darkred", textAlign: "center" }}>{error}</p>
                )}
            </form>
            <span>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </span>
        </AuthContainer>
    );
};

export default withRouter(Login);