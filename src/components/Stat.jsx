import React from 'react';

const Stat = () => {
    return (
        <div className="bg-gray-50 py-12 px-4">
            <div className="hero mt-4 mb-4">
                <div className="hero-content text-center">
                    <div>
                        {/* Eye-Catching Title */}
                        <h1 className="mt-2 text-5xl font-light text-center mb-6 text-blue-500  bg-clip-text  drop-shadow-md">
                            🚀 Our Lost and Found Progress 🌟
                        </h1>
                        
                        {/* Subtitle */}
                        <p className="text-lg text-gray-600 font-medium mb-8">
                            Discover how far we’ve come in reconnecting lost items with their rightful owners!
                        </p>

                        {/* Stats Section */}
                        <div className="stats shadow-lg bg-white rounded-lg">
                            <div className="stat place-items-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 p-6 rounded-md">
                                <div className="stat-value text-blue-700 text-4xl font-bold">31K+</div>
                                <div className="stat-title text-gray-700">Projects Completed</div>
                            </div>

                            <div className="stat place-items-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 p-6 rounded-md">
                                <div className="stat-value text-blue-700 text-4xl font-bold">88K+</div>
                                <div className="stat-title text-gray-700">Happy Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;
