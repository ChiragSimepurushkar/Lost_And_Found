// import React from 'react';

// const Hero = ({ setCurrentPage }) => (
//     <div className="bg-white rounded-3xl shadow-lg p-6 md:p-12 mt-8 flex flex-col md:flex-row items-center gap-8 md:gap-16">
//         <div className="md:w-1/2 text-center md:text-left">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
//                 Reunite with your lost items, effortlessly.
//             </h1>
//             <p className="text-lg text-gray-600 mb-8">
//                 FindIt@Campus is the centralized platform to report, find, and recover lost and found items on your university campus.
//             </p>
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//                 <button onClick={() => setCurrentPage('report')} className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
//                     Report a Lost Item
//                 </button>
//                 <button onClick={() => setCurrentPage('dashboard')} className="bg-white text-indigo-600 border border-indigo-200 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-indigo-50 transition-colors">
//                     Search Found Items
//                 </button>
//             </div>
//         </div>
//         <div className="md:w-1/2 flex justify-center">
//             <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl">
//                 <img src="https://placehold.co/400x600/6366f1/ffffff?text=App+Mockup" alt="FindIt@Campus App Mockup" className="w-full h-auto object-cover" />
//             </div>
//         </div>
//     </div>
// );

// const Features = () => (
//     <section className="w-full max-w-7xl mx-auto py-16 px-4">
//         <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">Experience a smarter way to find</h2>
//             <p className="mt-2 text-lg text-gray-600">Say goodbye to bulletin boards and social media clutter.</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
//                 <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">Unified Reporting</h3>
//                 <p className="mt-2 text-gray-600">Easily create a post with a description, category, and an image.</p>
//             </div>
//             <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
//                 <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">Interactive Map</h3>
//                 <p className="mt-2 text-gray-600">Pin the exact location where your item was lost or found on campus.</p>
//             </div>
//             <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
//                 <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//                     </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">Smart Notifications</h3>
//                 <p className="mt-2 text-gray-600">Get an alert when a potential match for your lost item is found.</p>
//             </div>
//             <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
//                 <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                     </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900">Secure Communication</h3>
//                 <p className="mt-2 text-gray-600">Safely coordinate a hand-off without revealing any personal details.</p>
//             </div>
//         </div>
//     </section>
// );

// const CampusStats = ({ items }) => {
//     const lostCount = items.filter(item => item.status.toLowerCase() === 'lost').length;
//     const foundCount = items.filter(item => item.status.toLowerCase() === 'found').length;
//     const totalCount = items.length;
//     const recoveredCount = 0; // Placeholder

//     return (
//         <div className="w-full max-w-7xl mx-auto py-16 px-4">
//             <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-gray-900">Making our campus a better place</h2>
//                 <p className="mt-2 text-lg text-gray-600">Your campus community in numbers.</p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//                 <div className="bg-white p-8 rounded-2xl shadow-md">
//                     <p className="text-5xl font-bold text-indigo-600">{totalCount}</p>
//                     <p className="mt-2 text-gray-600">Total Items Reported</p>
//                 </div>
//                 <div className="bg-white p-8 rounded-2xl shadow-md">
//                     <p className="text-5xl font-bold text-red-600">{lostCount}</p>
//                     <p className="mt-2 text-gray-600">Lost Items</p>
//                 </div>
//                 <div className="bg-white p-8 rounded-2xl shadow-md">
//                     <p className="text-5xl font-bold text-green-600">{foundCount}</p>
//                     <p className="mt-2 text-gray-600">Found Items</p>
//                 </div>
//                 <div className="bg-white p-8 rounded-2xl shadow-md">
//                     <p className="text-5xl font-bold text-gray-600">{recoveredCount}</p>
//                     <p className="mt-2 text-gray-600">Items Recovered</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const LandingPage = ({ setCurrentPage, items }) => (
//     <div className="min-h-screen bg-gray-100 p-8 pt-24">
//         <div className="max-w-7xl mx-auto">
//             <Hero setCurrentPage={setCurrentPage} />
//             <Features />
//             <CampusStats items={items} />
//         </div>
//         <div className="w-full py-20 px-4 bg-indigo-600 text-white mt-12 rounded-t-3xl">
//             <div className="max-w-4xl mx-auto text-center">
//                 <h2 className="text-4xl font-bold mb-4">Join your campus community.</h2>
//                 <p className="text-xl font-light mb-8">
//                     Start helping others and get your lost items back today.
//                 </p>
//                 <button onClick={() => setCurrentPage('report')} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
//                     Get Started
//                 </button>
//             </div>
//         </div>
//     </div>
// );

// export default LandingPage;

import React from 'react';

// Main component for the entire page
const LandingPage = () => {

    // You can handle state and logic here, for a full application
    const [items] = React.useState([
        { status: 'lost', id: 1 },
        { status: 'found', id: 2 },
        { status: 'lost', id: 3 },
    ]);
    const setCurrentPage = (pageName) => {
        console.log(`Navigating to: ${pageName}`);
        // This is a placeholder for actual navigation logic
    };

    return (
        <div id="webcrumbs" className="font-sans">
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css');
            `}</style>

            <div className="flex flex-col min-h-screen bg-gray-50">

                <main className="flex-grow">
                    {/* Hero Section */}
                    <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white">
                        <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/2 space-y-6">
                                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                    Lost something on campus? <br />
                                    <span className="text-yellow-300">Find it with us!</span>
                                </h1>
                                <p className="text-lg md:text-xl opacity-90">
                                    The easiest way to recover lost items or report found ones on campus. Connect with your community and help each other out.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <a href="lost.html" className="px-6 py-3 bg-white text-primary-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
                                        Report Lost Item
                                    </a>
                                    <a href="found.html" className="px-6 py-3 bg-primary-800 text-white font-medium rounded-md hover:bg-primary-900 transition-colors">
                                        Report Found Item
                                    </a>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjYW1wdXN8ZW58MHx8fHwxNzU1MzI0MDI1fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Lost and Found Illustration" className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="py-16 container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl">report</span>
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-3">Report</h3>
                                <p className="text-gray-600 text-center">Quickly submit details about lost or found items through our easy-to-use forms.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl">search</span>
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-3">Search</h3>
                                <p className="text-gray-600 text-center">Browse through our database to find matches for your lost items or identify owners.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl">handshake</span>
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-3">Reconnect</h3>
                                <p className="text-gray-600 text-center">Get notified when there's a match and safely arrange for item retrieval.</p>
                            </div>
                        </div>
                    </section>

                    {/* Recent Success Stories Section */}
                    <section className="bg-gray-100 py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl font-bold text-center mb-12">Recent Success Stories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                    <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzdHVkZW50fGVufDB8fHx8MTc1NTMyNDAyN3ww&ixlib=rb-4.1.0&q=80&w=1080" alt="Student with retrieved laptop" className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-2">Sarah's Laptop Returned</h3>
                                        <p className="text-gray-600 mb-4">Left her laptop in the library during finals week. Recovered within 24 hours!</p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                                            <span>3 days ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                    <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHxzdHVkZW50fGVufDB8fHx8MTc1NTMyNDAyN3ww&ixlib=rb-4.1.0&q=80&w=1080" alt="Student with returned wallet" className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-2">Mike's Wallet Found</h3>
                                        <p className="text-gray-600 mb-4">Lost his wallet with important ID cards. A fellow student found and returned it!</p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                                            <span>1 week ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                    <img src="https://images.unsplash.com/photo-1592890288564-76628a30a657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lfGVufDB8fHx8MTc1NTIyOTgwOHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Student with phone" className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="font-semibold text-lg mb-2">Jason's Phone Recovered</h3>
                                        <p className="text-gray-600 mb-4">Left his phone at the campus cafeteria. Returned the same day thanks to FindIt!</p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                                            <span>2 weeks ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action Section */}
                    <section className="py-16 container mx-auto px-4">
                        <div className="bg-primary-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold mb-4">Ready to find your lost item?</h2>
                                <p className="text-gray-700 mb-6">Join hundreds of campus members who have successfully recovered their belongings. It's quick, easy, and free!</p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="signin.html" className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors">
                                        Get Started
                                    </a>
                                    <a href="about.html" className="px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzZWFyY2h8ZW58MHx8fHwxNzU1MzI0MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Find items illustration" className="rounded-xl" />
                            </div>
                        </div>
                    </section>

                    {/* All other React components combined */}
                    <div className="min-h-screen bg-gray-100 p-8 pt-24">
                        <div className="max-w-7xl mx-auto">
                            {/* Hero Component */}
                            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-12 mt-8 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="md:w-1/2 text-center md:text-left">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                                        Reunite with your lost items, effortlessly.
                                    </h1>
                                    <p className="text-lg text-gray-600 mb-8">
                                        FindIt@Campus is the centralized platform to report, find, and recover lost and found items on your university campus.
                                    </p>
                                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                        <button onClick={() => setCurrentPage('report')} className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
                                            Report a Lost Item
                                        </button>
                                        <button onClick={() => setCurrentPage('dashboard')} className="bg-white text-indigo-600 border border-indigo-200 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-indigo-50 transition-colors">
                                            Search Found Items
                                        </button>
                                    </div>
                                </div>
                                <div className="md:w-1/2 flex justify-center">
                                    <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl">
                                        <img src="https://placehold.co/400x600/6366f1/ffffff?text=App+Mockup" alt="FindIt@Campus App Mockup" className="w-full h-auto object-cover" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Features Component */}
                            <section className="w-full max-w-7xl mx-auto py-16 px-4">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900">Experience a smarter way to find</h2>
                                    <p className="mt-2 text-lg text-gray-600">Say goodbye to bulletin boards and social media clutter.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                                        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Unified Reporting</h3>
                                        <p className="mt-2 text-gray-600">Easily create a post with a description, category, and an image.</p>
                                    </div>
                                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                                        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Interactive Map</h3>
                                        <p className="mt-2 text-gray-600">Pin the exact location where your item was lost or found on campus.</p>
                                    </div>
                                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                                        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Smart Notifications</h3>
                                        <p className="mt-2 text-gray-600">Get an alert when a potential match for your lost item is found.</p>
                                    </div>
                                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                                        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Secure Communication</h3>
                                        <p className="mt-2 text-gray-600">Safely coordinate a hand-off without revealing any personal details.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Campus Stats Component */}
                            <div className="w-full max-w-7xl mx-auto py-16 px-4">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-gray-900">Making our campus a better place</h2>
                                    <p className="mt-2 text-lg text-gray-600">Your campus community in numbers.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                                    <div className="bg-white p-8 rounded-2xl shadow-md">
                                        <p className="text-5xl font-bold text-indigo-600">{items.length}</p>
                                        <p className="mt-2 text-gray-600">Total Items Reported</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-2xl shadow-md">
                                        <p className="text-5xl font-bold text-red-600">{items.filter(item => item.status.toLowerCase() === 'lost').length}</p>
                                        <p className="mt-2 text-gray-600">Lost Items</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-2xl shadow-md">
                                        <p className="text-5xl font-bold text-green-600">{items.filter(item => item.status.toLowerCase() === 'found').length}</p>
                                        <p className="mt-2 text-gray-600">Found Items</p>
                                    </div>
                                    <div className="bg-white p-8 rounded-2xl shadow-md">
                                        <p className="text-5xl font-bold text-gray-600">0</p>
                                        <p className="mt-2 text-gray-600">Items Recovered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full py-20 px-4 bg-indigo-600 text-white mt-12 rounded-t-3xl">
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-4xl font-bold mb-4">Join your campus community.</h2>
                                <p className="text-xl font-light mb-8">
                                    Start helping others and get your lost items back today.
                                </p>
                                <button onClick={() => setCurrentPage('report')} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LandingPage;