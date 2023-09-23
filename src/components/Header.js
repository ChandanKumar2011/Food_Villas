import { useState } from "react";
import {LOGO_URL} from "../../common/constant";
import { Link } from "react-router-dom";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div className="header">
            <div>
              <img className="logo" src ={LOGO_URL}></img>  
            </div>

            <div className="nav-items">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/contact">Contact us</Link>
                    <Link to="/instamart">Instamart</Link>
                    <li> Cart</li>
                </ul>
            </div>
            {isLoggedIn ? (<button  onClick ={() =>
            {setIsLoggedIn(false)}}>Logout</button> ):
             (<button   onClick={() => {setIsLoggedIn(true)}}>Login</button>)}
        </div>
    )
}


export default Header;