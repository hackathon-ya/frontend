import Button from "@mui/material/Button";
import styles from "./ButtonMUI.module.scss";

interface Props {
  variant: any;
  text: string;
  onClick?: any;
}
const ButtonMUI = ({ variant, text, onClick }: Props) => {
  return (
    <Button
      variant={variant}
      className={styles["outlined"]}
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
};
export default ButtonMUI;
