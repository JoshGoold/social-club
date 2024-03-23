import Logo from '../assets/logo.png'
function Footer(){

    return(
        <div className="footer">
            <ul>
                <li>Contact Us</li>
                <li>Review</li>
                <li>Customer Support</li>
                <li>Donate</li>
            </ul>
            <img src={Logo}></img>
            <ul>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>Facebook</li>
            </ul>
        </div>    
        );
}
export default Footer