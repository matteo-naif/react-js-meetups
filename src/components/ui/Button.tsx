import classes from "./Button.module.scss";

type Props = {
  onClick?: () => void;
  label: string;
  type?: "button" | "submit" | "reset";
  appearance?: "stroked" | "flat";
};
function Button({ onClick, label, type = "button", appearance = "stroked" }: Props) {
  return (
    <button
      className={[classes.button, classes[appearance]].join(" ")}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
