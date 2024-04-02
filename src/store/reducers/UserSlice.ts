import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type UserState = {
  isLogged: boolean;
};

const initialState: UserState = {
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user ',
  initialState: initialState,
  reducers: {
    setLogin(state, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
    },
  },
});

export const {setLogin} = userSlice.actions;

export default userSlice.reducer;
