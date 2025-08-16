// import React, { useState } from 'react';

// const ReportItemPage = ({ handleReportItem }) => {
//     const [selectedType, setSelectedType] = useState('lost');

//     const handleButtonClick = (type) => {
//         setSelectedType(type);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-8 pt-24">
//             <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Report a Lost or Found Item</h2>
//             <form onSubmit={handleReportItem} className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2">I am reporting an item I...</label>
//                     <div className="flex space-x-4">
//                         <button
//                             type="button"
//                             className={`flex-1 py-3 font-semibold rounded-lg ${selectedType === 'lost' ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'}`}
//                             onClick={() => handleButtonClick('lost')}
//                         >
//                             Lost
//                         </button>
//                         <button
//                             type="button"
//                             className={`flex-1 py-3 font-semibold rounded-lg ${selectedType === 'found' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
//                             onClick={() => handleButtonClick('found')}
//                         >
//                             Found
//                         </button>
//                     </div>
//                     <input type="hidden" name="type" value={selectedType} />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title</label>
//                     <input type="text" name="title" id="title" required className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Description</label>
//                     <textarea name="description" id="description" rows="4" required className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2" htmlFor="category">Category</label>
//                     <input type="text" name="category" id="category" required className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 font-bold mb-2" htmlFor="location">Last Seen/Found Location</label>
//                     <input type="text" name="location" id="location" required className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
//                 </div>
//                 <div className="mb-6">
//                     <label className="block text-gray-700 font-bold mb-2" htmlFor="imageUrl">Image URL</label>
//                     <input type="url" name="imageUrl" id="imageUrl" className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
//                 </div>
//                 <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-full hover:bg-indigo-700 transition">
//                     Submit Report
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ReportItemPage;


import React, { useState } from 'react';

// This is a combined and toggable component for both Lost and Found item reporting pages.
// It includes a simple state to switch between the two forms and a shared layout.
const ReportItemPage = ({ handleReportItem }) => {
    const [selectedType, setSelectedType] = useState('lost');

    const handleButtonClick = (type) => {
        setSelectedType(type);
    };

    return (
        <div id="webcrumbs">
            {/* Global Styles */}
            <style jsx>{`
                @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
                @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
                @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined);
                @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css);
            `}</style>
            
            <div className="min-h-screen flex flex-col bg-gray-50 font-sans">

                {/* Main Content with Toggling Logic */}
                <main className="flex-grow container mx-auto px-4 py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Report a {selectedType === 'lost' ? 'Lost' : 'Found'} Item</h1>
                        <p className="text-gray-600">
                            {selectedType === 'lost' ? "Provide details about your lost item to help us find it faster." : "Provide details about the item you found to help us return it to its owner."}
                        </p>
                    </div>

                    <div className="mb-6 flex space-x-4">
                        <button
                            type="button"
                            className={`flex-1 py-3 font-semibold rounded-lg ${selectedType === 'lost' ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                            onClick={() => handleButtonClick('lost')}
                        >
                            Report Lost
                        </button>
                        <button
                            type="button"
                            className={`flex-1 py-3 font-semibold rounded-lg ${selectedType === 'found' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                            onClick={() => handleButtonClick('found')}
                        >
                            Report Found
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            {/* Form for both Lost and Found */}
                            <form onSubmit={handleReportItem}>
                                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                                    <div className="p-6 border-b border-gray-200">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-1">Item Information</h2>
                                        <p className="text-gray-500 text-sm">All fields marked with * are required</p>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="item-category" className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                                                <select id="item-category" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                                                    <option value="">Select category</option>
                                                    <option value="electronics">Electronics</option>
                                                    <option value="accessories">Accessories & Jewelry</option>
                                                    <option value="documents">Documents & ID</option>
                                                    <option value="clothing">Clothing & Bags</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="item-name" className="block text-sm font-medium text-gray-700 mb-1">Item Name *</label>
                                                <input type="text" id="item-name" placeholder="e.g. Blue Backpack, iPhone 14" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="item-description" className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                                            <textarea id="item-description" rows="4" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" placeholder="Detailed description including color, brand, distinctive features, etc."></textarea>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="date-lost" className="block text-sm font-medium text-gray-700 mb-1">Date {selectedType === 'lost' ? 'Lost' : 'Found'} *</label>
                                                <input type="date" id="date-lost" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" />
                                            </div>
                                            <div>
                                                <label htmlFor="time-lost" className="block text-sm font-medium text-gray-700 mb-1">Approximate Time</label>
                                                <input type="time" id="time-lost" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">Upload Images (max 3)</label>
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center hover:border-primary-500 transition-colors cursor-pointer h-32 hover:bg-gray-50">
                                                    <span className="material-symbols-outlined text-3xl text-gray-400">add_photo_alternate</span>
                                                    <span className="text-xs text-gray-500 mt-2">Upload Image</span>
                                                </div>
                                                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center hover:border-primary-500 transition-colors cursor-pointer h-32 hover:bg-gray-50">
                                                    <span className="material-symbols-outlined text-3xl text-gray-400">add_photo_alternate</span>
                                                    <span className="text-xs text-gray-500 mt-2">Upload Image</span>
                                                </div>
                                                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center hover:border-primary-500 transition-colors cursor-pointer h-32 hover:bg-gray-50">
                                                    <span className="material-symbols-outlined text-3xl text-gray-400">add_photo_alternate</span>
                                                    <span className="text-xs text-gray-500 mt-2">Upload Image</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8 transition-all duration-300 hover:shadow-lg">
                                    <div className="p-6 border-b border-gray-200">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-1">Location Information</h2>
                                        <p className="text-gray-500 text-sm">Help us narrow down where your item might be</p>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        <div>
                                            <label htmlFor="building" className="block text-sm font-medium text-gray-700 mb-1">Building/Area *</label>
                                            <input type="text" id="building" placeholder="e.g. Library, Science Center, Cafeteria" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" />
                                        </div>
                                        <div>
                                            <label htmlFor="floor-room" className="block text-sm font-medium text-gray-700 mb-1">Floor/Room (if applicable)</label>
                                            <input type="text" id="floor-room" placeholder="e.g. 3rd Floor, Room 224" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">Share Your Location</label>
                                            <div className="bg-gray-100 rounded-md h-64 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 flex items-end">
                                                    <div className="p-4 w-full">
                                                        <button type="button" className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white w-full py-3 rounded-md transition-colors shadow-md transform hover:-translate-y-1 hover:shadow-lg">
                                                            <span className="material-symbols-outlined">my_location</span> Share Current Location
                                                        </button>
                                                    </div>
                                                </div>
                                                <img src="https://images.unsplash.com/photo-1694928850410-b209896782a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBtYXB8ZW58MHx8fHwxNzU1MzI0OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Campus Map" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">This helps us locate your item on campus. Your location data is only used for this purpose.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8 transition-all duration-300 hover:shadow-lg">
                                    <div className="p-6 border-b border-gray-200">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-1">Contact Information</h2>
                                        <p className="text-gray-500 text-sm">How can we contact you about the {selectedType === 'lost' ? 'found' : 'reported'} item</p>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                                <input type="text" id="full-name" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" />
                                            </div>
                                            <div>
                                                <label htmlFor="student-id" className="block text-sm font-medium text-gray-700 mb-1">Student/Staff ID *</label>
                                                <input type="text" id="student-id" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                                <input type="email" id="email" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                                <input type="tel" id="phone" className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" />
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="notifications" className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
                                            <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700">Receive notifications about my {selectedType === 'lost' ? 'lost' : 'reported'} item</label>
                                        </div>
                                        <div className="mt-8 flex justify-end gap-4">
                                            <button type="button" className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-medium">
                                                Save as Draft
                                            </button>
                                            <button type="submit" className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                                                Submit Report
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Sidebar Tips & Info */}
                        <div className="md:col-span-1">
                            <div className="sticky top-24">
                                {selectedType === 'lost' ? (
                                    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                                        <div className="p-5 border-b border-gray-200">
                                            <h3 className="font-semibold text-gray-800">Quick Tips</h3>
                                        </div>
                                        <div className="p-5">
                                            <ul className="space-y-3">
                                                <li className="flex gap-3">
                                                    <span className="material-symbols-outlined text-primary-600 flex-shrink-0">tips_and_updates</span>
                                                    <span className="text-sm text-gray-600">Be as specific as possible with your item description.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="material-symbols-outlined text-primary-600 flex-shrink-0">photo_camera</span>
                                                    <span className="text-sm text-gray-600">Upload clear photos of your item if available.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="material-symbols-outlined text-primary-600 flex-shrink-0">schedule</span>
                                                    <span className="text-sm text-gray-600">Report as soon as possible after losing your item.</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="material-symbols-outlined text-primary-600 flex-shrink-0">pin_drop</span>
                                                    <span className="text-sm text-gray-600">Try to narrow down the location as much as possible.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 transition-all duration-300 hover:shadow-lg">
                                        <div className="p-6 border-b border-gray-200">
                                            <div className="text-xl font-semibold text-gray-800 mb-1">Tips for Reporting Found Items</div>
                                        </div>
                                        <div className="p-6">
                                            <div className="space-y-4">
                                                <li className="flex gap-3">
                                                    <span className="material-symbols-outlined text-primary-600 flex-shrink-0">schedule</span>
                                                    <p className="text-sm text-gray-700">Turn in found items as soon as possible</p>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="material-symbols-outlined text-primary-600 flex-shrink-0">description</span>
                                                    <p className="text-sm text-gray-700">Be as detailed as possible about where and when you found it</p>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="material-symbols-outlined text-primary-600 flex-shrink-0">photo_camera</span>
                                                    <p className="text-sm text-gray-700">Take clear photos to help identify the item</p>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="material-symbols-outlined text-primary-600 flex-shrink-0">privacy_tip</span>
                                                    <p className="text-sm text-gray-700">Don't open bags or check personal devices you've found</p>
                                                </li>
                                            </div>
                                            <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-100">
                                                <h3 className="font-medium text-primary-800 flex items-center gap-2">
                                                    <span className="material-symbols-outlined">tips_and_updates</span> Thank you!
                                                </h3>
                                                <p className="mt-2 text-sm text-primary-700">
                                                    Your honesty helps reunite people with their belongings. Over 80% of found items are claimed by their owners when properly reported!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                                    <div className="p-5 border-b border-gray-200">
                                        <h3 className="font-semibold text-gray-800">Lost & Found Locations</h3>
                                    </div>
                                    <div className="p-5">
                                        <ul className="space-y-4">
                                            <li>
                                                <div className="font-medium text-gray-800">Main Library</div>
                                                <div className="text-sm text-gray-600">Front Desk, Ground Floor</div>
                                                <div className="text-sm text-gray-500">Open: 8am - 10pm</div>
                                            </li>
                                            <li>
                                                <div className="font-medium text-gray-800">Student Center</div>
                                                <div className="text-sm text-gray-600">Information Desk, 1st Floor</div>
                                                <div className="text-sm text-gray-500">Open: 7am - 11pm</div>
                                            </li>
                                            <li>
                                                <div className="font-medium text-gray-800">Campus Security</div>
                                                <div className="text-sm text-gray-600">Security Office, Building C</div>
                                                <div className="text-sm text-gray-500">Open: 24/7</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-primary-50 rounded-xl overflow-hidden">
                                    <div className="p-5">
                                        <h3 className="font-semibold text-primary-800 flex items-center gap-2">
                                            <span className="material-symbols-outlined">support_agent</span> Need Help?
                                        </h3>
                                        <p className="text-sm text-primary-700 mb-4">Contact our support team for assistance with your lost item report.</p>
                                        <div className="space-y-3">
                                            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-primary-700 hover:text-primary-800 transition-colors">
                                                <span className="material-symbols-outlined">call</span> (123) 456-7890
                                            </a>
                                            <a href="mailto:support@campus.edu" className="flex items-center gap-2 text-sm text-primary-700 hover:text-primary-800 transition-colors">
                                                <span className="material-symbols-outlined">email</span> support@campus.edu
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6">
                                    <div className="p-6">
                                        <h3 className="font-medium text-gray-800 mb-3">Need Help?</h3>
                                        <a href="#" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
                                            <span className="material-symbols-outlined">contact_support</span>
                                            <span>Contact Lost & Found Office</span>
                                        </a>
                                        <p className="text-sm text-gray-500 mt-2">Building: Student Union, Room 102</p>
                                        <p className="text-sm text-gray-500">Hours: Mon-Fri, 9am-5pm</p>
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

export default ReportItemPage;
