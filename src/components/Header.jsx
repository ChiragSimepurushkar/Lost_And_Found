import React from 'react';

const Header = ({ setCurrentPage }) => (
  <header className="w-full bg-white shadow-sm p-4 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
      <a href="#" className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-2xl font-bold text-gray-900">FindIt<span className="text-indigo-600">@Campus</span></span>
      </a>
      <nav className="hidden md:flex space-x-8 items-center">
        <button onClick={() => setCurrentPage('landing')} className="text-gray-600 hover:text-indigo-600 transition-colors">Home</button>
        <button onClick={() => setCurrentPage('dashboard')} className="text-gray-600 hover:text-indigo-600 transition-colors">Dashboard</button>
        <button onClick={() => setCurrentPage('report')} className="text-gray-600 hover:text-indigo-600 transition-colors">Report an Item</button>
        <button onClick={() => setCurrentPage('about')} className="text-gray-600 hover:text-indigo-600 transition-colors">About</button>
        <button onClick={() => setCurrentPage('signup')} className="text-gray-600 hover:text-indigo-600 transition-colors">Signup</button>
        <button onClick={() => setCurrentPage('profile')} className="text-gray-600 hover:text-indigo-600 transition-colors">My Profile</button>
      </nav>
      <div className="md:hidden">
        <select onChange={(e) => setCurrentPage(e.target.value)} className="bg-gray-100 p-2 rounded-md">
          <option value="landing">Home</option>
          <option value="dashboard">Dashboard</option>
          <option value="report">Report an Item</option>
          <option value="about">About</option>
          <option value="signup">Signup</option>
          <option value="profile">My Profile</option>
        </select>
      </div>
    </div>
  </header>
);

export default Header;