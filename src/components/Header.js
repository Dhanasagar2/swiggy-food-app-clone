import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import { LOGOO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    
    const onlineStatus = useOnlineStatus();
    //console.log("Header render");

    const {loggedInUser} = useContext(UserContext);
    //console.log(loggedInUser);
    
    // useEffect(() => {
    //     console.log("header called");       
    // }, [btnNameReact]);

    //subscribing to the store using our selector

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img 
                className="w-56" src = {LOGO_URL} />
            </div>

            <div className="logo-containerend">
                <img 
                className="w-56" src = {LOGOO_URL} />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 text-2xl">
                        Online Status:{onlineStatus? "✅" : "🔴"}
                    </li>
                  <li className="px-4 text-2xl" ><Link to="/">Home</Link></li>  
                  <li className="px-4 text-2xl"><Link to="/about">About Us</Link></li>
                  <li className="px-4 text-2xl"><Link to="/contact">Contact Us</Link></li>
                  <li className="px-4 text-2xl"><Link to="/grocery">Grocery</Link></li>
                  <li className="px-4 text-2xl font-bold">
                  <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                  <button className="login text-2xl" 
                  onClick={()=>{
                    btnNameReact === "Login" 
                    ?setBtnNameReact("Logout") 
                    :setBtnNameReact("Login") ;
                    }} 
                    >{btnNameReact}
                    </button>

                    <li className="font-bold px-4 text-2xl">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
