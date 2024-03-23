import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import Footer from '../Components/Footer.jsx'
import {useNavigate} from 'react-router-dom'
import shirts from '../assets/shirts.webp'
import t1 from '../assets/t1.jpeg'
import t2 from '../assets/t2.jpeg'
import t3 from '../assets/t3.jpeg'
import t4 from '../assets/t4.webp'
import t5 from '../assets/t5.webp'
import Item from '../Components/Item.jsx'
import Info from '../Components/Info.jsx'
import shirts2 from '../assets/shirts2.webp'
function Shirts(){

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
                <div onClick={handleShirts} className='shirts'>
                        <img src={shirts}></img>
                        <h1 className='slideInLeft'>Shop Shirts</h1>
                        <hr></hr>
                    </div>  
                    <br></br>
                    <span className='products'>
                    <Item img={t1}
                          title="Elo Fire"
                          price="$70"
                          />
                    <Item img={t2}
                          title="St. Annes"
                          price="$90"/>
                    <Item img={t3}
                          title="Navy Journey"
                          price="$125"/>
                    <Item img={t4}
                          title="Lapse Effect"
                          price="$115"/>
                    <Item img={t5}
                          title="Toon Tine"
                          price="$80"/>
                    </span> 
            </div>
        </div>
        <Info img={shirts2}
        title="Explore our Shirts"
        desc="
        Immerse yourself in the extraordinary comfort and impeccable quality of our shirts, crafted with precision to redefine your style. Elevate your wardrobe with garments that not only provide a luxurious feel but also inspire confidence, making them an irresistible addition to your collection."
        />
        <Footer/>
     </div>
    );
}

export default Shirts