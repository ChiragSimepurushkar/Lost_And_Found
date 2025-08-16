import React from 'react';

const HowItWorks = () => (
    <div className="bg-indigo-50 p-8 rounded-xl shadow-inner mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600 text-white text-3xl mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Report Your Item</h3>
                <p className="text-gray-600">Lost or found something? Quickly post details, an image, and pin the location on the map.</p>
            </div>
            <div>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600 text-white text-3xl mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Search & Match</h3>
                <p className="text-gray-600">Our powerful search engine and smart notifications help you find potential matches quickly.</p>
            </div>
            <div>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600 text-white text-3xl mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-3-3H6a3 3 0 00-3 3v2h5m-4 0v-1a4 4 0 014-4h4a4 4 0 014 4v1m-6-7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Connect & Recover</h3>
                <p className="text-gray-600">Use our secure, anonymous chat to arrange a pickup and get your belongings back.</p>
            </div>
        </div>
    </div>
);

export default HowItWorks;