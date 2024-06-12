import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Customer from './components/getcustomer/Customer';
import Addcustomer from './components/addcustomer/Addcustomer';
import Neworder from './components/neworder/Neworder';
import Homepage from './components/Homepage/Home';
import OrderList from './components/orderList/orderlist';

function App() {
  const route = createBrowserRouter([{
    path:"/",
    element: <Homepage/> },
    {
      path:"/customers",
    element: <Customer/>

    },
  {
    path:"/customers/new",
    element: <Addcustomer/>
  },{
    path:"/customers/createorder",
    element:<Neworder/>
  },
{
  path:"/customers/showusers",
    element:"Show total Users"
},
{
  path:"/customers/orders",
  element: <OrderList/>
}])
  return (
    <div className="App">
   
<RouterProvider router={route}> </RouterProvider>
</div>
  );
}

export default App;

