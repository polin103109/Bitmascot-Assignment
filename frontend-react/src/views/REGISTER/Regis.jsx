import './register.css'
import { Link,useNavigate } from 'react-router-dom'
import { UserIcon} from '@heroicons/react/24/solid'
import { useState } from 'react'



export default function Register() {
  
  const [first_name,setFirstName] =useState('');
  const [last_name,setLastName] =useState('');
  const [address,setAddress] =useState('');
  const [phone,setPhone] =useState('');
  const [email,setEmail] =useState('');
  const [birthdate,setBirthdate] =useState('');
  const [password,setPassword] =useState('');
  const navigate = useNavigate(); 
  
 
const handleRegister = async (event) => {
   event.preventDefault();
   let item={first_name,last_name,address,phone,email,birthdate,password};
   console.log(item);
   let result = await fetch("http://localhost:8000/api/register",{
    method:'POST',
    body:JSON.stringify(item),
    headers:{
      "Content-Type":'application/json',
      "Accept":'application/json'
    }
   })
   result = await result.json()
   localStorage.setItem("user-info",JSON.stringify(result))
  
   navigate("/");
   
   

};
  
  return (
    <>
    
      <div className="main-container">
        <div className="header">
        <UserIcon className='userIcon'/>
          <h2 className="Head">
            Registration Panel
          </h2>
          <h3>Register for free</h3>
          <p className=''>or{""}
          <Link to="/" className=''>
          <br></br>  Login with your account
          </Link>
          </p>
        </div>

        <div className="form-container">
          <form  onSubmit={handleRegister} className="form" action="#" method="POST">
          <div className='mail-div'>
              <label htmlFor="name" className="block-text">
                First Name
              </label>
              <div className="email-div">
                <input
                  id="name"
                  value={first_name}
                  onChange={(e)=>setFirstName(e.target.value)}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input "
                />
              </div>
            </div>
            <div className='mail-div'>
              <label htmlFor="name" className="block-text">
                Last Name
              </label>
              <div className="email-div">
                <input
                  id="name"
                  name="name"
                  value={last_name}
                  onChange={(e)=>setLastName(e.target.value)}
                  type="text"
                  autoComplete="name"
                  required
                  className="input "
                />
              </div>
            </div>
            <div className='mail-div'>
              <label htmlFor="name" className="block-text">
                Address
              </label>
              <div className="email-div">
                <input
                  id="name"
                  name="name"
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                  type="text"
                  autoComplete="name"
                  required
                  className="input "
                />
              </div>
            </div>
            <div className='mail-div'>
              <label htmlFor="name" className="block-text">
                Phone
              </label>
              <div className="email-div">
                <input
                  id="name"
                  name="name"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  type="string"
                  autoComplete="name"
                  required
                  className="input "
                />
              </div>
            </div>
           
            
            <div className='mail-div'>
              <label htmlFor="email" className="block-text">
                Email address
              </label>
              <div className="email-div">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="input "
                />
              </div>
            </div>
            <div className='mail-div'>
              <label htmlFor="name" className="block-text">
                Birthdate
              </label>
              <div className="email-div">
                <input
                  id="date"
                  name="name"
                  value={birthdate}
                  onChange={(e)=>setBirthdate(e.target.value)}
                  type="date"
                  required
                  className="input-date "
                />
              </div>
            </div>
           

            <div className='mail-div'> 
              <div className="pass-div">
                <label htmlFor="password" className="block-text">
                  Password
                </label>
                
              </div>
              <div className="password-div">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="input"
                />
              </div>
            </div>

            <div className="button-div">
              <button
                type="submit"
                className=""
              >
                Register
              </button>
              <button
                type="submit"
                className=""
              >
                Cancel
              </button>
            </div>
          </form>

         
         
        </div>
      </div>
    </>
  )
}