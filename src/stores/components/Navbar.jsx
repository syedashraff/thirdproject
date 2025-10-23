

// // import React from 'react'
// // import { Link } from 'react-router-dom';
// // //  import { useCart } from "./context/CartContext";
// // import { useCart } from './context/CartContext';


// // const Navbar = () => {
// //     const { cartItems } = useCart()
// //     return (
// //         <>

// //             <div className="navSection">


// //                 <div className="title">
// //                     <Link to="/" className="custom-link">
// //                         <h2>A-mart</h2>
// //                     </Link>
// //                 </div>

// //                 <div className="search">
// //                     <input type='text' placeholder='search..' />
// //                 </div>

// //                 <div className="user">
// //                     <div className="user-details">
// //                         Sign IN / Sign Out
// //                     </div>
// //                 </div>
// //                 <Link to='/cart'>
// //                     <div className="cart">
// //                         Cart
// //                         <span>
// //                             {cartItems.length}
// //                         </span>
// //                     </div>
// //                 </Link>


// //             </div>
// //             <div className="subMenu">
// //                 <ul>
// //                     <Link to='/Mobile'><li>Mobiles</li></Link>
// //                     <Link to='/Computers'><li>Computers</li></Link>
// //                     <Link to='/Watch'><li>Watches</li></Link>
// //                     <Link to='/Men '><li>Men fashions</li></Link>
// //                     <Link to='/Women '><li>Woman Dressings</li></Link>
// //                     <Link to='/Furniture'><li>Furniture</li></Link>
// //                     <Link to='/ac'><li>Ac</li></Link>
// //                     <Link to='/Kitchen'><li>Kitchen</li></Link>
// //                     <Link to='/speaker'><li>speaker</li></Link>
// //                     <Link to='/books'><li>books</li></Link>
// //                     <Link to='/fridge'><li>fridge</li></Link>
// //                     <Link to='/tv'><li>Tv</li></Link>



// //                 </ul>

// //             </div>
// //         </>

// //     );
// // };

// // export default Navbar


// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { useCart } from "./context/CartContext";


// // const Navbar = () => {
// //   const { cartItems } = useCart();
// //   const [showSignIn, setShowSignIn] = useState(false);

// //   const handleToggleSignIn = () => {
// //     setShowSignIn(!showSignIn);
// //   };

// //   return (
// //     <>
// //       <div className="navSection">
// //         {/* Title */}
// //         <div className="title">
// //           <Link to="/" className="custom-link">
// //             <h2>A-mart</h2>
// //           </Link>
// //         </div>

// //         {/* Search */}
// //         <div className="search">
// //           <input type="text" placeholder="Search..." />
// //         </div>

// //         {/* User Section */}
// //         <div className="user">
// //           <div className="user-details">
// //             <span onClick={handleToggleSignIn} className="clickable-text">
// //               Sign In
// //             </span>{" "}
// //             /{" "}
// //             <Link to="/signup" className="custom-link">
// //               Sign Up
// //             </Link>
// //           </div>

// //           {/* Sign In Form */}
// //           {showSignIn && (
// //             <div className="signin-form">
// //               <h4>Sign In</h4>
// //               <form>
// //                 <input
// //                   type="text"
// //                   placeholder="Username"
// //                   required
// //                   className="signin-input"
// //                 />
// //                 <input
// //                   type="password"
// //                   placeholder="Password"
// //                   required
// //                   className="signin-input"
// //                 />
// //                 <button type="submit" className="signin-btn">
// //                   Login
// //                 </button>
// //               </form>
// //             </div>
// //           )}
// //         </div>

// //         {/* Cart */}
// //         <Link to="/cart" className="custom-link">
// //           <div className="cart">
// //             Cart <span>{cartItems.length}</span>
// //           </div>
// //         </Link>
// //       </div>

// //       {/* SubMenu */}
// //       <div className="subMenu">
// //         <ul>
// //           <Link to="/Mobile"><li>Mobiles</li></Link>
// //           <Link to="/Computers"><li>Computers</li></Link>
// //           <Link to="/Watch"><li>Watches</li></Link>
// //           <Link to="/Men"><li>Men Fashions</li></Link>
// //           <Link to="/Women"><li>Women Dressings</li></Link>
// //           <Link to="/Furniture"><li>Furniture</li></Link>
// //           <Link to="/ac"><li>AC</li></Link>
// //           <Link to="/Kitchen"><li>Kitchen</li></Link>
// //           <Link to="/speaker"><li>Speaker</li></Link>
// //           <Link to="/books"><li>Books</li></Link>
// //           <Link to="/fridge"><li>Fridge</li></Link>
// //           <Link to="/tv"><li>TV</li></Link>
// //         </ul>
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "./context/CartContext";


// const Navbar = () => {
//   const { cartItems } = useCart();
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [user, setUser] = useState(null); // null means no user logged in
//   const [formData, setFormData] = useState({ username: "", password: "" });

//   const handleToggleSignIn = () => {
//     setShowSignIn(!showSignIn);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simple mock login — replace later with backend validation
//     if (formData.username && formData.password) {
//       setUser(formData.username);
//       setShowSignIn(false);
//     }
//   };

//   const handleSignOut = () => {
//     setUser(null);
//   };

//   return (
//     <>
//       <div className="navSection">
//         {/* Title */}
//         <div className="title">
//           <Link to="/" className="custom-link">
//             <h2>A-mart</h2>
//           </Link>
//         </div>

//         {/* Search */}
//         <div className="search">
//           <input type="text" placeholder="Search..." />
//         </div>

//         {/* User Section */}
//         <div className="user">
//           <div className="user-details">
//             {user ? (
//               <>
//                 <span className="welcome-text">Welcome, {user}</span>{" "}
//                 /{" "}
//                 <span onClick={handleSignOut} className="clickable-text">
//                   Sign Out
//                 </span>
//               </>
//             ) : (
//               <>
//                 <span onClick={handleToggleSignIn} className="clickable-text">
//                   Sign In
//                 </span>{" "}
//                 /{" "}
//                 <Link to="/signup" className="custom-link">
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Sign In Form */}
//           {!user && showSignIn && (
//             <div className="signin-form">
//               <h4>Sign In</h4>
//               <form onSubmit={handleLogin}>
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="Username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                   className="signin-input"
//                 />
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="signin-input"
//                 />
//                 <button type="submit" className="signin-btn">
//                   Login
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>

//         {/* Cart */}
//         <Link to="/cart" className="custom-link">
//           <div className="cart">
//             Cart <span>{cartItems.length}</span>
//           </div>
//         </Link>
//       </div>

//       {/* SubMenu */}
//       <div className="subMenu">
//         <ul>
//           <Link to="/Mobile"><li>Mobiles</li></Link>
//           <Link to="/Computers"><li>Computers</li></Link>
//           <Link to="/Watch"><li>Watches</li></Link>
//           <Link to="/Men"><li>Men Fashions</li></Link>
//           <Link to="/Women"><li>Women Dressings</li></Link>
//           <Link to="/Furniture"><li>Furniture</li></Link>
//           <Link to="/ac"><li>AC</li></Link>
//           <Link to="/Kitchen"><li>Kitchen</li></Link>
//           <Link to="/speaker"><li>Speaker</li></Link>
//           <Link to="/books"><li>Books</li></Link>
//           <Link to="/fridge"><li>Fridge</li></Link>
//           <Link to="/tv"><li>TV</li></Link>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "./context/CartContext";


// const Navbar = () => {
//   const { cartItems } = useCart();
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [user, setUser] = useState(null); // null = no login yet
//   const [formData, setFormData] = useState({ username: "", password: "" });

//   const handleToggleSignIn = () => {
//     setShowSignIn(!showSignIn);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simple login (mock)
//     if (formData.username && formData.password) {
//       setUser(formData.username);
//       setShowSignIn(false);
//     }
//   };

//   return (
//     <>
//       <div className="navSection">
//         {/* Title */}
//         <div className="title">
//           <Link to="/" className="custom-link">
//             <h2>A-mart</h2>
//           </Link>
//         </div>

//         {/* Search */}
//         <div className="search">
//           <input type="text" placeholder="Search..." />
//         </div>

//         {/* User Section */}
//         <div className="user">
//           <div className="user-details">
//             {user ? (
//               <span className="welcome-text">Welcome, {user}</span>
//             ) : (
//               <>
//                 <span onClick={handleToggleSignIn} className="clickable-text">
//                   Sign In
//                 </span>{" "}
//                 {" "}
//                 {/* <Link to="/signup" className="custom-link">
//                   Sign Up
//                 </Link> */}
//               </>
//             )}
//           </div>

//           {/* Sign In Form */}
//           {!user && showSignIn && (
//             <div className="signin-form">
//               <h4>Sign In</h4>
//               <form onSubmit={handleLogin}>
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="Username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   required
//                   className="signin-input"
//                 />
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   className="signin-input"
//                 />
//                 <button type="submit" className="signin-btn">
//                   Login
//                 </button>
//               </form>
//             </div>
//           )}
//         </div>

//         {/* Cart */}
//         <Link to="/cart" className="custom-link">
//           <div className="cart">
//             Cart <span>{cartItems.length}</span>
//           </div>
//         </Link>
//       </div>

//       {/* SubMenu */}
//       <div className="subMenu">
//         <ul>
//           <Link to="/Mobile"><li>Mobiles</li></Link>
//           <Link to="/Computers"><li>Computers</li></Link>
//           <Link to="/Watch"><li>Watches</li></Link>
//           <Link to="/Men"><li>Men Fashions</li></Link>
//           <Link to="/Women"><li>Women Dressings</li></Link>
//           <Link to="/Furniture"><li>Furniture</li></Link>
//           <Link to="/ac"><li>AC</li></Link>
//           <Link to="/Kitchen"><li>Kitchen</li></Link>
//           <Link to="/speaker"><li>Speaker</li></Link>
//           <Link to="/books"><li>Books</li></Link>
//           <Link to="/fridge"><li>Fridge</li></Link>
//           <Link to="/tv"><li>TV</li></Link>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const [showSignIn, setShowSignIn] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleToggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      setUser(formData.username);
      setShowSignIn(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setFormData({ username: "", password: "" });
  };

  return (
    <>
      <div className="navSection">
        {/* Title */}
        <div className="title">
          <Link to="/" className="custom-link">
            <h2>A-mart</h2>
          </Link>
        </div>

        {/* Search */}
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>

        {/* User Section */}
        <div className="user">
          <div className="user-details">
            {user ? (
              <>
                <span className="welcome-text">Welcome, {user}</span>{" "}
                /{" "}
                <span onClick={handleLogout} className="clickable-text">
                  Sign Out
                </span>
              </>
            ) : (
              <>
                <span onClick={handleToggleSignIn} className="clickable-text">
                  Sign In
                </span>
              </>
            )}
          </div>

          {/* Sign In Form */}
          {!user && showSignIn && (
            <div className="signin-form">
              <h4>Sign In</h4>
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="signin-input"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="signin-input"
                />
                <button type="submit" className="signin-btn">
                  Login
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="custom-link">
          <div className="cart">
            Cart <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>

      {/* SubMenu */}
      <div className="subMenu">
        <ul>
          <Link to="/Mobile"><li>Mobiles</li></Link>
          <Link to="/Computers"><li>Computers</li></Link>
          <Link to="/Watch"><li>Watches</li></Link>
          <Link to="/Men"><li>Men Fashions</li></Link>
          <Link to="/Women"><li>Women Dressings</li></Link>
          <Link to="/Furniture"><li>Furniture</li></Link>
          <Link to="/ac"><li>AC</li></Link>
          <Link to="/Kitchen"><li>Kitchen</li></Link>
          <Link to="/speaker"><li>Speaker</li></Link>
          <Link to="/books"><li>Books</li></Link>
          <Link to="/fridge"><li>Fridge</li></Link>
          <Link to="/tv"><li>TV</li></Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
