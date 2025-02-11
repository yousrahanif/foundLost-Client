import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="hero bg-gradient-to-r from-blue-300 via-blue-500 to-purple-500 min-h-screen flex items-center justify-center">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-6xl font-extrabold text-white animate-pulse mb-4">🚨 WRONG PATH! 🚨</h1>
                        <p className="text-2xl text-white font-semibold mb-6">Oops! Something went wrong.</p>
                        <p className="text-lg text-gray-200 mb-6">Double-check your URL or try navigating to a different page.</p>
                        <a href="/" className="btn bg-gradient-to-r from-blue-400 to-blue-300 text-white hover:bg-gradient-to-r hover:from-yellow-300 hover:to-red-400 transition ease-in-out duration-300">
                            Go to Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
