import React, { useState } from "react";
import { Alert } from '@material-ui/lab';
import Login from "../Login/Login";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));

            console.log("Saved in Local Storage");
            setLogin(!login);
        }

    }

    function handleClick() {
        setLogin(!login);
    }

    return (
        <div className="entire-login-div">

            {login ? (
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            onChange={(event) => setName(event.target.value)}
                        />
                        <span></span>

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <span></span>

                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <span></span>
                    </div>
                    <button type="submit" className="register-submit-btn"> Register</button>
                    <br></br>
                    
                    <p onClick={handleClick}>Already registered?{" "} Login Here</p>
                    

                    {flag && (
                        <Alert className="alert-message">
                            Please Fill Every Field
                        </Alert>
                    )}
                </form>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default Register;