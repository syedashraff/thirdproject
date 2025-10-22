

import React from 'react'
import { Link } from 'react-router-dom';
//  import { useCart } from "./context/CartContext";
import { useCart } from './context/CartContext';


const Navbar = () => {
    const { cartItems } = useCart()
    return (
        <>

            <div className="navSection">


                <div className="title">
                    <Link to="/" className="custom-link">
                        <h2>A-mart</h2>
                    </Link>
                </div>

                <div className="search">
                    <input type='text' placeholder='search..' />
                </div>

                <div className="user">
                    <div className="user-details">
                        Sign IN / Sign Out
                    </div>
                </div>
                <Link to='/cart'>
                    <div className="cart">
                        Cart
                        <span>
                            {cartItems.length}
                        </span>
                    </div>
                </Link>


            </div>
            <div className="subMenu">
                <ul>
                    <Link to='/Mobile'><li>Mobiles</li></Link>
                    <Link to='/Computers'><li>Computers</li></Link>
                    <Link to='/Watch'><li>Watches</li></Link>
                    <Link to='/Men '><li>Men fashions</li></Link>
                    <Link to='/Women '><li>Woman Dressings</li></Link>
                    <Link to='/Furniture'><li>Furniture</li></Link>
                    <Link to='/ac'><li>Ac</li></Link>
                    <Link to='/Kitchen'><li>Kitchen</li></Link>
                    <Link to='/speaker'><li>speaker</li></Link>
                    <Link to='/books'><li>books</li></Link>
                    <Link to='/fridge'><li>fridge</li></Link>
                    <Link to='/tv'><li>Tv</li></Link>



                </ul>

            </div>
        </>

    );
};

export default Navbar


