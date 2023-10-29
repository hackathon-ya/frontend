import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFovorites = createAsyncThunk(
  'applicant/getFavorites',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('http://158.160.53.161/api/v1/favorites/', {
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
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],

    favoritesStatus: 'initial',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getFovorites.pending, (state) => {
        state.favoritesStatus = 'pending';
        state.error = null;
      })
      .addCase(getFovorites.fulfilled, (state, action) => {
        state.favoritesStatus = 'success';
        state.favorites = action.payload;
        state.error = null;
      })
      .addCase(getFovorites.rejected, (state) => {
        state.favoritesStatus = 'error';
      }),
});

export const {} = favoritesSlice.actions;

export default favoritesSlice.reducer;
