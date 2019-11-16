import React, { useState } from "react";
import axios from "axios";
import { AuthContainer } from "./PageStyles/AuthStyles";
import { Link, withRouter } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Login = props => {
    const [userInput, setUser] = useState({
        username: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        axios
            .post("https://lambda-mud-test.herokuapp.com/api/login/", userInput)
            .then(res => {
                console.log("Successful Login");
                localStorage.setItem("key", res.data.key);
                props.history.push("/dashboard");
            })
            .catch(err => {
                console.log(err);
                setError("Unable to log in with provided credentials");
                setTimeout(() => {
                    setError(null);
                }, 5000);
            })
            .finally(err => {
                setLoading(false);
            });

    };

    return (
        <AuthContainer>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={{ height: "180px" }}>
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
                    value="Login"
                />
                <PropagateLoader
                    sizeUnit={"px"}
                    size={8}
                    color={"blue"}
                    loading={loading}
                />
                {error && (
                    <p style={{ color: "darkred", textAlign: "center" }}>{error}</p>
                )}
            </form>
            <span>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </span>
        </AuthContainer >
    );
};

export default withRouter(Login);