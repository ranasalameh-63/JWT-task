// src/pages/SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [messagerse , setMessageres] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response =await axios.post("http://localhost:9000/signup", { username, password });
      setMessageres(response.data.message)
      setTimeout(() => {
        navigate("/login");
      }, 2000); 
      setError("")
      
    } catch (err) {
      setError("Username already exists");
      setMessageres("")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {messagerse && <div className="text-green-500 text-center mb-4">{messagerse}</div>}

        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input 
              type="text" 
              id="username" 
              className="w-full p-3 border border-gray-300 rounded-md mt-2" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-3 border border-gray-300 rounded-md mt-2" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
