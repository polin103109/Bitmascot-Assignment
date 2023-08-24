import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Navbar from '../NAVBAR/Navbar';
import Sidebar from '../SIDEBAR/Sidebar';
import'./adminuser.css'

function ageCalculate(birthDate){
  const currentDate = new Date();
  const diffTime = currentDate - new Date(birthDate);
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let setyears = Math.floor(totalDays / 365.25);

console.log(setyears);
return setyears;
}

export default function Admin(){
    const [data, setData] = useState([]); 
    const [filter, setFilter] = useState([]); 
    
    const [search, setSearch]=useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const searchData =  data.filter((item) =>
      item.first_name.toLowerCase().includes(search.toLowerCase())
      )
      
  
  setFilter(searchData);
 
  if(search==" "){
    setData(data)
    }

  };

   useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('user-info');
      if (token) {
        console.log("Token retrieved from localStorage:", token);
      
        let response = await fetch('http://localhost:8000/api/users', {
        method:'GET',
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
      });
      console.log("Users list:", response);
     const responseData = await response.json();
      console.log("Users list:", responseData);
      setData(responseData.data);
    }
  }
  
fetchData();
  }, []);
 
  const columns = [
  
    {
      name: 'Name',
      selector: row => row.first_name, 
      sortable: true,
      filter: true, // Enable filtering
      
    },
    {
      name: 'Age',
      selector:  row => ageCalculate(row.birthdate),
      sortable: true,
    },
    {
      name: 'Email',
      selector:  row => row.email,
      sortable: true,
    },
    {
        name: 'Phone',
        selector:  row => row.phone,
        sortable: true,
      },
  ];
  

    return(
        <>
    
         <Navbar/>
         < Sidebar/>
         <div className='total'>
        
      <input className='input-search'
      type="text"
      placeholder="Search by name"
      value={search}
      onChange={handleSearch}
    />
   <div className="table-wrapper">
         <DataTable
      title="User List"
      columns={columns}
      data={(filter.length > 0)?filter:data }
      
    />
    </div>
    </div>
        </>
    )
}
