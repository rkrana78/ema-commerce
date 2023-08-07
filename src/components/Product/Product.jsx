import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
  const { img, name, price, ratings, seller } = props.product;
  const {handleAddToCart} = props
  return (
    <div className="product">
      <img src={img} alt="shoes" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="product-seller">Manufacturer: {seller}</p>
        <p className="ratings">Rating: {ratings} star</p>
      </div>
      <button onClick={ () => handleAddToCart (props.product)} className="cart">
        <p className="cart-add">Add to Cart <FontAwesomeIcon icon={faCartPlus} /></p>
      </button>
    </div>
  );
};

export default Product;
