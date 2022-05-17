import React, { useEffect, useState } from 'react'
import axios from "axios";
import {toast} from "react-toastify"
import "../Home/Home.css"

const Home = () => {
    const [query, setQuery] = useState("");
    const [dat,setDat] = useState()

    useEffect(() => {
    getUsers();
    },[]);
    const getUsers = async ()=>{
        const response = await axios.get("http://localhost:5000/api/users");
        if(response.status===200){
            setDat(response.data.user)
        }
    }
    const onDeleteUser = async(id)=>{
        if(window.confirm("Are you sure that you want to delete the user record"))
        {const response = await axios.delete(`http://localhost:5000/api/user/${id}`);
        if(response.status ===200  ){
            toast.success(response.data);
            getUsers();
        }}
        
    }
    console.log("data",dat)

if(query){
    return (
        <div style={{marginTop:"150px"}}>
        <input  type="text"  placeholder='search...........' onChange={e=>setQuery(e.target.value)} value={query}/>
        <table className='styled-table'>
        <thead className='styled-table thead tr'>
        <tr className='styled-table tbody tr'>
        <th className='styled-table th' style={{textAlign:"center"}}>No</th>
        <th className='styled-table th' style={{textAlign:"center"}}>Name</th>
        <th className='styled-table th' style={{textAlign:"center"}}>Email</th>
        <th className='styled-table th' style={{textAlign:"center"}}>Contact</th>
        <th className='styled-table th' style={{textAlign:"center"}}>Action</th>
        </tr>
        </thead>
        <tbody>
        {dat && dat.filter(item=>item.login.includes(`${query}`)).map((item,index)=>{
            return(
                <tr className='styled-table tbody tr' key={index}>
                <th scope ="row">{index+1}</th>
                <td>{item.time}</td> 
                <td>{item.login}</td> 
                <td>{item.location}</td> 
             
               <td>
            
               <button className='btn btn-delete' onClick={() => onDeleteUser(item._id) }>Delete</button>
              
               </td>
                </tr>
            )
        })}
        </tbody>
        </table>
        
        </div>
      )
}
else{

    return (
        <div style={{marginTop:"150px"}}>
        <input  type="text"  placeholder='search...........' onChange={e=>setQuery(e.target.value)} value={query}/>
        <table className='styled-table'>
        <thead className='styled-table thead tr'>
        <tr className='styled-table tbody tr'>
        <th className='styled-table th' style={{textAlign:"center"}}>No</th>
        <th className='styled-table th' style={{textAlign:"center"}}>Name</th>
        <th className='styled-table th' style={{textAlign:"center"}}>Email</th>
        <th className='styled-table th' style={{textAlign:"center"}}>Contact</th>
        <th className='styled-table th' style={{textAlign:"center"}}>Action</th>
        </tr>
        </thead>
        <tbody>
        {dat && dat.map((item,index)=>{
            return(
                <tr className='styled-table tbody tr' key={index}>
                <th scope ="row">{index+1}</th>
                <td>{item.time}</td> 
                <td>{item.login}</td> 
                <td>{item.location}</td> 
             
               <td>
            
               <button className='btn btn-delete' onClick={() => onDeleteUser(item._id) }>Delete</button>
              
               </td>
                </tr>
            )
        })}
        </tbody>
        </table>
        
        </div>
      )
}

}

export default Home
