import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Logo from '../assets/logo.png'
import background from '../assets/social.webp'
import quality from '../assets/quality.webp'
import Footer from '../Components/Footer.jsx'
import Review from '../Components/Review.jsx'
function Home(){

    //Navigation
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
        navigate('/shop');
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
                    <div className='content'>
                    <img className="background" src={background}></img>
                    <h1 className="welcomeMessage slideUp">Welcome to Social Club</h1>
                    </div>
                    <div id="q" className="quality fade">
                        <img src={quality}></img>
                        <h1 >QUALITY <b>GURANTEED</b></h1>
                        <p >Step into our Social Club, where the commitment to quality is woven into every thread, inspiring and motivating a community of fashion enthusiasts with a passion for impeccable style and enduring excellence in our clothing. </p>
                    </div>
                </div>

            </div>
            <Review/>
            
            <Footer/>
        </div>
    );
}
export default Home