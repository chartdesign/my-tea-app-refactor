"use client";
import React, { useContext, useState } from "react";
import "./styles/header.css";
import Link from "next/link";
import { CartState } from "../context/Context";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <header>
      <nav className='nav-header container'>
        <div className='logo'>
          <Link href='/'>
            <img src='/logo.png' alt='tea shop' />
          </Link>
        </div>
        <div className='user-info'>
          <div id='input-container' className='searchBox'>
            <img src='/search.svg' alt='user' className='svg-img' />
            <input
              type='text'
              placeholder='Search'
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </div>

          <ul className='nav-header-user'>
            <li>
              <img src='/wishlist.svg' alt='heart' className='svg-img' />
              Wishlist
            </li>
            <li>
              <img src='/user.svg' alt='user' className='svg-img' /> Account
            </li>
            <li>
              <img src='/cart.svg' alt='cart' className='svg-img' />
              <span className='cart-count'>{cart.length}</span>
            </li>
          </ul>
        </div>
        <div className='cart'>
          <div className='cart-icon' onClick={toggleCart}>
            Cart
          </div>
          {isCartOpen && (
            <div className='cart-dropdown'>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className='cartitem' key={prod.id}>
                      <img
                        src={prod.image}
                        className='cartItemImg'
                        alt={prod.name}
                      />
                      <div className='cartItemDetail'>
                        <span>{prod.name}</span>
                        <span>$ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize='20px'
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link href='/cart'>
                    <button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
