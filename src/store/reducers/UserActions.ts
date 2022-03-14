import axios from 'axios'
import { IUser } from '../../models/IUser'
import { createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching())
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//   } catch (err) {
//     if (err instanceof Error) {
//       dispatch(userSlice.actions.usersFetchingError(err.message))
//     }
//   }
// }

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue('my error')
    }
  }
)
