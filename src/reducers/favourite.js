import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        data: []
    },
    reducers: {
        updateAction: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { updateAction } = favouriteSlice.actions;

export default favouriteSlice.reducer;
