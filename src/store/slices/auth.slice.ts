import { createAction, createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface AuthState {
  authState: boolean;
}

// Initial state
const initialState: AuthState = {
  authState: false,
};

const setAuthState = createAction("auth/setState", (authState: boolean) => ({
  payload: {
    authState,
  },
}));

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: (builder) => {
    builder.addCase(setAuthState, (state, { payload }) => {
      state.authState = payload.authState;
    });
  },
});

export default authSlice.reducer;
