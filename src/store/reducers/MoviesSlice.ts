import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../models/IMovie";

interface initialState {
  moviesInfo: Array<IMovie>,
  activeMovieInfo: IMovie | null,
  editMovieInfo: IMovie | null
}

const initialState: initialState = {
  moviesInfo: [],
  activeMovieInfo: null,
  editMovieInfo: null
}

export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.moviesInfo = action.payload
    },
    setActiveMovie: (state, action: PayloadAction<IMovie>) => {
      state.activeMovieInfo = action.payload
    },
    setEditMovie: (state, action: PayloadAction<IMovie>) => {
      state.editMovieInfo = action.payload
    }
  }
})

export default moviesSlice.reducer
