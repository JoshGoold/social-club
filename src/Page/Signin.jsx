import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import React, {useEffect, useState} from 'react';



function Signin(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
  
    
    const navigate = useNavigate();

       const handleButtonSignup = () => {
         // Navigate to the desired route
         navigate('/signup');
       };
       const handleButtonRedirect = () => {
              // Navigate to the desired route
              navigate('/');
            };

    const login = (e) =>{
    if (password == ""){
      alert("Please enter a password")
    } else if(username == ""){
      alert("Please enter a username")
    } else{
      Axios.post("http://localhost:8080/login", {   
        username: username,
        password: password,
      }).then((response)=>{
        if(response.data.message){
          setLoginStatus(response.data.message)
          alert(loginStatus)
        }else{
          setLoginStatus(response.data[0].email)
          handleButtonRedirect();
          alert(loginStatus)
        }
      })
    }
  }
    
    const usericon = <FontAwesomeIcon className="i" icon={faUser} />
    const lockicon = <FontAwesomeIcon className="i" icon={faLock}/>
    return(
      
        <div className="mainindex"> 
            <div className="form-box">
            <br></br>
            <h1 className="setuphead"> Sign In </h1>
            <br></br>
            <form className="accountlogin" id="accountlogin">
                <div className="input-group">
                    <div className="input-field">
                        {usericon}
                        <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} id="accountUserName" className="accountName" required></input>
                    </div>
                    <div className="input-field">
                        {lockicon}
                        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} id="accountUserPassword" className="accountPassword" required></input>
                        <p> Lost password <a href="#">Click here!</a></p>
                    </div>
                     
                    <div className="btn-group">
                        <button type="button" className="button-shrink" id="signupBtn" onClick={login}>Sign in</button>
                    </div>
                   </div>
            
            </form>
            <br></br>
            <div className="btn-signup">
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;&nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;&nbsp; 
                        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<b>Dont have an account? </b>
                        <button type="button" className="button-shrink" id="signinBtn" onClick={handleButtonSignup}> Sign up</button>
                    </div>
        </div>
    </div>
    
    );
}
export default Signin 