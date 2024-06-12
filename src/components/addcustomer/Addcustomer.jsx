import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './addcustomer.css';


const Addcustomer = () => {

const users ={
    name:"",
    email:"",
    phone:"",
    total_spends:"",
    last_visit:" ",
    visit_count:""
}


const [user, setUser] = useState(users);





 const inputHandler= (e) => {
    const {name, value} = e.target;
    setUser({...user,[name]:value});
    

 }

 
    return (
    
      <div className='addCustomer'>
      <Link to={"/customers"}>Back</Link>
      <h3>Add New Customer</h3>
      <form className='addUserForm'>
        <div className='inputGroup'>
            <label htmlFor='name'>Full Name</label>
            <input type='text' onChange={inputHandler} id="name" Name="name" autoComplete='off' placeholder='name'></input>
        </div>
        <br/>

        <div className='inputGroup'>
            <label htmlFor='name'>Email 📧</label>
            <input type='email' onChange={inputHandler} id="email" Name="email" autoComplete='off' placeholder='Email'></input>
        </div>
        <br/>
        <div className='inputGroup'>
            <label htmlFor='name'>Mobile📞</label>
            <input type='number' onChange={inputHandler} id="phone" Name="phone" autoComplete='off' placeholder='Contact No.'></input>
        </div>
        <br/>
        <div className='inputGroup'>
            <label htmlFor='name'>Total Spending</label>
            <input type='number' onChange={inputHandler} id="total_spends" Name="total_spends" autoComplete='off' placeholder='Enter Amount'></input>
        </div>
        <br/>
        <div className='inputGroup'>
            <label htmlFor='name'>Last Visit</label>
            <input type='Date' onChange={inputHandler} id="last_visit" Name="last_visit" autoComplete='off' placeholder='DD-MM-YYYY'></input>
        </div>
        <br/>
        <div className='inputGroup'>
            <label htmlFor='name'>Visit Count</label>
            <input type='number' onChange={inputHandler} id="visit_count" Name="visit_count" autoComplete='off' placeholder='INPUT'></input>
        </div>
<br/>
<br/>
<br/>
<br/>
        <div className='inputGroup'>
            <button type="submit"> ADD CUSTOMER </button>
        </div>
        
      </form>

      </div>
    
  )
}

export default Addcustomer
