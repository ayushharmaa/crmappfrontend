import React from 'react'
import {Link} from 'react-router-dom';
import "./Neworder.css";

const Neworder = () => {
  return (
    <div className='addCustomer'>
    <Link to={"/customers"}>Back</Link>
    <h3>Add New Order 🛒</h3>
    <form className='addUserForm'>
     
      

      <div className='inputGroup'>
          <label htmlFor='name'>Customer ID🧑‍💻</label>
          <input type='password' id="customer_id" Name="id" autoComplete='off' placeholder='Customer Id'></input>
      </div>
      <br/>
      
      <div className='inputGroup'>
          <label htmlFor='name'>Order Amount</label>
          <input type='number' id="order_amount" Name="total_spends" autoComplete='off' placeholder='Enter Amount'></input>
      </div>
      <br/>
      <div className='inputGroup'>
          <label htmlFor='name'>Order Date</label>
          <input type='Date' id="order_date" Name="last_visit" autoComplete='off' placeholder='DD-MM-YYYY'></input>
      </div>
     
      
<br/>
<br/>
<br/>
<br/>
      <div className='inputGroup'>
          <button type="submit"> <Link to={'/customers/orders'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
      </div>
      
    </form>

    </div>
  
  )
}

export default Neworder
