import React, {useState} from 'react'
import Footer from '../Components/Footer.jsx'
import {useNavigate} from 'react-router-dom'
import Logo from '../assets/logo.png'
import pants from '../assets/pants.webp'

function Cart(props){

    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
    }
    const handleSweaters = () => {
        navigate('/sweaters')
    }
    const handleShoes = () => {
        navigate('/shoes')
    }
    const handleShirts = () => {
        navigate('/shirts')
    }
    const handleShorts = () => {
        navigate('/shorts')
    }
    const handlePants = () => {
        navigate('/pants')
    }
       //Side Bar toggle
       const [state, setState] = useState(1);
       const [menu, setMenu] = useState(false)
       const [text, setText] = useState("≣");
   
       const handleToggle = () =>{
           if (state === 1){
               setMenu(true)
               setState(2);
               setText("X");
           }
           if (state === 2){
               setMenu(false)
               setState(1)
               setText("≣")
           }
           
       }

    const [quantity, setQuantity] = useState("");



    return(
        <div className="Home">
        <button className='menu' onClick={handleToggle}>{text}</button>
        <div  className="Header">
            {menu && (<div className="item1 slideInLeft">
                <h1>Store</h1>
                <ul>
                        <li onClick={handleHome}>HOME</li>
                        <li onClick={handleSweaters}>SWEATERS</li>
                        <li onClick={handleShirts}>T-SHIRTS</li>
                        <li onClick={handlePants}>PANTS</li>
                        <li onClick={handleShorts}>SHORTS</li>
                        <li onClick={handleShoes}>SHOES</li>
                        <li>Settings</li>
                    </ul>   
            </div>)}
            <div className="item2">
                <div className="body-head">
                    <img src={Logo}></img>
                    <span className='btntop'>
                    <button onClick={handleHome} className='ob'>Home</button>
                    <button className='ob'>Services</button>
                    <button className='ob'>About Us</button>
                    </span>
                    <span className='tt slideInRight'>
                    <a>Sign Up</a>
                    <a>Sign In</a>
                    </span>
                </div>
                <hr></hr>
                    <div className="cart">
                        <img src={pants}></img>
                        <h1>Thank you for shopping!</h1>
                        <div className='itemcart'>
                            <p>You currently have no items in your cart.</p>
                            {cartItems.map((item, index)=>
                                    <li key={index}>
                                        <img src={item.img}></img>
                                        <h3>{item.title}</h3>
                                        <span>
                                            <h1>{item.size}</h1>
                                        </span>
                                        <span>
                                            <button>
                                                -
                                            </button>
                                            <p>{quantity}</p>
                                            <button>
                                                +
                                            </button>
                                        </span>
                                        <p>{item.price}</p>

                                    </li> ) }
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
    );
}
export default Cart