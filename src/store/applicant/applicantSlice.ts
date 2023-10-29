import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getApplicant = createAsyncThunk(
  'applicant/getApplicant',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('http://localhost/api/v1/candidates/', {
        headers: {
          'Content-type': 'application/json',
        },
        method: 'GET',
      });
      if (!response.ok) {
        return rejectWithValue('Error');
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);
export const applicantSlice = createSlice({
  name: 'applicant',
  initialState: {
    applicant: [],

    applicantStatus: 'initial',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getApplicant.pending, (state) => {
        state.applicantStatus = 'pending';
        state.error = null;
      })
      .addCase(getApplicant.fulfilled, (state, action) => {
        state.applicantStatus = 'success';
        state.applicant = action.payload;
        state.error = null;
      })
      .addCase(getApplicant.rejected, (state) => {
        state.applicantStatus = 'error';
      }),
});

export const {} = applicantSlice.actions;

export default applicantSlice.reducer;
