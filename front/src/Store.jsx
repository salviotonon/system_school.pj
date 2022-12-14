import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slices/authSlice'
import gangSlice  from './slices/studentSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    gang: gangSlice,
  },
})
