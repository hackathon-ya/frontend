import Button from '@mui/material/Button';
import styles from './ButtonMUI.module.scss';
import React from 'react';

interface Props {
  variant: string;
  text: string;
  onClick?: any;
}
const ButtonMUI = ({ variant, text, onClick }: Props) => {
  return (
    <Button
      variant={variant}
      className={styles['outlined']}
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
};
export default ButtonMUI;
