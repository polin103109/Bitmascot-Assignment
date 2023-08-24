async function Logout() {
 
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
           //const responsData=await response.json();
           console.log(response);
           if (response.ok) {
            
            localStorage.removeItem('user-info');
            console.log('Sign out successful');
          } else {
            console.error('Sign out failed');
          }
     
        }
      }
  
  export default Logout;