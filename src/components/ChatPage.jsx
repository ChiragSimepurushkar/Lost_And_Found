import React from 'react';

const ChatPage = ({ chatMessages, newChatInput, setNewChatInput, handleSendMessage, user }) => {
    return (
        <div className="min-h-screen bg-gray-50 p-8 pt-24 flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl w-full flex flex-col h-[70vh]">
                <div className="flex-grow overflow-y-auto mb-4">
                    {chatMessages.length === 0 ? (
                        <div className="text-center text-gray-500">
                            Start a conversation to discuss this item.
                        </div>
                    ) : (
                        chatMessages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 p-3 rounded-lg max-w-[80%] ${
                                    msg.senderId === user?.uid ? 'ml-auto bg-indigo-100 text-indigo-800' : 'mr-auto bg-gray-200 text-gray-800'
                                }`}
                            >
                                <p>{msg.text}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {msg.timestamp?.toDate().toLocaleTimeString()}
                                </p>
                            </div>
                        ))
                    )}
                </div>
                <div className="flex">
                    <input
                        type="text"
                        value={newChatInput}
                        onChange={(e) => setNewChatInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSendMessage();
                            }
                        }}
                        placeholder="Type your message..."
                        className="flex-grow p-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-indigo-600 text-white p-3 rounded-r-xl hover:bg-indigo-700 transition"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;