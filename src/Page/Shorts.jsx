import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import Footer from '../Components/Footer.jsx'
import {useNavigate} from 'react-router-dom'
import shorts from '../assets/shorts.jpeg'
import m1 from '../assets/m1.webp'
import m2 from '../assets/m2.webp'
import m3 from '../assets/m3.webp'
import m4 from '../assets/m4.webp'
import m5 from '../assets/m5.avif'
import Item from '../Components/Item.jsx'
import Cart from './Cart.jsx'
import Info from '../Components/Info.jsx'
import shorts2 from '../assets/shorts2.webp'
function Shorts(){

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
    const handleSignin = () => {
        navigate('/signin')
    }
    const handleSignup = () => {
        navigate('/signup')
    }
    const handleShop = () =>{
        navigate('/shop')
    }
   
    
    const [showCart, setShowCart] = useState(false);

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
       const handleCart = () => {
        setShowCart(true);
       }

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
                        <li onClick={handleCart}>CART</li>
                        <li>Settings</li>
                    </ul>   
            </div>)}
            <div className="item2 fade">
                <div className="body-head">
                    <img src={Logo}></img>
                    <span className='btntop'>
                    <button onClick={handleShop} className='ob'>Shop</button>
                    <button className='ob'>Services</button>
                    <button className='ob'>About Us</button>
                    </span>
                    <span className='tt slideInRight'>
                    <a onClick={handleSignup}>Sign Up</a>
                    <a onClick={handleSignin}>Sign In</a>
                    </span>  
    
                </div>
                {showCart && (
                    <Cart />
                )}
                <hr></hr>
                <div onClick={handleShorts} className='shorts'>
                        <img src={shorts}></img>
                        <h1 className='slideInLeft'>Shop Shorts</h1>
                        <hr></hr>
                    </div>  
                    <br></br>
                    <span className='products'>
                    <Item img={m1}
                          title="Stiff Blue"
                          price="$60"
                          />
                    <Item img={m2}
                          title="Cold Red"
                          price="$75"/>
                    <Item img={m3}
                          title="Silver Love"
                          price="$95"/>
                    <Item img={m4}
                          title="Brown Break"
                          price="$55"/>
                    <Item img={m5}
                          title="Grey Still"
                          price="$80"/>
                    </span> 
            </div>
        </div>
        <Info img={shorts2}
        title="Explore our Shorts"
        desc="Experience unparalleled comfort with our shorts, designed with a perfect blend of premium fabrics that offer breathability and flexibility for any activity. Elevate your casual style and embrace the superior quality that makes our shorts a compelling choice, motivating you to enjoy both comfort and fashion effortlessly."
        />
        <Footer/>
     </div>
    );
}

export default Shorts