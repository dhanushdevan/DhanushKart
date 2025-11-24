import React from 'react';
import './loginpage.css';
function Signup() {
    return (
        <>
        <div className='login-page'>
            <h1>Signup Page</h1>
            <form className='form-signup'>
                <div className="input-group">
                    <input id="username" name="username" type="text" placeholder=" " />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="input-group">
                    <input id="email" name="email" type="email" placeholder=" " />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-group">
                    <input id="password" name="password" type="password" placeholder=" " />
                    <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btn-signup">Signup</button>
            </form>
        </div>
        </>
    );
}

export default Signup;