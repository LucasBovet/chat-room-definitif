import {createSlice} from '@reduxjs/toolkit';

const AppSlice = createSlice ({
    name: 'app',
    initialState: {
      user: null
    },
    reducers: {
        LoginUser: (state, action) => {
            state.user = action.payload
        },
        LogoutUser: (state) => {
            state.user = null
        }
    }
  })

  export const{LoginUser, LogoutUser} = AppSlice.actions
  export default AppSlice.reducer 