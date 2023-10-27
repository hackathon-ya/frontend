// import * as React from "react";
// import Box from "@mui/material/Box";
import styles from './InputMUI.module.scss';
import TextField from '@mui/material/TextField';

interface Props {
  variant: any;
  id: string;
  className: string;
  placeholder?: string;
  onChange: () => void,
}

const InputMUI = ({ variant, id, className, placeholder, onChange }: Props) => {
  return (
    <TextField
      id={id}
      variant={variant}
      size={'small'}
      className={styles[className]}
      placeholder={placeholder}
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

export default InputMUI;
