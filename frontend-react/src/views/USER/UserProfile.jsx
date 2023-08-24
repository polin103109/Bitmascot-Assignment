
import { useEffect, useState } from "react";
import Navbar from "../NAVBAR/Navbar";
import Sidebar from "../SIDEBAR/Sidebar";
import './userprofile.css'
const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('user-info');
   if (token) {
        console.log("Token retrieved from localStorage:", token);

         let response = await fetch("http://localhost:8000/api/user", {
            method:'GET',
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            
          });

          const responseData = await response.json();
          console.log("User profile data:", responseData);
          setUserProfile(responseData.data);
          
         
      }
    };

    fetchData(); // Call the async function immediately
  }, []);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
   
    <>
    <Navbar/>
    <Sidebar/>
    <div className="user-profile">
      <h2>User Profile</h2>
      <p><strong>First Name:</strong> {userProfile.first_name} </p>
      <p><strong>Last name:</strong> {userProfile.last_name}</p> 
      <p><strong>Address:</strong> {userProfile.address} </p>
      <p><strong>Phone:</strong> {userProfile.phone}</p>  
      <p><strong>Email:</strong> {userProfile.email}</p> 
      <p><strong>Birthdate:</strong> {userProfile.birthdate}</p>
     
    </div>
    </>
  );
};

export default UserProfile;