import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  //     const [products, setProducts] = useState([]);
  //     const [search, setSearch] = useState("");

  //   useEffect(() => {
  //     fetch("http://localhost:5000/products?search="+search)
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }, [search]);

  //     const handleSearch =(event)=> {
  //     setSearch(event.target.value);
  //   }

  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/inventory">Admin</Link>
        {/* <input type="text" onBlur={handleSearch} className="product-search" placeholder="Search your item"/> */}
        <button onClick={() => setLoggedInUser({})}>Sign out</button>
        <Link to="/">{loggedInUser.name}</Link>

        {/* {
                        loggedInUser ?
                            <Avatar className="avtar2"
                                onClick={handleClick} title={loggedInUser.name}>{loggedInUser.name}</Avatar> :
                            <Avatar className="avtar"
                                onClick={handleClick} />
                    } */}
      </nav>
    </div>
  );
};

export default Header;
