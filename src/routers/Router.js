import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Productdetails from "../pages/Productdetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Signin"
import Signup from "../pages/Signup";
const Router = () => {
    return (
        <div>
             <Routes>
                 <Route path="/" element={<Navigate to="home"/>}/>
                 <Route path="home" element={<Home/>} />
                 <Route path="shop" element={<Shop/>} />
                 <Route path="shop/:id" element={<Productdetails/>} />
                 <Route path="cart" element={<Cart/>} />
                 <Route path="checkout" element={<Checkout/>} />
                 <Route path="login" element={<Login/>} />
                 <Route path="signup" element={<Signup/>} />
             </Routes>
        </div>
    );
};

export default Router;