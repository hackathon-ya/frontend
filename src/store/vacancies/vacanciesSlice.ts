import { createSlice } from '@reduxjs/toolkit'

export const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState: {
    vacanciesView: 'active',
  },
  reducers: {
    handleActive: state => {
      state.vacanciesView = 'active'
    },
    handleArchive: state => {
      state.vacanciesView = 'archive'
    },
    handleDraft: state => {
        state.vacanciesView = 'draft'
      },
  },
})

export const { handleActive, handleArchive, handleDraft } = vacanciesSlice.actions

export default vacanciesSlice.reducer
