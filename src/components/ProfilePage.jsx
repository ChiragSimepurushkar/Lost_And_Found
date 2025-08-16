// import React from 'react';

// const ProfilePage = ({ items, user }) => {
//     const userItems = items.filter(item => item.userId === user?.uid);
//     return (
//         <div className="min-h-screen bg-gray-50 p-8 pt-24">
//             <h2 className="text-3xl font-bold text-indigo-800 mb-6">My Reported Items</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {userItems.length > 0 ? (
//                     userItems.map(item => (
//                         <div
//                             key={item.id}
//                             className="bg-white rounded-xl shadow-lg p-4"
//                         >
//                             <img
//                                 src={item.imageUrl || 'https://placehold.co/400x300/e2e8f0/64748b?text=No+Image'}
//                                 alt={item.title}
//                                 className="w-full h-48 object-cover rounded-md mb-4"
//                                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e2e8f0/64748b?text=No+Image'; }}
//                             />
//                             <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
//                             <p className="text-gray-600 mb-2">{item.description}</p>
//                             <div className="text-sm text-gray-500">
//                                 <p><strong>Type:</strong> {item.status}</p>
//                                 <p><strong>Category:</strong> {item.category}</p>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-gray-500">You haven't reported any items yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;

import React from 'react';

const ProfilePage = ({ items, user }) => {
    // Mock data for the "Check Status" page to combine with the user's reported items.
    // In a real application, this data would come from an API.
    const mockReports = [
        { id: 'LF-2023-1089', type: 'Lost', item: 'Blue Backpack', date: 'Oct 15, 2023', status: 'Pending' },
        { id: 'LF-2023-1056', type: 'Found', item: 'Water Bottle', date: 'Oct 10, 2023', status: 'Matched' },
        { id: 'LF-2023-1024', type: 'Lost', item: 'Glasses Case', date: 'Oct 5, 2023', status: 'Not Found' },
    ];
    
    const mockMatches = [
        { id: 'LF-2023-1097', item: 'Blue Backpack', location: 'Science Building', date: 'Oct 16, 2023', match: '90%', imageUrl: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxibHVlJTIwYmFja3BhY2t8ZW58MHx8fHwxNzU1MzI5MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
        { id: 'LF-2023-1035', item: 'Black Glasses Case', location: 'Library', date: 'Oct 6, 2023', match: '75%', imageUrl: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGdsYXNzZXMlMjBjYXNlfGVufDB8fHx8MTc1NTMyOTI1OXww&ixlib=rb-4.1.0&q=80&w=1080' },
    ];

    const mockFoundItems = [
        { id: '1', title: 'Silver Laptop Charger', location: 'Student Center', date: 'Oct 18, 2023', imageUrl: 'https://images.unsplash.com/photo-1588599376442-3cbf9c67449e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjaGFyZ2VyfGVufDB8fHx8MTc1NTMyOTIyN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
        { id: '2', title: 'House Keys with Red Keychain', location: 'Gym', date: 'Oct 17, 2023', imageUrl: 'https://images.unsplash.com/photo-1581167667183-629418569fb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxrZXlzJTIwd2l0aCUyMHJlZCUyMGtleWNoYWlufGVufDB8fHx8MTc1NTMyOTI1OXww&ixlib=rb-4.1.0&q=80&w=1080' },
        { id: '3', title: 'Black Umbrella', location: 'Administration Building', date: 'Oct 16, 2023', imageUrl: 'https://images.unsplash.com/photo-1552507895-a0496871764a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxibGFjayUyMHVtYnJlbGxhfGVufDB8fHx8MTc1NTMyOTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    ];
    
    // This part of the code is from the separate ProfilePage component
    const userItems = items ? items.filter(item => item.userId === user?.uid) : [];
    
    return (
        <div id="webcrumbs">
            {/* Global styles */}
            <style jsx>{`
                @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
                @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
                @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined);
                @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css);
            `}</style>

            <div className="min-h-screen flex flex-col bg-gray-50">
                <main className="flex-grow container mx-auto px-4 py-8">
                    {/* Check Status Section from first HTML file */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Check Status</h1>
                        <p className="text-gray-600">
                            Track your lost items and see found items that match your description.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                        <div className="md:col-span-3 lg:col-span-4">
                            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800">Your Reports</h2>
                                        <p className="text-gray-500 text-sm">Track and manage your submitted reports</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Search your reports..."
                                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-full"
                                            />
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
                                        </div>
                                        <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                                            <option value="all">All Reports</option>
                                            <option value="lost">Lost Items</option>
                                            <option value="found">Found Items</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report ID</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {mockReports.map(report => (
                                                <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.id}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <span className={`px-2 py-1 rounded-full text-xs ${report.type === 'Lost' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>{report.type}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.item}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        <span className={`px-2 py-1 rounded-full text-xs ${report.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : report.status === 'Matched' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{report.status}</span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <a href="#" className="text-primary-600 hover:text-primary-900 mr-3">View</a>
                                                        <a href="#" className="text-gray-600 hover:text-gray-900">Edit</a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex justify-between items-center mt-6">
                                    <div className="text-sm text-gray-500">
                                        Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">3</span> results
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                                        <button className="px-3 py-1 border border-gray-300 rounded-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>Next</button>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-semibold text-gray-800">Potential Matches</h2>
                                        <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">2 New</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        These items match the description of your lost items
                                    </p>
                                    <div className="space-y-4">
                                        {mockMatches.map(match => (
                                            <div key={match.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                                        <img
                                                            src={match.imageUrl}
                                                            alt={match.item}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h3 className="font-medium text-gray-800">{match.item}</h3>
                                                        <p className="text-sm text-gray-500">Found on {match.date} at {match.location}</p>
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">{match.match} Match</span>
                                                            <span className="text-xs text-gray-500">Report #{match.id}</span>
                                                        </div>
                                                    </div>
                                                    <button className="ml-2 text-primary-600 hover:text-primary-800 transition-colors">
                                                        <span className="material-symbols-outlined">arrow_forward</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full mt-4 py-2 text-primary-600 border border-primary-600 rounded-md hover:bg-primary-50 transition-colors">
                                        View All Matches
                                    </button>
                                </div>
                                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recently Found Items</h2>
                                    <p className="text-gray-600 mb-4">
                                        Check if any of these recently found items belong to you
                                    </p>
                                    <div className="grid grid-cols-1 gap-4">
                                        {mockFoundItems.map(foundItem => (
                                            <div key={foundItem.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors">
                                                <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                                    <img
                                                        src={foundItem.imageUrl}
                                                        alt={foundItem.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-grow">
                                                    <h3 className="font-medium text-gray-800 text-sm">{foundItem.title}</h3>
                                                    <p className="text-xs text-gray-500">{foundItem.location} • {foundItem.date}</p>
                                                </div>
                                                <button className="flex-shrink-0 p-1 text-gray-400 hover:text-primary-600 transition-colors rounded-full hover:bg-gray-100">
                                                    <span className="material-symbols-outlined text-sm">visibility</span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full mt-4 py-2 text-primary-600 border border-primary-600 rounded-md hover:bg-primary-50 transition-colors">
                                        Browse All Found Items
                                    </button>
                                </div>
                            </div>
                            <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <h2 class="text-xl font-semibold text-gray-800 mb-4">Submit a New Report</h2>
                                <p class="text-gray-600 mb-6">
                                    Report a lost or found item to our campus lost and found system
                                </p>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div
                                        class="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow hover:-translate-y-1 transform duration-300"
                                    >
                                        <div
                                            class="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-blue-600 mb-4"
                                        >
                                            <span class="material-symbols-outlined">search</span>
                                        </div>
                                        <h3 class="text-lg font-medium text-gray-800 mb-2">Report a Lost Item</h3>
                                        <p class="text-sm text-gray-600 mb-4">
                                            Provide details about your lost item so we can help you find it
                                        </p>
                                        <a
                                            href="#"
                                            class="inline-block text-blue-600 hover:text-blue-800 transition-colors font-medium"
                                        >
                                            Report Lost Item →
                                        </a>
                                    </div>
                                    <div
                                        class="bg-green-50 p-6 rounded-lg border border-green-100 hover:shadow-md transition-shadow hover:-translate-y-1 transform duration-300"
                                    >
                                        <div
                                            class="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full text-green-600 mb-4"
                                        >
                                            <span class="material-symbols-outlined">inventory_2</span>
                                        </div>
                                        <h3 class="text-lg font-medium text-gray-800 mb-2">Report a Found Item</h3>
                                        <p class="text-sm text-gray-600 mb-4">
                                            Turn in a found item to help it get back to its owner
                                        </p>
                                        <a
                                            href="#"
                                            class="inline-block text-green-600 hover:text-green-800 transition-colors font-medium"
                                        >
                                            Report Found Item →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProfilePage;