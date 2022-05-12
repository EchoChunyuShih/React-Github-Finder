import { useEffect, useContext } from 'react'
import GithubContext from '../context/github/GithubContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineBriefcase } from 'react-icons/hi'
import { TiSocialTwitter } from 'react-icons/ti'
import { IoCalendarOutline, IoLinkOutline } from 'react-icons/io5'

import Spinner from '../components/layout/Spinner'
import RepoList from '../components/repos/RepoList'
import { getUserAndRepos } from '../context/github/GithubActions'

//react router v5s
// const User = ({ match }) => {
//   const { getUser, user } = useContext(GithubContext)
//   useEffect(() => {
//     getUser(match.params.login)
//   })
//   return <div>{user.login}</div>
// }

const User = () => {
  const { user, loading, repos, dispatch } = useContext(GithubContext)
  console.log(user)
  const params = useParams()
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login)
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData })
    }
    setTimeout(() => {
      getUserData()
    }, 500)
  }, [dispatch, params.login])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
    created_at,
  } = user
  // format intergers
  const IntergerFormatter = (int) => {
    const formatted = new Intl.NumberFormat('en-us', {
      maximumFractionDigits: 0,
    }).format(int)
    return formatted
  }

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>

        <div className='user-avatar my-6'>
          <img
            src={avatar_url}
            alt='avatar'
            className='w-1/5 rounded-full m-auto '
          />
        </div>
        <div className='flex flex-col items-center justify-center my-2'>
          <h1 className='text-3xl card-title my-3'>
            {name}
            <a
              href={html_url}
              target='_blank'
              rel='noreferrer'
              className='hover:underline hover:text-blue-400 text-2xl'
            >
              @ {login}
            </a>
          </h1>
          <div className='flex item center justify-center'>
            <div className='ml-2 mr-1 badge badge-sm badge-success my-2'>
              {type}
            </div>
            {hireable && (
              <div className='badge badge-sm badge-info my-2 ml-1'>
                Hireable
              </div>
            )}
          </div>

          <em className='w-3/4 text-center'>{bio}</em>
          {blog && (
            <a
              href={`https://${blog}`}
              target='_blank'
              rel='noreferrer'
              className='hover:underline hover:text-blue-400 col-auto mx-1  flex items-center'
            >
              <IoLinkOutline />
              <span className='mx-1'>{blog}</span>
            </a>
          )}
          <div className='flex w-full justify-evenly items-center my-5'>
            {location && (
              <div className='flex items-center col-auto mx-1'>
                {/* <div className='stat-title text-md'>Location</div> */}
                <HiOutlineLocationMarker />
                <div className='text mx-1'>{location}</div>
              </div>
            )}
            {company && (
              <div className='flex items-center col-auto mx-1'>
                {/* <div className='stat-title text-md'>Location</div> */}
                <HiOutlineBriefcase />
                <div className='text mx-1'>{company}</div>
              </div>
            )}

            <div className='flex items-center col-auto mx-1'>
              {/* <div className='stat-title text-md'>Location</div> */}
              <IoCalendarOutline />
              <div className='text mx-1'>
                Join {moment(created_at).format('YYYY MMM DD')}
              </div>
            </div>

            {twitter_username && (
              <div className='flex items-center hover:underline col-auto mx-1 hover:text-blue-400'>
                <TiSocialTwitter fontSize={20} />
                <div className='text '>
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='grid-cols-4 grid gap-x-1 py-5 m-auto lg:w-3/4 text-slate-500'>
        <div className={stat}>
          <div className='text-3xl md:text-4xl'>
            {IntergerFormatter(followers)}
          </div>
          <div className='stat-title'>Followers</div>
        </div>

        <div className={stat}>
          <div className='text-3xl md:text-4xl'>
            {IntergerFormatter(following)}
          </div>
          <div className='stat-title'>Following</div>
        </div>

        <div className={stat}>
          <div className='text-3xl md:text-4xl'>
            {IntergerFormatter(public_repos)}
          </div>
          <div className='stat-title'>Repos</div>
        </div>

        <div className={stat}>
          <div className='text-3xl md:text-4xl'>
            {IntergerFormatter(public_gists)}
          </div>
          <div className='stat-title'>Public Gists</div>
        </div>
      </div>

      <RepoList repos={repos} />
      {/* </div> */}
    </>
  )
}
const stat =
  'w-full rounded-sm shadow-md bg-slate-50 m-auto px-5 py-4 text-center'
export default User
