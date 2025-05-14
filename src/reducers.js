import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: "name",
    initialState: {

    },
    reducers: {

    }
})

export const actionName = nameSlice.actions
export default {
    name: nameSlice.reducer
}