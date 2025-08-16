import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white text-gray-700 pt-12 pb-6 shadow-inner font-sans rounded-t-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand and Copyright Column */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <img src="https://placehold.co/50x50/6366F1/FFFFFF?text=Logo" alt="FindIt@Campus logo" className="w-8 h-8 rounded-full" />
                            <span className="text-2xl font-bold text-gray-900">FindIt<span className="text-indigo-600">@Campus</span></span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            ©{new Date().getFullYear()}, FindIt@Campus. All rights reserved.
                        </p>
                        <p className="text-gray-300 mb-4 text-sm mt-4">The leading lost and found platform for campus communities.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-indigo-600 transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
                            <a href="#" className="text-gray-300 hover:text-indigo-600 transition-colors"><i className="fa-brands fa-twitter text-xl"></i></a>
                            <a href="#" className="text-gray-300 hover:text-indigo-600 transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="col-span-1">
                        <h5 className="font-semibold text-lg text-gray-900 mb-3">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><a className="text-sm text-gray-600 hover:text-indigo-600 transition-colors" href="index.html">Home</a></li>
                            <li><a className="text-sm text-gray-600 hover:text-indigo-600 transition-colors" href="about.html">About Us</a></li>
                            <li><a className="text-sm text-gray-600 hover:text-indigo-600 transition-colors" href="lost.html">Report Lost Item</a></li>
                            <li><a className="text-sm text-gray-600 hover:text-indigo-600 transition-colors" href="found.html">Report Found Item</a></li>
                        </ul>
                    </div>
                    
                    {/* Resources Column */}
                    <div className="col-span-1">
                        <h5 className="font-semibold text-lg text-gray-900 mb-3">Resources</h5>
                        <ul className="space-y-2">
                            <li><a className="text-sm text-gray-600 hover:text-indigo-600 transition-colors" href="#">FAQs</a></li>
                            <li><a className="text-sm text-gray-600 hover:text-indigo-600 transition-colors" href="#">Privacy Policy</a></li>
                            <li><a className="text-sm text-gray-600 hover:text-indigo-600 transition-colors" href="#">Terms of Service</a></li>
                            <li><a className="text-sm text-gray-600 hover:text-indigo-600 transition-colors" href="#">Contact Support</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Column */}
                    <div className="col-span-1">
                        <h5 className="font-semibold text-lg text-gray-900 mb-3">Contact Us</h5>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined">location_on</span>
                                <span>University Campus, Building 4</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined">mail</span>
                                <span>info@finditcampus.edu</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="material-symbols-outlined">call</span>
                                <span>(123) 456-7890</span>
                            </li>
                        </ul>
                        <h4 className="font-medium mb-2 text-gray-900 mt-4">Meet Our Team</h4>
                        <p className="text-gray-600 text-sm">Team Lead: Chirag Simepurushkar</p>
                        <p className="text-gray-600 text-sm">Members: Austen Gomes, Deepanghsh Naik, Manjunath Gavda</p>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
                    <p className="mb-2">FindIt@Campus is a platform designed to connect individuals within the campus community. We are not responsible for the items listed, lost, or found. Please exercise caution and follow safety guidelines when arranging an exchange. Report any suspicious activity to campus security.</p>
                    <p>Remember to never share sensitive personal information. Use our secure, anonymous messaging system to communicate.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;