import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <>
      <Link to={`/user/${login}`}>
        <div className='text-light border-gray border-2 shadow-md p-1 mx-1 rounded-sm hover:bg-dark hover:border-4 hover:border-neon-green hover:shadow-lg hover:text-neon-green hover:cursor-pointer card-compact transition duration-400 ease-out hover:ease-in '>
          <div className='flex flex-row items-center space-x-2 card-body'>
            <div className='avatar'>
              <div className='rounded-full shadow-xl w-14 h-14'>
                <img src={avatar_url} alt='profile' />
              </div>
            </div>
            <p className='text-xl tracking-wide mono truncate'>@{login}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default UserItem
