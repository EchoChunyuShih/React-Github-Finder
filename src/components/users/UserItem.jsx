import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <>
      <Link to={`/user/${login}`} className='group'>
        <div className='text-light border-gray border-2 shadow-md p-1 mx-1 rounded-sm group-hover:bg-dark group-hover:border-4 group-hover:border-neon-green hover:shadow-lg group-hover:text-neon-green group-hover:cursor-pointer card-compact transition duration-400 ease-out group-hover:ease-in '>
          <div className='flex flex-row items-center space-x-2 card-body'>
            <div className='avatar'>
              <div className='rounded-full shadow-xl w-14 h-14 group-hover:scale-110'>
                <img src={avatar_url} alt='profile' />
              </div>
            </div>
            <p className='text-xl tracking-wide truncate group-hover:underline decoration-2'>
              @{login}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default UserItem
