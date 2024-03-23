import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import Footer from '../Components/Footer.jsx'
import {useNavigate} from 'react-router-dom'
import sweaters from '../assets/sweater.webp'
import Item from '../Components/Item.jsx'
import s1 from '../assets/sweater1.jpeg'
import s2 from '../assets/s2.jpeg'
import s3 from '../assets/s3.webp'
import s4 from '../assets/s4.jpeg'
import s5 from '../assets/s5.jpeg'
import Info from '../Components/Info.jsx'
import sweaters2 from '../assets/sweaters2.webp'
function Sweaters(){

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
                <div className='sweater'>
                        <img src={sweaters}></img>
                        <h1 className='slideInLeft'>Shop Sweaters</h1>
                        <hr></hr>
                    </div>
                    <br></br>
                   <span className='products'>
                    <Item img={s1}
                          title="Apline Brush"
                          price="$150"
                          />
                    <Item img={s2}
                          title="Miss Poppins"
                          price="$450"/>
                    <Item img={s3}
                          title="Cotton Candy"
                          price="$225"/>
                    <Item img={s4}
                          title="Blue Mountain"
                          price="$115"/>
                    <Item img={s5}
                          title="Sandy Lake"
                          price="$350"/>
                    </span> 
            </div>
        </div>
        <Info img={sweaters2}
        title="Explore our Sweaters"
        desc="Indulge in the luxurious comfort of our sweaters, meticulously crafted with the finest materials to provide unmatched softness and warmth. Elevate your style with our commitment to quality, offering not just a garment but a cozy and premium experience that motivates a must-have addition to your wardrobe."/>
        <Footer/>
     </div>
    );
}

export default Sweaters