import { configureStore } from '@reduxjs/toolkit'
import LangReducer from './langReducer'

export const store = configureStore({
    reducer:{
        languageModel: LangReducer
    }
})