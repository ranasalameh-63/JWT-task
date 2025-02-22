import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* Header Section */}
      <header className="bg-gray-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="text-lg mt-4">Your one-stop solution for all your needs</p>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center py-20 px-5">
        
        {/* Info Section */}
        <section className="w-full md:w-1/2 p-5">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5">Why Choose Us?</h2>
          <ul className="space-y-4">
            <li className="text-lg text-gray-700">✔ Easy Sign-Up & Sign-In</li>
            <li className="text-lg text-gray-700">✔ Secure & Fast Access</li>
            <li className="text-lg text-gray-700">✔ 24/7 Customer Support</li>
            <li className="text-lg text-gray-700">✔ Personalized Services</li>
          </ul>
        </section>

        {/* Action Buttons */}
        <section className="w-full md:w-1/2 p-5 mt-8 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-5">Get Started</h2>
          <div className="space-x-4">
            <Link 
              to="/signup" 
              className="inline-block bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition-all"
            >
              Sign Up
            </Link>
            <Link 
              to="/login" 
              className="inline-block bg-gray-700 text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-all"
            >
              Login
            </Link>
          </div>
        </section>
        
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2025 Your Company Name</p>
      </footer>

    </div>
  );
}

export default Home;
