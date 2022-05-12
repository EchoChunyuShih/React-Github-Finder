import { Link } from 'react-router-dom'
const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <>
      <Link
        className='card text-slate-50 text-opacity-70 hover:bg-slate-300 hover:shadow-lg hover:text-gray-800 mx-1 hover:cursor-pointer shadow-md card-compact bg-slate-700 my-2 transition duration-400 ease-out hover:ease-in'
        to={`/user/${login}`}
      >
        <div className='flex-row items-center space-x-4 card-body'>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='profile' />
            </div>
          </div>
          <div>
            <h2 className='card-title tracking-wide mono'>
              <span>@</span>
              {login}
            </h2>
          </div>
        </div>
      </Link>
    </>
  )
}

export default UserItem
