import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: (state, action) => [...state, action.payload], // or: (state, action) => {state.push(action.payload)}
    deleteContact: (state, action) => state.filter(c => c.id !== action.payload)
  }
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
