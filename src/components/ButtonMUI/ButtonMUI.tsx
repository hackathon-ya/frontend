import Button from "@mui/material/Button";
import styles from "./ButtonMUI.module.scss";

interface Props {
  variant: any;
  text: string;
  type: 'submit' | 'button';
  onClick?: () => void;
}
const ButtonMUI = ({ variant, text, onClick, type }: Props) => {
  return (
    <Button
      variant={variant}
      className={styles["outlined"]}
      onClick={onClick}
      type={type}
    >
      {text}
    </Button>
  );
};
export default ButtonMUI;
