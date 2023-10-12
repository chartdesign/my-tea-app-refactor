"use client";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "../components/Ratings";
import "./shoppingCart.css";
import Link from "next/link";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className='shopping-cart'>
      <div className='cart-items'>
        <h2>Shoppin Cart</h2>
        <ul>
          {cart.map((prod) => (
            <li key={prod.id}>
              <div>
                <img src={prod.image} alt={prod.name} />
              </div>
              <div>
                <span>{prod.name}</span>
              </div>
              <div>$ {prod.price}</div>
              <div>
                <Rating
                  style={{ display: "inline-block" }}
                  rating={prod.ratings}
                />
              </div>
              <div>
                <select
                  id='select'
                  value={prod.qty}
                  onChange={(e) =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: prod.id,
                        qty: e.target.value,
                      },
                    })
                  }
                >
                  {[...Array(prod.inStock).keys()].map((x) => (
                    <option key={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                >
                  <AiFillDelete fontSize='20px' />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='order-summary'>
        <span className='title'>Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <button disabled={cart.length === 0}>Proceed to Checkout</button>
        <Link href='/shop'>
          {" "}
          <p>or Continue Shopping</p>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
