import {  useState } from 'react';
import axios from "axios";
import './Login.css';
import { Link,useNavigate } from 'react-router-dom'
import { UserIcon } from '@heroicons/react/24/solid';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const handleLogin = async (event) => {
    event.preventDefault();
    let item = { email, password };
    console.log("string", item);
  
    try {
      const response = await axios.post("http://localhost:8000/api/login", item, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        body:JSON.stringify(item),
        
      });
      localStorage.setItem('user-info',JSON.stringify(response.data?.data?.token));
     
      
      console.log(response.data?.data?.token);
      const user=response.data?.data?.credential;
      if(user?.role==="admin"){
        navigate("/admin");
      }else{
        navigate("/profile");
      }
      
    } catch (error) {
      console.error('Login failed', error);
     
      
    }
  };
  const handleClear = () => {
    setEmail('');
    setPassword('');
  };
  
return (
    <>
      <div className="main-container">
        <div className="header">
          <UserIcon className="userIcon" />
          <h2 className="Head">Login Panel</h2>
        </div>
<div className="form-container">
          <form  className="form" action="#" method="POST">
            <div className="mail-div">
              <label htmlFor="email" className="block-text">
                Email Address
              </label>
              <div className="email-div">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                className="input"
                />
              </div>
            </div>

            <div className="mail-div">
              <div className="pass-div">
                <label htmlFor="password" className="block-text">
                  Password
                </label>
              </div>
              <div className="password-div">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="input"
                />
              </div>
            </div>

            <div className="button-div">
              <button onClick={handleLogin} type="submit">Login</button>
              <button type="button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>

          <p className="">
            Are you new here?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              <Link to="/register">Register Now</Link>
            </a>
          </p>
        </div>
      </div>
     
    </>
  );
}
