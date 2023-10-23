//Временный файл
// import * as React from 'react';
import "./Mui.css";
import { theme } from "./CreateTheme";
import { ThemeProvider } from "@mui/material/styles";
import { CustomizedHook } from "./CustomizedHook";
import { ButtonMain, ButtonStylized } from "./Buttons";
import { InputMain, InputStylized } from "./Inputs";

function Mui() {
  return (
    <ThemeProvider theme={theme}>
      <div className="mui">
        <ButtonMain />
        <ButtonStylized />
        <InputMain />
        <InputStylized />
        <CustomizedHook />
      </div>
    </ThemeProvider>
  );
}

export default Mui;
