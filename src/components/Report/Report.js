import React, { useEffect, useState } from 'react'
import "../Report/Report.css"
import axios from 'axios';
const Report = () => {
    const [query, setQuery] = useState("");
    const [dat,setDat] = useState()

    useEffect(() => {
    getUsers();
    },[]);
    const getUsers = async ()=>{
        const response = await axios.get("http://localhost:5000/api/reports");
        if(response.status===200){
            setDat(response.data.user)
        }
    }
 
    console.log("data",dat)
    return (
        <div className='container' style={{marginTop:"150px"}}>
      <h1>Attendance Report</h1>
        <table className='styled-table'>
        <thead className='styled-table thead tr'>
        <tr className='styled-table tbody tr'>
        <th className='styled-table th' style={{textAlign:"center"}}>Emp ID</th>
        <th className='styled-table th' style={{textAlign:"center"}}>Work Days</th>
        <th className='styled-table th' style={{textAlign:"center"}}>Leaves</th>
        <th className='styled-table th' style={{textAlign:"center"}}>OT Hours</th>
      
        </tr>
        </thead>
        <tbody>
        {dat && dat.map((item,index)=>{
            return(
                <tr className='styled-table tbody tr' key={index}>
                <th scope ="row">{index+1}</th>
                <td>{item.empid}</td> 
                <td>{item.workdays}</td> 
                <td>{item.leaves}</td> 
                <td>{item.OT}</td> 
             
               <td>
            
              
              
               </td>
                </tr>
            )
        })}
        </tbody>
        </table>
        
        </div>
      )
}

export default Report
