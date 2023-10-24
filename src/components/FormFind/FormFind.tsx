import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
const FormFind = () => {
  const [filter, setFiler] = useState("similar");

  const handleChange = (event: SelectChangeEvent) => {
    setFiler(event.target.value);
  };

  return (
    <FormControl
      sx={{
        minWidth: 257,
      }}
    >
      <Select
        value={filter}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          textAlign: "left",
          height: "40px",
        }}
      >
        <MenuItem sx={{ px: "12px", py: "8px" }} value={"similar"}>
          По соответствию
        </MenuItem>
        <MenuItem value={"new"}>По обновлению</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FormFind;
