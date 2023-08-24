
import  { useState } from 'react';
import './navbar.css'; 
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
   const handleLogout = async() =>{
    
    const token = localStorage.getItem('user-info');
    if (token) {
      console.log("Token retrieved from localStorage:", token);
    let response = await fetch("http://localhost:8000/api/signout", {
      method:'GET',
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    const responseData = await response.json();
    console.log(responseData);
    navigate('/');
    
    
  }
}

  return (
    <div className="navbar">
      <div className="nav-item">Home</div>
      <div className="nav-item">About</div>
      <div className="nav-dropdown" onClick={toggleDropdown}>
    <div className='nav-item'>    User ▼ </div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <div className="dropdown-item"><button onClick={handleLogout}>Log Out</button> </div>
            <div className="dropdown-item"><button>Change Password</button> </div>
           
         
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
