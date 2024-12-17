import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../models/IMovie";

interface initialState {
  searchField: string;
}

const initialState: initialState = {
  searchField: ""
}

export const utilsSlice = createSlice({
  name: "utilsSlice",
  initialState,
  reducers: {
    setSearchField: (state, action: PayloadAction<string>) => {
      state.searchField = action.payload
    }
  }
})

export default utilsSlice.reducer
