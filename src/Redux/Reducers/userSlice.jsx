import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isFetching: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        startAuth: ( state ) => {
            state.isFetching = true;
        },
        successAuth: ( state, action ) => {
            state.isFetching = false;
            state.currentUser = action.payload.user;
        },
        logoutAuth: ( state ) => {
            state.currentUser = null;
        },
    }
});

export const {
    startAuth,
    successAuth,
    logoutAuth
} = userSlice.actions

export default userSlice.reducer;