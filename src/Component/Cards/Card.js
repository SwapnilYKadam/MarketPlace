import classes from "./Card.module.css";
import { AiTwotoneStar } from "react-icons/ai";
import { useHistory } from "react-router";

const Card = (props) => {
  const history = useHistory();

  const handledetailPage = () => {
    history.push(`/${props.product.Id}`);
  };

  return (
    <div className={classes.card} onClick={handledetailPage}>
      <img src={props.product.img} alt={props.product.title} />
      <h2>{props.product.title}</h2>
      <div className={classes.rating}>
        <AiTwotoneStar className={classes.icon} />
        <AiTwotoneStar className={classes.icon} />
        <AiTwotoneStar className={classes.icon} />
        <AiTwotoneStar className={classes.icon} />
      </div>
      <h1 className={classes.price}>{props.product.price}</h1>
    </div>
  );
};

export default Card;
