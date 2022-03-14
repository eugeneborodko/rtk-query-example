import { FC } from 'react'
import { usersAPI } from '../../services/UsersService'

const UsersContainer: FC = () => {
  const {data: users, error, isLoading} = usersAPI.useFetchAllUsersQuery({})

  return (
    <div>
      {isLoading && (
        <h1>Loading...</h1>
      )}
      {error && (
        <h1>error</h1>
      )}
      {users?.map((user) => (
        <div key={user.id}>{user.id} {user.email}</div>
      ))}
    </div>
  )
}

export default UsersContainer