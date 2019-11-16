import React, { useState } from "react";
import axios from "axios";
import { AuthContainer } from "../ViewStyles/AuthStyles";
import { Link, withRouter } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Register = props => {
    const [userInput, setUser] = useState({
        username: "",
        password1: "",
        password2: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);

        axios
            .post(
                "https://lambda-mud-test.herokuapp.com/api/registration/",
                userInput
            )
            .then(res => {
                console.log(res);
                localStorage.setItem("key", res.data.key);
                props.history.push("/");
            })
            .catch(err => {
                if (err.response) {
                    if (err.response.data.password1) {
                        setError(err.response.data.password1);
                    }
                }
                if (userInput.password1 !== userInput.password2)
                    setError("Password confirmation doesn't match");
                else {
                    setError("This User is already registered");
                }
                setTimeout(() => {
                    setError("");
                }, 5000);
            })
            .finally(err => {
                setLoading(false);
            });
    };

    return (
        <AuthContainer>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={userInput.username}
                    onChange={e => setUser({ ...userInput, username: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={userInput.password1}
                    onChange={e => setUser({ ...userInput, password1: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    value={userInput.password2}
                    onChange={e => setUser({ ...userInput, password2: e.target.value })}
                />

                <input
                    type="submit"
                    value={props.loading ? "Loading..." : "Register"}
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
                Already have an account? <Link to="/login">Login</Link>
            </span>
        </AuthContainer>
    );
};

export default withRouter(Register);