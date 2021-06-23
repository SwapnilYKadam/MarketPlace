import classes from "./Carousel.module.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useState } from "react";
import { ProductList } from "../../Data/ProductList";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevHandler = () => {
    setCurrent(current === 0 ? 2 : current - 1);
  };

  const nextHandler = () => {
    setCurrent(current === 2 ? 0 : current + 1);
  };

  return (
    <div className={classes.container}>
      <BsChevronLeft className={classes.left} onClick={prevHandler} />
      <BsChevronRight className={classes.right} onClick={nextHandler} />
      {ProductList.map((ele, index) => {
        return (
          current === index && (
            <div className={classes.slide} key={index}>
              <h1>
                {ele.title} ({ele.price})
              </h1>
              <img src={ele.img} alt="img1" />
            </div>
          )
        );
      })}
    </div>
  );
};
export default Carousel;
