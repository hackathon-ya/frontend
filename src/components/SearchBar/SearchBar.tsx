import InputBase from "@mui/material/InputBase";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.box}>
      <InputBase
        placeholder="Поиск по названию"
        inputProps={{ "aria-label": "search" }}
        className={styles.input}
      />
    </div>
  );
}
