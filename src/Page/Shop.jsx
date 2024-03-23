import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Logo from '../assets/logo.png'
import Footer from '../Components/Footer.jsx'
import sweaters from '../assets/sweater.webp'
import Item from '../Components/Item.jsx'
import s1 from '../assets/sweater1.jpeg'
import s2 from '../assets/s2.jpeg'
import s3 from '../assets/s3.webp'
import s4 from '../assets/s4.jpeg'
import s5 from '../assets/s5.jpeg'
import shirts from '../assets/shirts.webp'
import t1 from '../assets/t1.jpeg'
import t2 from '../assets/t2.jpeg'
import t3 from '../assets/t3.jpeg'
import t4 from '../assets/t4.webp'
import t5 from '../assets/t5.webp'
import shorts from '../assets/shorts.jpeg'
import m1 from '../assets/m1.webp'
import m2 from '../assets/m2.webp'
import m3 from '../assets/m3.webp'
import m4 from '../assets/m4.webp'
import m5 from '../assets/m5.avif'
import pants from '../assets/pants.webp'
import p1 from '../assets/p1.webp'
import p2 from '../assets/p2.webp'
import p3 from '../assets/p3.jpeg'
import p4 from '../assets/p4.webp'
import p5 from '../assets/p5.avif'
import shoes from '../assets/shoes.webp'
import f1 from '../assets/f1.jpeg'
import f2 from '../assets/f2.jpeg'
import f3 from '../assets/f3.webp'
import f4 from '../assets/f4.jpeg'
import f5 from '../assets/f5.jpeg'


function Shop(){
    const navigate = useNavigate()

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
  
 

    const handleHome = () =>{
        navigate('/');
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
                        <button onClick={handleHome} className='ob'>Home</button>
                        <button className='ob'>Services</button>
                        <button className='ob'>About Us</button>
                        </span>
                        <span className='tt slideInRight'>
                        <a onClick={handleSignup}>Sign Up</a>
                        <a onClick={handleSignin}>Sign In</a>
                        </span>
                    </div>
                    <hr></hr>
                    <div onClick={handleSweaters} className='sweater'>
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
                    <div onClick={handleShirts} className='shirts'>
                        <img src={shirts}></img>
                        <h1>Shop Shirts</h1>
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
                    <div onClick={handleShorts} className='shorts'>
                        <img src={shorts}></img>
                        <h1>Shop Shorts</h1>
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
                    <div onClick={handlePants} className='pants'>
                        <img src={pants}></img>
                        <h1>Shop Pants</h1>
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
                    <div onClick={handleShoes} className='shoes'>
                        <img src={shoes}></img>
                        <h1>Shop Shoes</h1>
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
            <Footer/>
        </div>
    );
}

export default Shop