import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './Reducers/conterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})