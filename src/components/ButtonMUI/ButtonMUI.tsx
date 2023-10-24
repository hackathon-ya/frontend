import Button from "@mui/material/Button";
import styles from './ButtonMUI.module.scss';

interface Props {
  variant: any;
  text: string;
}
const ButtonMUI = ({ variant, text }: Props) => {
  return (
    <Button variant={variant} className={styles['outlined']}>
      {text}
    </Button>
  );
};
export default ButtonMUI;
