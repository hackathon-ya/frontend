import styles from './InputSelectMUI.module.scss';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  id: string;
  className: string;
  currencies: any;
  defaultValue: string;
}

const InputSelectMUI = ({ id, className, currencies, defaultValue }: Props) => {
  return (
    <TextField
      id={id}
      size={'small'}
      className={styles[className]}
      defaultValue={defaultValue}
      select
      InputProps={{ classes: { root: styles.input__fonts } }}
      InputLabelProps={{
        classes: {
          root: styles.input__fonts,
          focused: styles.input__fonts,
        },
      }}
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InputSelectMUI;