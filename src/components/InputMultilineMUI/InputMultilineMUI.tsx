import styles from './InputMultilineMUI.module.scss';
import TextField from '@mui/material/TextField';

interface Props {
  id: string;
  className: string;
  onChange: () => void,
}

const InputMultilineMUI = ({ id, className, onChange }: Props) => {
  return (
    <TextField
      id={id}
      className={styles[className]}
      multiline
      rows={4}
      onChange={onChange}
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
