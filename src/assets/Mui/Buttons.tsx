import { Button } from "@mui/material";

// https://mui.com/material-ui/react-button/
export function ButtonMain() {
  return (
    <Button
      onClick={() => {
        alert("clicked");
      }}
    >
      Click me
    </Button>
  );
}

// стилизация отличающегося компонента
// определение общих стилей для всех button в файле CreateTheme
export function ButtonStylized() {
  const style = {
    background: "#5A9BFF",
    borderRadius: "6px",
    border: 0,
    color: "white",
    padding: "0 30px",
  };
  return (
    <Button
      style={style}
      //вариант простой настройки если основные стили определены глобально
      //в случае настройки через пропсы убрать переменную style
      // disableElevation //плоская
      // variant="contained" //"text" "contained" "outlined"
      // color='primary[500]' с цветом косяк, хавает только свои специфичные MUI цвета
      // size="small" //"small" medium large
      // className стандартно
      onClick={() => {
        alert("clicked");
      }}
    >
      Click me
    </Button>
  );
}
