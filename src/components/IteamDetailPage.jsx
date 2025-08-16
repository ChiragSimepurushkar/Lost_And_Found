import React from 'react';

const ItemDetailPage = ({ selectedItem, user, setCurrentChatWith, setCurrentPage }) => (
    <div className="min-h-screen bg-gray-50 p-8 pt-24 flex flex-col items-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedItem.title}</h2>
            <img
                src={selectedItem.imageUrl || 'https://placehold.co/600x400/e2e8f0/64748b?text=No+Image'}
                alt={selectedItem.title}
                className="w-full h-96 object-cover rounded-md mb-6"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/64748b?text=No+Image'; }}
            />
            <div className="text-gray-700 mb-6">
                <p><strong>Description:</strong> {selectedItem.description}</p>
                <p><strong>Category:</strong> {selectedItem.category}</p>
                <p><strong>Location:</strong> {selectedItem.location}</p>
                <p><strong>Posted by:</strong> {selectedItem.userDisplayName}</p>
                <p><strong>Posted on:</strong> {selectedItem.timestamp?.toDate().toLocaleString()}</p>
            </div>
            {selectedItem.userId !== user?.uid && (
                <button
                    onClick={() => {
                        setCurrentChatWith(selectedItem.userId);
                        setCurrentPage('chat');
                    }}
                    className="bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:bg-green-700 transition w-full"
                >
                    Start a Secure Chat with the {selectedItem.status === 'lost' ? 'Finder' : 'Owner'}
                </button>
            )}
        </div>
    </div>
);

export default ItemDetailPage;