import styles from './InputMultilineMUI.module.scss';
import TextField from '@mui/material/TextField';

interface Props {
  id: string;
  className: string;
}

const InputMultilineMUI = ({ id, className }: Props) => {
  return (
    <TextField
      id={id}
      className={styles[className]}
      multiline
      rows={4}
      InputProps={{ classes: { root: styles[className] } }}
      InputLabelProps={{
        classes: {
          root: styles[className],
          focused: styles[className],
        },
      }}
    />
  );
};

export default InputMultilineMUI;
