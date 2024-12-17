import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/ModalsSlice"
import moviesReducer from "./reducers/MoviesSlice"
import utilsReducer from "./reducers/UtilsSlice"

const rootReducer = combineReducers({
  modalReducer,
  moviesReducer,
  utilsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']