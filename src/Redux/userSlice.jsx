import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        authenticateUser: (state, action) => {
            state.isAuthenticated = true;
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
        },
    },

});

export const { authenticateUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
