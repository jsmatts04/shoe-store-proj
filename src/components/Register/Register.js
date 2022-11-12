import React from 'react'

function Register() {
  return (
    <div className="entire-login-div">
        <form>
            <h1>Register</h1>
            <div className="form-group">
                <label> Name</label>
                <input
                type ="text"
                className="form-control"
                placeholder="Enter Full Name"
                />
                <span></span>

            </div>
            <div className="form-group">
                <label> Email</label>
                <input
                type ="text"
                className="form-control"
                placeholder="Enter Email"
                />
                <span></span>

            </div>
            <div className="form-group">
                <label> Password</label>
                <input
                type ="text"
                className="form-control"
                placeholder="Enter Password"
                />
                <span></span>
            </div>
            <button type="submit"className="register-submit-btn"> Register</button>
            <p>Already registered?</p>
            <p>Login Here</p>
        </form>
    </div>
  )
}

export default Register