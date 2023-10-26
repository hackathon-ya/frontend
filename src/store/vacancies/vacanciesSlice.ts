import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getVacancies = createAsyncThunk(
  "vacancies/getVacancies",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("https://api/v1/vacancies");
      if (!response.ok) {
        return rejectWithValue("Error");
      }
      const data = await response.json();
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);
// export const deleteVacancies = createAsyncThunk(
//   "vacancies/deleteVacancy",
//   async function (_id, { rejectWithValue }) {
//     try {
//       const response = await fetch(`https://api/v1/vacancies/${_id}`);
//       if (!response.ok) {
//         return rejectWithValue("Error");
//       }
//       const data = await response.json();
//       return data;
//     } catch (e: any) {
//       return rejectWithValue(e);
//     }
//   }
// );
// method delete добавить
export const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState: {
    vacancies: [],

    vacanciesStatus: "initial",
    error: null,
    vacanciesView: "active",
  },
  reducers: {
    handleActive: (state) => {
      state.vacanciesView = "active";
    },
    handleArchive: (state) => {
      state.vacanciesView = "archive";
    },
    handleDraft: (state) => {
      state.vacanciesView = "draft";
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getVacancies.pending, (state) => {
        state.vacanciesStatus = "pending";
        state.error = null;
      })
      .addCase(getVacancies.fulfilled, (state, action) => {
        state.vacanciesStatus = "success";
        state.vacancies = action.payload;
        state.error = null;
      })
      .addCase(getVacancies.rejected, (state) => {
        state.vacanciesStatus = "error";
      }),
});

export const { handleActive, handleArchive, handleDraft } =
  vacanciesSlice.actions;

export default vacanciesSlice.reducer;
