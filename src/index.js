// import React from 'react';
// import { Routes, Route,BrowserRouter } from 'react-router-dom';
// import './index.css';
// // Import shared components
// import Navbar from './landingpage/Navbar';
// import Footer from './landingpage/Footer';

// // Import page components from their respective folders
// import HomePage from './landingpage/home/Homepage';
// import AboutPage from './landingpage/about/AboutPage';
// import Signup from './landingpage/signup/Signup';
// import NotFound from './landingpage/NotFound';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//       </BrowserRouter>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Assuming you have a CSS file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);