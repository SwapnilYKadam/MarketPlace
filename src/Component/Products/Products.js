import Card from "../Cards/Card";
import classes from "./Product.module.css";
import { ProductList } from "../../Data/ProductList";
// import { Redirect } from "react-router";

const Products = () => {
  // const handledetailPage = (e) => {
  //   console.log(e.target.value);
  //   // return <Redirect to={e.target.value}/>;
  // };

  return (
    <div className={classes.products}>
      {ProductList.map((Product, index) => {
        return <Card product={Product} key={index} />;
      })}
    </div>
  );
};

export default Products;
