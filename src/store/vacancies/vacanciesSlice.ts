import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { url } from '../../constants/url';

export const getVacancies = createAsyncThunk(
  'vacancies/getVacancies',
  async function (_, { rejectWithValue }) {
    try {

      const response = await fetch('http://158.160.53.161/api/v1/vacancies/', {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'GET',
      });
      if (!response.ok) {
        return rejectWithValue('Error');
      }
      const data = await response.json();
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);

export const postVacancy = createAsyncThunk(
  'vacancies/postVacancies',
  async function (requestData: any, { rejectWithValue }) {
    try {
      const response = await fetch(`${url}/vacancies/`, {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(requestData),
      });
      if (!response.ok) {
        return rejectWithValue('Error');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);

// export const deleteVacancies = createAsyncThunk(
//   'vacancies/deleteVacancy',
//   async function (id, { rejectWithValue }) {
//     try {
//       const response = await fetch(fetch(`${url}/vacancies/${id}/`, {

//         method: 'DELETE',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         credentials: "include",
//       });
//       if (!response.ok) {
//         return rejectWithValue('Error');
//       }
//       const data = await response.json();
//       return data;
//     } catch (e: any) {
//       return rejectWithValue(e);
//     }
//   }
// );

export const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState: {
    vacancies: [],
    vacanciesView: 'active',
    show: false,

    vacanciesStatus: 'initial',
    error: null,
  },
  reducers: {
    handleActive: (state) => {
      state.vacanciesView = 'active';
    },
    handleArchive: (state) => {
      state.vacanciesView = 'archive';
    },
    handleDraft: (state) => {
      state.vacanciesView = 'draft';
    },
    handleOpenForm: (state) => {
      state.vacanciesView = 'add';
    },
    handleOpenModal: (state) => {
      state.show = true;
    },
    handleCloseModal: (state) => {
      state.show = false;
    },
    handleOpenEditForm: (state) => {
      state.vacanciesView = 'edit';
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getVacancies.pending, (state) => {
        state.vacanciesStatus = 'pending';
        state.error = null;
      })
      .addCase(getVacancies.fulfilled, (state, action) => {
        state.vacanciesStatus = 'success';
        state.vacancies = action.payload;
        state.error = null;
      })
      .addCase(getVacancies.rejected, (state) => {
        state.vacanciesStatus = 'error';
      }),
});

export const {
  handleActive,
  handleArchive,
  handleDraft,
  handleOpenForm,
  handleOpenModal,
  handleOpenEditForm,
  handleCloseModal,
} = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
