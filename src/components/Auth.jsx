import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthPage = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({ email: '', password: '', name: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setError('');
        // Dummy validation
        if (!form.email || !form.password || (!isLogin && !form.name)) {
            setError('Please fill all fields.');
            return;
        }
        // Here you would call your API
        if (onLogin) onLogin();
        // Redirect based on state
        if (location.state && location.state.seller) {
            navigate('/account/dashboard');
        } else {
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    {isLogin ? (
                        <>
                            Don't have an account?{' '}
                            <button
                                className="text-blue-600 hover:underline"
                                onClick={() => setIsLogin(false)}
                            >
                                Sign Up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button
                                className="text-blue-600 hover:underline"
                                onClick={() => {
                                    setIsLogin(true);
                                    // preserve seller state if present
                                    if (location.state && location.state.seller) {
                                        navigate('/auth', { state: { seller: true }, replace: true });
                                    }
                                }}
                            >
                                Login
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;