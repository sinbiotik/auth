import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  email: string | null;
  id: string | null;
}

const initialState: UserState = {
  email: null,
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload
      state.id = action.payload
    },
    removeUser(state) {
      state.email = null
      state.id = null
    },
  },
})

export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer