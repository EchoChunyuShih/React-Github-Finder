import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

import Spinner from '../layout/Spinner.js'
import UserItem from './UserItem'

const UserResults = () => {
  const { loading, users } = useContext(GithubContext)

  return !loading ? (
    <>
      <div className='grid grid-cols-1 mx-3 pb-12 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </>
  ) : (
    <Spinner />
  )
}

export default UserResults
