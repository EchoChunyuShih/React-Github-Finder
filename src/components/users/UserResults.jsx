import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

import Spinner from '../layout/Spinner.js'
import UserItem from './UserItem'

const UserResults = () => {
  const { loading, users } = useContext(GithubContext)
  console.log(users)
  return !loading ? (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-5 lg:mx-8 pb-12 gap-3'>
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
