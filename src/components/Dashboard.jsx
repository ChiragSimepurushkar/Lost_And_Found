import React, { useState } from 'react';
import CampusMap from './CampusMap.jsx';
import HowItWorks from './HowItWorks.jsx';
const Dashboard = ({ items, categories, handleItemClick }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');

    const filteredItems = items.filter(item => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const matchesSearch = lowerCaseQuery === '' || item.title.toLowerCase().includes(lowerCaseQuery) || item.description.toLowerCase().includes(lowerCaseQuery);
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-gray-50 p-8 pt-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-indigo-800 mb-6">Lost & Found Dashboard</h2>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                    <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Campus Activity Map</h2>
                        <p className="text-sm text-gray-600 mb-4">A live overview of recently reported lost (red) and found (green) items. Click a pin for more details.</p>
                        <CampusMap items={filteredItems} onPinClick={handleItemClick} />
                    </div>
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Search Items</h2>
                        <p className="text-sm text-gray-600 mb-4">Filter through all reported items.</p>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                id="search-input"
                                className="form-input flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Search by keyword (e.g., 'iphone', 'notebook')..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <select
                                id="filter-category"
                                className="form-input p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="All">All Categories</option>
                                {categories.filter(cat => cat !== 'All').map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                            <select
                                id="filter-status"
                                className="form-input p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                            >
                                <option value="All">All Statuses</option>
                                <option value="lost">Lost</option>
                                <option value="found">Found</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredItems.length > 0 ? (
                        filteredItems.map(item => (
                            <div
                                key={item.id}
                                onClick={() => handleItemClick(item)}
                                className="bg-white rounded-xl shadow-lg p-4 cursor-pointer hover:shadow-xl transition flex flex-col justify-between"
                            >
                                <div>
                                    <img
                                        src={item.imageUrl || 'https://placehold.co/400x300/e2e8f0/64748b?text=No+Image'}
                                        alt={item.title}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e2e8f0/64748b?text=No+Image'; }}
                                    />
                                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 mb-2">{item.description}</p>
                                    <div className="text-sm text-gray-500">
                                        <p><strong>Type:</strong> {item.status}</p>
                                        <p><strong>Category:</strong> {item.category}</p>
                                        <p><strong>Location:</strong> {item.location}</p>
                                        <p><strong>Posted by:</strong> {item.userDisplayName}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center col-span-full">No items match your search criteria.</p>
                    )}
                </div>
                <HowItWorks />
            </div>
        </div>
    );
};

export default Dashboard;