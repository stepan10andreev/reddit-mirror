import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IToken = string;


const initialState: IToken = '';

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => action.payload,
  }
})

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
