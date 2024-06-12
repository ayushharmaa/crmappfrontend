
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./orderlist.css"; 

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the orders from the backend
    axios.get('/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the orders!', error);
      });
  }, []);

  return (
    <div className='orderList'>
      <Link to={"/customers"}>Back</Link>
      <h3>Order List 🛒</h3>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer ID</th>
            <th>Order Amount</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.customer_id}</td>
              <td>{order.order_amount}</td>
              <td>{new Date(order.order_date).toLocaleDateString()}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
