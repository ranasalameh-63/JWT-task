import React, { useEffect, useState  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [user, setUser] = useState(null);
      const navigate = useNavigate();
    

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get("http://localhost:9000/profile", { withCredentials: true });
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching profile");
            }
        };
        fetchProfile();
    }, []);


    async function handlelogout() {
        try {
            const response = await axios.post("http://localhost:9000/logout", {}, { withCredentials: true });
            navigate("/login")
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }
    

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {user ? (
                    <>
                        <h2 className="text-2xl font-bold text-center mb-4">Welcome</h2>
                        <p className="text-gray-700 text-center mb-4">This is your profile page.</p>
                        <div className="text-center">
                            <button
                                onClick={() => handlelogout()}
                                className="bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600"
                            >
                                Logout
                            </button>

                        </div>
                    </>
                ) : (
                    <p className="text-center text-gray-700">Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Profile;
