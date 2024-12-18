import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../models/IMovie";
import { IFilters } from "../../models/IFilters";



type initialState = {
  searchField: string;
  filters: IFilters
}

const initialState: initialState = {
  searchField: "",
  filters: {
    createdAt: null,
    genre: null,
    release_year: null,
    updatedAt: null
  }
}

export const utilsSlice = createSlice({
  name: "utilsSlice",
  initialState,
  reducers: {
    setSearchField: (state, action: PayloadAction<string>) => {
      state.searchField = action.payload
    },
    setFilter: (state, action: PayloadAction<[keyof IFilters, string | null]>) => {
      state.filters[action.payload[0]] = action.payload[1]
    },
  }
})

export default utilsSlice.reducer
