import classes from "./ProductDetail.module.css";
import { ProductList } from "./../../Data/ProductList";
import { useLocation } from "react-router";
import { CartAction } from "../../Store/Cart-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ProductDetail = () => {
  const location = useLocation();
  const currentProductId = location.pathname.substring(1);
  const dispatch = useDispatch();
  const [addedMessage, setAddedMessage] = useState(false);

  let currentProduct = ProductList.filter(
    (p) => p.Id.toString() === currentProductId
  )[0];

  const addProductToCart = () => {
    setAddedMessage(true);
    dispatch(CartAction.addProductToCart(currentProduct));
    setTimeout(() => {
      setAddedMessage(false);
    }, 3000);
  };

  return (
    <div className={classes.detailsPage}>
      <div className={classes.image}>
        <img src={currentProduct.img} alt={currentProduct.title} />
      </div>
      <div className={classes.detail}>
        <h1>{currentProduct.title}</h1>
        <h1>{currentProduct.price}</h1>
        <p className={classes.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <input type="number" min="1" max="5" defaultValue="1" />
        {addedMessage && (
          <div className={classes.confirmMessage}>Product added to cart</div>
        )}
        <button
          className={`${classes.addToCart} button`}
          onClick={addProductToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
