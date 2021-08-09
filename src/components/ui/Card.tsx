import { ReactNode } from "react";
import classes from "./Card.module.scss";

type Props = {
  children: ReactNode;
};
function Card({ children }: Props) {
  return <div className={classes.card}>{children}</div>;
}

export default Card;
