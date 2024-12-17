import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GrAction } from "react-icons/gr";

interface modalsSlice{
  addModalVisible: boolean;
  editModalVisible: boolean;
  infoModalVisible: boolean;
}

const initialState: modalsSlice = {
  addModalVisible: false,
  infoModalVisible: false,
  editModalVisible: false
}

export const modalsSlice = createSlice({
  name: "modalsSlice",
  initialState,
  reducers: {
    addModalVisibleSet: (state, action: PayloadAction<boolean>) => {
      state.addModalVisible = action.payload
    },
    infoModalVisibleSet: (state, action: PayloadAction<boolean>) => {
      state.infoModalVisible = action.payload
    },
    editModalVisibleSet: (state, action: PayloadAction<boolean>) => {
      state.editModalVisible = action.payload
    }
  }
})

export default modalsSlice.reducer