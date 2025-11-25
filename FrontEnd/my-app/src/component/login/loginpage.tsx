import React, { useState } from 'react';
import './loginpage.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const validatePassword = (pwd: string) => {
        if (!pwd || pwd.length === 0) return 'Password is required.';
        if (pwd.length < 8) return 'Password must be at least 8 characters.';
        if (!/\d/.test(pwd)) return 'Password must include at least one number.';
        return '';
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const pwdError = validatePassword(password);
        if (pwdError) {
            setMessage(pwdError);
            setIsValid(false);
            return;
        }

        setMessage('Login submitted');
        setIsValid(true);
        console.log('Form submitted');
        console.log('Username:', username);
        // don't log passwords in production; this is just for local debugging
        console.log('Password:', password);
        // TODO: replace console logs with actual API call using process.env.REACT_APP_BASE_URL
        return window.location.href = '/';
    };

    return (
        <div className="login-page">
            <p>hi there</p>
            <h1>Welcome to DhanushKart!</h1>
            <form className="form-login" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input id="username" name="username" type="text" placeholder=" " value={username} onChange={e => setUsername(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </div>

                <div className="input-group">
                    <input id="password" name="password" type="password" placeholder=" " value={password} onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="password">Password</label>
                </div>

                {isValid === false && (
                    <div role="status" aria-live="polite" className="validation-error" style={{ marginTop: '8px' }}>
                        {message}
                    </div>
                )}

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
    );
}

export default LoginPage;
