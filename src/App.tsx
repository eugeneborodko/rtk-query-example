import { useEffect } from 'react'
import PostContainer from './components/PostContainer/PostContainerl'
import UsersContainer from './components/UsersContainer/UsersContainer'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/UserActions'
import { userSlice } from './store/reducers/UserSlice'

const App = () => {
  const { count, users, error, isLoading } = useAppSelector(
    (state) => state.userReducer
  )
  const { increment } = userSlice.actions
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <>
    <PostContainer />
    <UsersContainer />
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(5))}>increment</button>
      <hr />
      {/* {isLoading && <h1>loading</h1>}
      {error && <h1>{error}</h1>}
      {users && users.map((user) => (
        <div>{user.id}. {user.name}</div>
      ))} */}
    </>
  )
}

export default App
