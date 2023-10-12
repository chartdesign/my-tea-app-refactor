"use client";
import { useEffect, useState } from "react";

import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Rating from "../components/Ratings";

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
    <div className='home'>
      <div className='productContainer'>
        <div className='ListGroup'>
          {cart.map((prod) => (
            <div key={prod.id}>
              <div className='flex'>
                <div className='col'>
                  <img src={prod.image} alt={prod.name} />
                </div>
                <div className='col'>
                  <span>{prod.name}</span>
                </div>
                <div className='col'>₹ {prod.price}</div>
                <div className='col'>
                  <Rating rating={prod.ratings} />
                </div>
                <div className='col'>
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
                <div className='col'>
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
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='filters summary'>
        <span className='title'>Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <button disabled={cart.length === 0}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
