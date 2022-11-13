import React, { useState } from "react";
import { Alert } from '@material-ui/lab';
import LoginSuccess from "../LoginSuccess/LoginSuccess";

function Login() {
    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);


    function handleLogin(e){
        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g,"");
        let pass = localStorage.getItem("Password").replace(/"/g,"");

        if(!emaillog || !passwordlog){
            setFlag(true);
            console.log("Empty");
        }else if(passwordlog !== pass || emaillog !== mail){
            setFlag(true)
        }else{
            setHome(!home);
            setFlag(false);
        }

    }

    return (
        <div>
            {home ?(
            <form onSubmit={handleLogin}>
            <h3>Login</h3>
            <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            onChange={(event) => setEmaillog(event.target.value)}
                        />
                        <span></span>

                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(event) => setPasswordlog(event.target.value)}
                        />
                        <span></span>
                    </div>
                    <button type="submit" className="register-submit-btn"> Login</button>
                    {flag && (
                        <Alert className="alert-message">
                            Please Fill Every Field
                        </Alert>
                    )}
                    </form>
                    ):(
                        <LoginSuccess />
                        )}
                    <br></br>
        </div>
    )


}

export default Login;