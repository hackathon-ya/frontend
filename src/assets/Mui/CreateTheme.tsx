// https://mui.com/material-ui/customization/theming/ документация
// https://zenoo.github.io/mui-theme-creator/ создать кастомную тему в конструкторе

// переменные темы:
// palette
// typography
// spacing
// breakpoints
// zIndex
// transitions
// components

// значения palette:
// primary- для основных элементов интерфейса.
// secondary- для вторичных элементов интерфейса.
// error- для элементов, о которых пользователь должен быть осведомлен.
// warning- за потенциально опасные действия или важные сообщения.
// info- для выделения нейтральной информации.
// success- для индикации успешного завершения действия, инициированного пользователем.

// import * as React from 'react';
import { createTheme } from '@mui/material/styles';

//определение основных параметров темы, образец
export const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: 'rgba(29, 107, 243, 1)',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    button: {
      fontSize: '14px',
    },
  },
  components: {
  },
});


