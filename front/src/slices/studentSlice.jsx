import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { gangService } from "../services/gangtSercive";

const initialState = {
  gang: [],
  error: false,
  success: false,
  loading: false,
}

export const showGang = createAsyncThunk(
  'student/showGang',
  async(gang,thunkAPI) => {
    const token = thunkAPI.getState().auth.user.login.token

    const data = await gangService.showGang(token);
    return data
  }
)

export const gangSlice = createSlice({
  name: 'gang',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    }
  },
  extraReducers:(builder) => {
    builder
    .addCase(showGang.pending,(state) => {
      state.loading = true
      state.error = false;
    })
    .addCase(showGang.fulfilled,(state,action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.gang = action.payload;
    })
  }

})

export const {resetMessage} = gangSlice.actions;
export default gangSlice.reducer;
