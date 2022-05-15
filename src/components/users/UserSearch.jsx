import { useState, useContext } from 'react'

import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'

const UserSearch = () => {
  const [text, setText] = useState('')
  const { users, dispatch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('please enter something', 'error')
    } else {
      const users = await searchUsers(text)
      dispatch({ type: 'GET_USERS', payload: users })
    }
  }
  const handleClear = () => {
    setText('')
    dispatch({ type: 'CLEAR_USERS' })
  }
  return (
    <div className='flex justify-center items-center m-auto w-2/3 xl:w-3/5 lg:w-3/5 md:w-4/5 mb-8 gap-8 py-10'>
      <div>
        <form className='form-control' onSubmit={handleSubmit}>
          <div className='relative'>
            <input
              type='text'
              className='w-96 pr-5 pl-5 bg-light input-lg input-bordered input rounded-sm text-black text-xl'
              placeholder='Search a Github username...'
              value={text}
              onChange={handleChange}
            />
            {/* <button
              className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              type='submit'
            >
              go
            </button> */}
          </div>
        </form>
      </div>
      {/* {users.length > 0 && ( */}
      <div>
        <button
          className={`btn btn-ghost btn-lg ${
            users.length > 0 ? 'inline-block' : 'hidden'
          }`}
          onClick={handleClear}
        >
          clear
        </button>
      </div>
      {/* )} */}
    </div>
  )
}

export default UserSearch
