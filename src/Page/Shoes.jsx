import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import Footer from '../Components/Footer.jsx'
import {useNavigate} from 'react-router-dom'
import shoes from '../assets/shoes.webp'
import f1 from '../assets/f1.jpeg'
import f2 from '../assets/f2.jpeg'
import f3 from '../assets/f3.webp'
import f4 from '../assets/f4.jpeg'
import f5 from '../assets/f5.jpeg'
import Item from '../Components/Item.jsx'
import Info from '../Components/Info.jsx'
import shoes2 from '../assets/shoes2.avif'

function Shoes(){

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
                <div className='shoes'>
                        <img src={shoes}></img>
                        <h1 className='slideInLeft'>Shop Shoes</h1>
                        <hr></hr>
                    </div>  
                    <br></br>
                    <span className='products'>
                    <Item img={f1}
                          title="Sixty-Seven"
                          price="$260"
                          />
                    <Item img={f2}
                          title="Wonderer"
                          price="$275"/>
                    <Item img={f3}
                          title="Cream Dime"
                          price="$295"/>
                    <Item img={f4}
                          title="Storch"
                          price="$255"/>
                    <Item img={f5}
                          title="Menace"
                          price="$280"/>
                    </span> 
            </div>
        </div>
        <Info img={shoes2}
        title="Explore our Shoes"
        desc="Step into ultimate comfort and style with our shoes, crafted with precision and premium materials that ensure a luxurious feel and durability. Our footwear not only delivers on quality but also inspires confidence, making each step a testament to the perfect blend of comfort and fashion, motivating you to step into a world of unmatched excellence."
        />
        <Footer/>
     </div>
    );
}

export default Shoes