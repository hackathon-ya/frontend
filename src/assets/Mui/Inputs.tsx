import { Input } from "@mui/material";

// https://mui.com/material-ui/api/input-base/
export function InputMain() {
  return (
    <Input
      onChange={() => {
        alert("changed");
      }}
    />
  );
}

// стилизация отличающегося компонента
// определение общих стилей для всех button в файле CreateTheme
export function InputStylized() {
  const style = {
    background: "white",
    borderRadius: "4px",
    border: "1px solid #DDE0E4",
    color: "black",
    padding: "0 30px",
  };
  return (
    <Input
      style={style}
      //вариант простой настройки если основные стили определены глобально
      //в случае настройки через пропсы убрать переменную style
      // disableElevation //плоская
      // variant="contained" //"text" "contained" "outlined"
      // color='primary[500]' с цветом косяк, хавает только свои специфичные MUI цвета
      // size="small" //"small" medium large
      // className стандартно
      onChange={() => {
        alert("changed");
      }}
    />
  );
}
