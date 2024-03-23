import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import React, {useState, useEffect} from 'react'

function Signup(){

    const navigate = useNavigate();

       const handleButtonSignin = () => {
         // Navigate to the desired route
         navigate('/signin');
       };
       const handleButtonRedirect = () => {
              // Navigate to the desired route
              navigate('/signin');
            };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    

    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)*[a-zA-Z]{2,}))$/;
    
    
    const validateEmailComprehensive = (email) => {
      return re.test(email);
    };
   
    const register = () => {
        if(email == ""){
          alert("Please enter an email")
        } else if (!validateEmailComprehensive(email)){
          alert("enter a correct email address")
        } else if (password == ""){
          alert("Please enter a password")
        } else if(username == ""){
          alert("Please enter a username")
        } else{
        Axios.post("http://localhost:8080/register", {   
          email: email,
          username: username,
          password: password,
        }).then((response)=>{
          if(response.data.message){
            setRegisterStatus(response.data.message)
          }else{
            setRegisterStatus("Account created succesfully.");
            handleButtonRedirect();
          }
        })
      }
    }

      

  const usericon = <FontAwesomeIcon className="i" icon={faUser} />
  const envolopeicon = <FontAwesomeIcon className="i" icon={faEnvelope}/>
  const lockicon = <FontAwesomeIcon className="i" icon={faLock}/>
    return(
     
       <div className="mainindex">
        
            <div className="form-box">
                <h1 className="setuphead"> Sign Up </h1>
                    <form className="accountcreate" id="accountcreate">
                        <div className="input-group">
                            <div className="input-field">
                            {usericon}
                                <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} id="accountName" className="accountName" required></input>
                            </div>
                         <div className="input-field">
                                {envolopeicon}
                                <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} id="accountEmail" className="accountEmail" required></input>
                        </div>
                            <div className="input-field">
                            {lockicon}
                            <input type="password" placeholder="Password" onChange={(e) =>{setPassword(e.target.value)}} id="accountPassword" className="accountPassword" required></input>
                        </div>
                            <br></br>
                        <div className="btn-group">
                            <button type="button" className="button-shrink" id="signupBtn" onClick={register}>Create Account</button>
                        </div>
                        <br></br>
                        <div className="btn-signin">
                            
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp;&nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp;&nbsp; 
                            &nbsp; &nbsp;&nbsp; &nbsp;
                            &nbsp;  <b>Have an account already? </b>
                        <button type="button" className="button-shrink" id="signinBtn" onClick={handleButtonSignin}> Sign in</button>
                    </div>
                </div>
            </form>
        </div>
       </div>

    );
}
export default Signup 