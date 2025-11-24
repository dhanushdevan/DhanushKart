import React from 'react';
import './loginpage.css';
import Header from '../header/header';
import Footer from '../footer';
import { Route } from 'react-router-dom';
function LoginPage() {
    return (
        <>
        <div className="login-page">
            <p>hi there</p>
            <h1>Welcome to DhanushKart!</h1>
            <form className='form-login'>
                <div className="input-group">
                    <input id="username" name="username" type="text" placeholder=" " />
                    <label htmlFor="username">Username</label>
                </div>

                <div className="input-group">
                    <input id="password" name="password" type="password" placeholder=" " />
                    <label htmlFor="password">Password</label>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    gap: '20px'
                }}>
                <button type="submit" className="btn-login">Login</button>
                <button type="button" className="btn-login" onClick={() => window.location.href = '/register'}>Register</button>
                </div>
                <a href="/forgot-password">Forgot Password?</a>
            </form>
        </div>
        </>
    );
}

export default LoginPage;