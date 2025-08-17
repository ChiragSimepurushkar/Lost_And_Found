// import React from 'react';

// const AboutPage = () => (
//     <div className="min-h-screen bg-gray-50 p-8 pt-24">
//         <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold text-indigo-800 mb-4">About FindIt@Campus</h2>
//             <p className="text-gray-700 mb-4">
//                 FindIt@Campus is a community-driven platform designed to solve the problem of lost and found items on large campuses.
//                 Our goal is to centralize the process of reporting and recovering items, making it more efficient and less stressful for everyone.
//             </p>
//             <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Our Mission</h3>
//             <p className="text-gray-700">
//                 We aim to increase the recovery rate of lost items and foster a stronger sense of community and trust among students, faculty, and staff.
//             </p>
//         </div>
//     </div>
// );

// export default AboutPage;'


import React from 'react';

const AboutPage = () => {
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
                <main className="flex-grow container mx-auto px-4 py-12">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">About FindIt@Campus</h1>
                            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6 rounded-full"></div>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                We're on a mission to help students reunite with their lost belongings and create a
                                more connected campus community.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                            <div className="md:flex">
                                <div className="md:w-1/2 p-8 md:p-12">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
                                    <p className="text-gray-600 mb-4">
                                        FindIt@Campus started as a student project at our university when we noticed how
                                        many items were being lost across campus with no efficient way to report or find
                                        them.
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        We created this platform to streamline the process of reporting lost items and
                                        reuniting them with their owners. Our goal is to reduce the stress and
                                        inconvenience of losing personal belongings.
                                    </p>
                                    <p className="text-gray-600">
                                        Since our launch, we've helped hundreds of students recover their lost
                                        items, from laptops and phones to cherished personal mementos.
                                    </p>
                                </div>
                                <div className="md:w-1/2 bg-gray-100">
                                    <img
                                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                                        alt="Students collaborating on campus"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Mission</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <span className="material-symbols-outlined text-3xl">connect_without_contact</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Connect</h3>
                                    <p className="text-gray-600 text-center">
                                        Build a stronger campus community by connecting those who have lost items with
                                        those who have found them.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <span className="material-symbols-outlined text-3xl">find_replace</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Recover</h3>
                                    <p className="text-gray-600 text-center">
                                        Create an efficient system to maximize the chances of recovering lost items
                                        quickly and safely.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <span className="material-symbols-outlined text-3xl">support_agent</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 text-center mb-3">Support</h3>
                                    <p className="text-gray-600 text-center">
                                        Provide peace of mind and assistance to students during the stressful experience
                                        of losing something important.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                                        <img
                                            src="media/images/me7.jpg"
                                            alt="Chirag Simepurushkar"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-4 w-full">
                                                <div className="flex justify-center gap-3">
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><i className="fa-brands fa-linkedin text-lg"></i></a>
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><i className="fa-brands fa-github text-lg"></i></a>
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><span className="material-symbols-outlined">mail</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="font-bold text-lg text-gray-800">Chirag Simepurushkar</h3>
                                        <p className="text-primary-600 text-sm mb-2">Co-Founder & Lead Developer</p>
                                        <p className="text-gray-600 text-sm">
                                            Passionate about creating technology that solves everyday problems for
                                            students.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                                        <img
                                            src="media/images/deepangsh.jpg"
                                            alt="Deepanghsh Naik"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-4 w-full">
                                                <div className="flex justify-center gap-3">
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><i className="fa-brands fa-linkedin text-lg"></i></a>
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><i className="fa-brands fa-github text-lg"></i></a>
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><span className="material-symbols-outlined">mail</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="font-bold text-lg text-gray-800">Deepanghsh Naik</h3>
                                        <p className="text-primary-600 text-sm mb-2">frontend Developer</p>
                                        <p className="text-gray-600 text-sm">
                                            Focused on creating intuitive user experiences that make reporting lost
                                            items simple.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                                        <img
                                            src="media/images/Austen.jpg"
                                            alt="Austen Gomes"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-4 w-full">
                                                <div className="flex justify-center gap-3">
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><i className="fa-brands fa-linkedin text-lg"></i></a>
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><i className="fa-brands fa-github text-lg"></i></a>
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><span className="material-symbols-outlined">mail</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="font-bold text-lg text-gray-800">Austen Gomes</h3>
                                        <p className="text-primary-600 text-sm mb-2">UI/UX Designer</p>
                                        <p className="text-gray-600 text-sm">
                                            Building robust systems to handle item reporting and matching algorithms.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                                            alt="Manjunath Gavda"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <div className="p-4 w-full">
                                                <div className="flex justify-center gap-3">
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><i className="fa-brands fa-linkedin text-lg"></i></a>
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><i className="fa-brands fa-github text-lg"></i></a>
                                                    <a href="#" className="text-white hover:text-primary-300 transition-colors"><span className="material-symbols-outlined">mail</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="font-bold text-lg text-gray-800">Manjunath Gavda</h3>
                                        <p className="text-primary-600 text-sm mb-2">Community Manager</p>
                                        <p className="text-gray-600 text-sm">
                                            Coordinating with campus organizations to expand our reach and help more
                                            students.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary-50 rounded-xl p-8 md:p-12 shadow-md">
                            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Get In Touch</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-2xl">location_on</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
                                    <p className="text-gray-600 text-center">
                                        Student Union Building, Room 203, University Campus
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-2xl">mail</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                                    <p className="text-gray-600 text-center">contact@finditcampus.edu</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-2xl">call</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                                    <p className="text-gray-600 text-center">(123) 456-7890</p>
                                </div>
                            </div>
                            <div className="mt-10 text-center">
                                <a href="#" className="inline-block px-6 py-3 bg-primary-600 text-black rounded-md hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-150">
                                    Contact Our Team
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            
            {/* <div className="min-h-screen bg-gray-50 p-8 pt-24">
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-4">About FindIt@Campus</h2>
                    <p className="text-gray-700 mb-4">
                        FindIt@Campus is a community-driven platform designed to solve the problem of lost and found items on large campuses.
                        Our goal is to centralize the process of reporting and recovering items, making it more efficient and less stressful for everyone.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                        We aim to increase the recovery rate of lost items and foster a stronger sense of community and trust among students, faculty, and staff.
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default AboutPage;