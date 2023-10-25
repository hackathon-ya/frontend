// import * as React from "react";
// import Box from "@mui/material/Box";
import styles from './InputMUI.module.scss';
import TextField from '@mui/material/TextField';

interface Props {
  variant: any;
  id: string;
  className: string;
  placeholder: string;
}

const InputMUI = ({ variant, id, className, placeholder }: Props) => {
  return (
    <TextField
      id={id}
      variant={variant}
      size={'small'}
      className={styles[className]}
      placeholder={placeholder}
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
