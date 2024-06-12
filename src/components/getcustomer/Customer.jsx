import React  from 'react';
import {Link} from 'react-router-dom'
import "./Customer.css";



const Customer = () => {

   

  return (
    <div className='customerTable'>
    <br/>
        <button>
        <Link to={"/customers/new"} className='addButton'>Add Customer</Link><br/>
        </button>

        <br/>   
        <br/>
        <table border={4} cellPadding={10} cellSpacing={2}>
            <thead>
                <tr>
                    
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Spending</th>
                    <th>Last Visit</th>
                    <th>Visit Count</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                        <tr >
                    
                    
                    <td>Ayush</td>
                    <td>ayush123@mail</td>
                    <td>124574</td>
                    <td>30000</td>
                    <td>9-03-2020</td>
                    <td>4</td>
                    <td className='actionButtons'><button ><Link to={'/customers/createorder'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
                    
                    <Link to={'/customers/new'}><i className="fa-solid fa-user-plus"></i></Link>
                    
                    </td>
                </tr>
            }
            {
                <tr >
                    
                    
                    <td>Aakash</td>
                    <td>skyworld1@mail</td>
                    <td>001245</td>
                    <td>5000</td>
                    <td>08-04-2024</td>
                    <td>4</td>
                    <td className='actionButtons'><button ><Link to={'/customers/createorder'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
                    
                    <Link to={'/customers/new'}><i className="fa-solid fa-user-plus"></i></Link>
                    
                    </td>
                </tr>

            }
            {
                <tr >
                    
                    
                    <td>Dhruv</td>
                    <td>dhruvydread49@mail</td>
                    <td>78945</td>
                    <td>50000</td>
                    <td>16-02-2021</td>
                    <td>5</td>
                    <td className='actionButtons'><button ><Link to={'/customers/createorder'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
                    
                    <Link to={'/customers/new'}><i className="fa-solid fa-user-plus"></i></Link>
                    
                    </td>
                </tr>

            }
            {
                <tr >
                    
                    
                    <td>Ravince</td>
                    <td>besoyaravince01@mail</td>
                    <td>789456</td>
                    <td>8000</td>
                    <td>15-05-2023</td>
                    <td>2</td>
                    <td className='actionButtons'><button ><Link to={'/customers/createorder'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
                    
                    <Link to={'/customers/new'}><i className="fa-solid fa-user-plus"></i></Link>
                    
                    </td>
                </tr>

            }
            {
                <tr >
                    
                    
                    <td>Ayush Sharma</td>
                    <td>ayushemail@mail</td>
                    <td>5632145662</td>
                    <td>45000</td>
                    <td>30-12-2021</td>
                    <td>2</td>
                    <td className='actionButtons'><button ><Link to={'/customers/createorder'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
                    
                    <Link to={'/customers/new'}><i className="fa-solid fa-user-plus"></i></Link>
                    
                    </td>
                </tr>

            }
            {
                <tr >
                    
                    
                    <td>Vaishnavi</td>
                    <td>guptavaishnavi1142mail</td>
                    <td>784561</td>
                    <td>96000</td>
                    <td>09-06-2022</td>
                    <td>2</td>
                    <td className='actionButtons'><button ><Link to={'/customers/createorder'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
                    
                    <Link to={'/customers/new'}><i className="fa-solid fa-user-plus"></i></Link>
                    
                    </td>
                </tr>

            }
            {
                <tr >
                    
                    
                    <td>Molly</td>
                    <td>molly4sunshine@mail</td>
                    <td>8884571</td>
                    <td>6500</td>
                    <td>14-02-2024</td>
                    <td>1</td>
                    <td className='actionButtons'><button ><Link to={'/customers/createorder'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
                    
                    <Link to={'/customers/new'}><i className="fa-solid fa-user-plus"></i></Link>
                    
                    </td>
                </tr>

            }
            {
                <tr >
                    
                    
                    <td>Agnola</td>
                    <td>apawden2l@qq.com</td>
                    <td>2515675</td>
                    <td>75012</td>
                    <td>03-06-2021</td>
                    <td>3</td>
                    <td className='actionButtons'><button ><Link to={'/customers/createorder'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
                    
                    <Link to={'/customers/new'}><i className="fa-solid fa-user-plus"></i></Link>
                    
                    </td>
                </tr>

            }
            {
                <tr >
                    
                    
                    <td>Emelita</td>
                    <td>emullord2m@salon.com</td>
                    <td>1516211951</td>
                    <td>45000</td>
                    <td>14-09-2022</td>
                    <td>5</td>
                    <td className='actionButtons'><button ><Link to={'/customers/createorder'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
                    
                    <Link to={'/customers/new'}><i className="fa-solid fa-user-plus"></i></Link>
                    
                    </td>
                </tr>

            }
            {
                <tr >
                    
                    
                    <td>Emanuel</td>
                    <td>emanuelemail@mail</td>
                    <td>5632145662</td>
                    <td>45000</td>
                    <td>30-12-2021</td>
                    <td>4</td>
                    <td className='actionButtons'><button ><Link to={'/customers/createorder'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
                    
                    <Link to={'/customers/new'}><i className="fa-solid fa-user-plus"></i></Link>
                    
                    </td>
                </tr>

            }
           

            
           
            {
                <tr >
                    
                    
                    <td>Cart</td>
                    <td>cdibdale2r@w3.org</td>
                    <td>3619259684</td>
                    <td>59971</td>
                    <td>30-12-2021</td>
                    <td>6</td>
                    <td className='actionButtons'><button ><Link to={'/customers/createorder'}><i className="fa-solid fa-cart-plus"></i> </Link></button>
                    
                    <Link to={'/customers/new'}><i className="fa-solid fa-user-plus"></i></Link>
                    
                    </td>
                </tr>

            }

                
                
            </tbody>
        </table>

    </div>
  )
}

export default Customer