import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SellerTerms = () => {
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const handleAgree = () => {
        setAgreed(true);
        setTimeout(() => {
            navigate('/auth', { state: { seller: true } });
        }, 500); // Small delay for UX, optional
    };

    if (agreed) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded shadow text-center">
                    <p className="text-lg font-semibold mb-4">Redirecting to sign up...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded shadow max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Seller Terms & Conditions</h2>
                <div className="mb-6 text-gray-700 text-sm max-h-60 overflow-y-auto">
                    <p>
                        By signing up as a seller, you agree to abide by our marketplace rules, provide accurate information, fulfill your obligations to buyers, and comply with all applicable laws.
                        You are responsible for your listings, transactions, and customer service. Violations may result in account suspension or removal.
                    </p>
                    <ul className="list-disc pl-5 mt-2">
                        <li>No counterfeit or prohibited items.</li>
                        <li>Timely fulfillment of orders.</li>
                        <li>Respectful communication with buyers.</li>
                        <li>Compliance with payment and tax regulations.</li>
                        <li>...and other platform policies.</li>
                    </ul>
                </div>
                <button
                    className="w-full bg-blue-700 text-white py-2 rounded font-bold hover:bg-blue-800 transition"
                    onClick={handleAgree}
                >
                    I Agree & Continue
                </button>
            </div>
        </div>
    );
};

export default SellerTerms;