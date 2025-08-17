// import React from 'react';

// const Signup = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-4">
//       <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8 space-y-8 border border-gray-200 dark:border-gray-700">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Create your account</h2>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//             Already have an account?
//             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">Sign in here</a>
//           </p>
//         </div>
//         <form className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
//             <div className="mt-1">
//               <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm" />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
//             <div className="mt-1">
//               <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm" />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
//             <div className="mt-1">
//               <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white sm:text-sm" />
//             </div>
//           </div>
//           <div>
//             <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105">
//               Sign up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// This is a combined and toggable component for both the login and sign-up pages.
// A state variable `isLogin` is used to toggle between the two forms.
import React, { useState } from 'react';

// This is a combined and toggable component for both the login and sign-up pages.
// A state variable `isLogin` is used to toggle between the two forms.
const Signup= () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = (e) => {
        e.preventDefault();
        setIsLogin(!isLogin);
    };

    const loginContent = (
        <div className="p-8 md:w-3/5">
            <div className="text-center mb-6 md:text-left">
                <h1 className="text-2xl font-bold text-gray-800">Login to Your Account</h1>
                <p className="text-gray-600 mt-2">Enter your credentials to continue</p>
            </div>
            <form className="space-y-5">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <span className="material-symbols-outlined text-sm">mail</span>
                        </span>
                        <input
                            type="email"
                            id="email"
                            className="w-full py-3 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <a href="#" className="text-sm text-primary-600 hover:text-primary-800 transition-colors">Forgot password?</a>
                    </div>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <span className="material-symbols-outlined text-sm">lock</span>
                        </span>
                        <input
                            type="password"
                            id="password"
                            className="w-full py-3 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                            placeholder="••••••••"
                        />
                        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                            <span className="material-symbols-outlined text-sm">visibility</span>
                        </button>
                    </div>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-primary-600 text-black rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                    Sign In
                </button>
            </form>
            <div className="mt-6 text-center">
                <p className="text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" onClick={toggleForm} className="text-primary-600 hover:text-primary-800 font-medium transition-colors">
                        Sign up now
                    </a>
                </p>
            </div>
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                    <button type="button" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
                        <i className="fa-brands fa-google text-red-500"></i>
                    </button>
                    <button type="button" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
                        <i className="fa-brands fa-facebook text-blue-600"></i>
                    </button>
                    <button type="button" className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
                        <i className="fa-brands fa-apple text-gray-800"></i>
                    </button>
                </div>
            </div>
        </div>
    );

    const signupContent = (
        <div className="w-full md:w-1/2 py-8 px-8 md:px-12">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Create your account</h1>
                <p className="text-gray-600 mt-2">Join FindIt@Campus to report lost or found items</p>
            </div>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                        <input
                            type="text"
                            id="first-name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                            placeholder="John"
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                        <input
                            type="text"
                            id="last-name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                            placeholder="Doe"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="john.doe@university.edu"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                            placeholder="••••••••"
                        />
                        <button type="button" className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700">
                            <span className="material-symbols-outlined text-lg">visibility_off</span>
                        </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters with mixed cases and numbers</p>
                </div>
                <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="••••••••"
                    />
                </div>
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                            id="terms"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-medium text-gray-700">
                            I agree to the{" "}
                            <a href="#" className="text-primary-600 hover:text-primary-500">Terms of Service</a>{" "}
                            and{" "}
                            <a href="#" className="text-primary-600 hover:text-primary-500">Privacy Policy</a>
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-black font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transform hover:-translate-y-0.5 transition-all duration-150"
                >
                    Create account
                </button>
            </form>
            <p className="mt-8 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <a href="#" onClick={toggleForm} className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                    Sign in here
                </a>
            </p>
            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-3 bg-white text-gray-500">Or continue with</span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <button type="button" className="w-full py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex justify-center items-center transition-colors">
                    <i className="fa-brands fa-google text-lg"></i>
                </button>
                <button type="button" className="w-full py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex justify-center items-center transition-colors">
                    <i className="fa-brands fa-facebook text-lg"></i>
                </button>
                <button type="button" className="w-full py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex justify-center items-center transition-colors">
                    <i className="fa-brands fa-apple text-lg"></i>
                </button>
            </div>
        </div>
    );

    return (
        <div id="webcrumbs">
            <style jsx>{`
                @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
                @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
                @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined);
                @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css);
            `}</style>

            <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
                <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden md:flex">
                    {/* Left Side Panel (Conditional on isLogin state) */}
                    {isLogin ? (
                        <div className="bg-primary-600 text-white p-8 flex flex-col justify-center items-center md:w-2/5">
                            <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
                            <p className="text-center text-primary-100 mb-6">Login to access your lost and found items dashboard</p>
                            <img
                                src="https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxsb3N0JTIwYW5kJTIwZm91bmR8ZW58MHx8fHwxNzU1MjI5ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Lost and Found Illustration"
                                className="w-32 h-32 object-cover rounded-full border-4 border-primary-300 shadow-lg transform hover:scale-105 transition-all duration-300"
                            />
                        </div>
                    ) : (
                        <div className="hidden md:block md:w-1/2 bg-primary-600 relative">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxMHx8Y2FtcHVzJTIwc3R1ZGVudHN8ZW58MHx8fHwxNzU1MzMxMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Campus students"
                                className="absolute inset-0 h-full w-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-600/60 flex flex-col justify-center px-12 text-white">
                                <h2 className="text-3xl font-bold mb-4">Welcome to FindIt@Campus</h2>
                                <p className="mb-6">Join our community to help reunite lost items with their owners on campus.</p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="bg-white/20 p-2 rounded-full mr-3"><span className="material-symbols-outlined">search</span></div>
                                        <p>Report and track lost items easily</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="bg-white/20 p-2 rounded-full mr-3"><span className="material-symbols-outlined">notifications</span></div>
                                        <p>Get notified when items are found</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="bg-white/20 p-2 rounded-full mr-3"><span className="material-symbols-outlined">history</span></div>
                                        <p>Track your items status in real-time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Right Side Form Area (Conditional on isLogin state) */}
                    {isLogin ? (
                        loginContent
                    ) : (
                        signupContent
                    )}
                </div>
            </div>
        </div>
    );
};

export default Signup;