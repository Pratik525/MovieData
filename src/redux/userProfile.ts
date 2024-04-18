import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface DataState {
  user: {
    email: string,
    password: string,
  },
  language: string
}

const initialState: DataState = {
  user: {
    email: '',
    password: '',
  },
  language: 'en'
};

const userSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{email: string; password: string}>) {
      state.user = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const {setUser, setLanguage} = userSlice.actions;
export default userSlice.reducer;
