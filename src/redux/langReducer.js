import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modelShow: false,
  currentLangModel: localStorage.getItem('language') || 'en'
}

export const langReducer = createSlice({
  name: 'languageReducer',
  initialState,
  reducers: {
    showModel: (state, action) => {
      state.modelShow = action.payload
    },
    changeLanguage: (state, action) =>{
      localStorage.setItem('language', action.payload)
      state.currentLangModel = action.payload
    }
  },
})

export const { showModel, changeLanguage } = langReducer.actions

export default langReducer.reducer