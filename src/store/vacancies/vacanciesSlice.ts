import { createSlice } from '@reduxjs/toolkit';

export const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState: {
    vacanciesView: 'active',
    show: false,
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
});

export const {
  handleActive,
  handleArchive,
  handleDraft,
  handleOpenForm,
  handleCloseModal,
  handleOpenModal,
  handleOpenEditForm,
} = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
