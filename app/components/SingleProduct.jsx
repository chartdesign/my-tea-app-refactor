import "./styles/SingleProduct.css";
import { CartState } from "../context/Context";
import Rating from "./Ratings";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className='card-container'>
      <div className='card-image'>
        <img src={product.image} alt={product.name} />
      </div>
      <p className='card-title'>{product.name}</p>
      <p className='card-description'>{product.description}</p>

      <p className='card-info'>Price: ${product.price}</p>
      <p className='card-info'>
        <span>
          <Rating
            rating={product.ratings}
            style={{ display: "inline-block" }}
          />
        </span>
        ({product.reviews}) Reviews
      </p>
      {cart.some((p) => p.id === product.id) ? (
        <button
          className='card-btn-out'
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: product,
            })
          }
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className='card-btn'
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: product,
            })
          }
          disabled={product.inStock === 0}
        >
          {product.inStock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      )}

      {/* <button className='card-btn'>Add to Cart</button> */}
    </div>
  );
};

export default SingleProduct;
