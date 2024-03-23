import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import Footer from '../Components/Footer.jsx'
import {useNavigate} from 'react-router-dom'
import pants from '../assets/pants.webp'
import p1 from '../assets/p1.webp'
import p2 from '../assets/p2.webp'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.webp'
import p5 from '../assets/p5.avif'
import Item from '../Components/Item.jsx'
import Info from '../Components/Info.jsx'
import pants2 from '../assets/pants2.jpeg'
function Pants(){

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
    const handleCart = () =>{
        navigate('/cart')
    }
    const handleShop = () =>{
        navigate('/shop')
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
                <hr></hr>
                <div onClick={handlePants} className='pants'>
                        <img src={pants}></img>
                        <h1 className='slideInLeft'>Shop Pants</h1>
                        <hr></hr>
                    </div>  
                    <br></br>
                    <span className='products'>
                    <Item img={p1}
                          title="Tellmore"
                          price="$160"
                          />
                    <Item img={p2}
                          title="Heathen"
                          price="$175"/>
                    <Item img={p3}
                          title="Savior"
                          price="$195"/>
                    <Item img={p4}
                          title="Bleek"
                          price="$155"/>
                    <Item img={p5}
                          title="Phantom"
                          price="$180"/>
                    </span>  
            </div>
        </div>
        <Info img={pants2}
              title="Explore our Pants"
              desc="Our pants redefine comfort with
               premium materials and meticulous craftsmanship, 
               delivering an unparalleled blend of softness and durability. 
               Experience a new standard of excellence that not only enhances 
               your style but also elevates your everyday comfort, making each 
               pair a compelling choice for those who seek both quality and luxury."/>
        <Footer/>
     </div>
    );
}

export default Pants