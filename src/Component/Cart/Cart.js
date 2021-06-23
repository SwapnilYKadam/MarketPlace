import classes from "./Cart.module.css";
// import { CartList } from "./../../Data/CartList";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../../Store/Cart-slice";

const Cart = () => {
  const CartList = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const removeHandler = (item) => {
    dispatch(CartAction.removeProduct(item));
  };

  return (
    <div className={classes.cart}>
      <div className={classes.ProductList}>
        <h1 className={classes.title}>Shopping cart</h1>
        {!Boolean(CartList.length) && (
          <div className={classes.message}>Your cart is empty.</div>
        )}
        {CartList.map((item, index) => {
          return (
            <div className={classes.cartItem} key={index}>
              <div>
                <img src={item.img} alt="img" />
              </div>
              <div className={classes.quantity}>
                <h3>Quantity</h3>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className={classes.cartItemContent}>
                <h1>{item.title}</h1>

                <h1>
                  {item.price &&
                    item.quantity &&
                    `${item.price} x ${item.quantity}`}
                </h1>
              </div>
              <div className={classes.remove}>
                <button
                  className="button"
                  onClick={() => {
                    removeHandler(item);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.Total}>
        <div className={classes.Amount}>
          <h1 className={classes.title}>SubTotal Item</h1>
          {CartList.map((item) => {
            return (
              <div className={classes.item}>
                <h2>{item.title}</h2>
                <h2>
                  {item.price &&
                    item.quantity &&
                    `${item.price} x ${item.quantity}`}
                </h2>
              </div>
            );
          })}
          <div className={classes.price}>${totalPrice.toFixed(2)}</div>
        </div>
        <div className={classes.checkoutButton}>
          <button className={`${classes.btn} button`}>
            Proceed To checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
