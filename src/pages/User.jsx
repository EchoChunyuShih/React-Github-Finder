import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { VscArrowSmallLeft } from 'react-icons/vsc'
import { HiOutlineLocationMarker, HiOutlineBriefcase } from 'react-icons/hi'
import { TiSocialTwitter } from 'react-icons/ti'
import { IoCalendarOutline, IoLinkOutline } from 'react-icons/io5'

import Spinner from '../components/layout/Spinner'
import RepoList from '../components/repos/RepoList'
import { getUserAndRepos } from '../context/github/GithubActions'
import GithubContext from '../context/github/GithubContext'

//react router v5s
// const User = ({ match }) => {
//   const { getUser, user } = useContext(GithubContext)
//   useEffect(() => {
//     getUser(match.params.login)
//   })
//   return <div>{user.login}</div>
// }

const User = () => {
  const { user, loading, repos, dispatch, IntergerFormatter } =
    useContext(GithubContext)
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

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className='w-full'>
        <a
          href='https://github.com/EchoChunyuShih/react-github-finder'
          target='_blank'
          rel='noreferrer'
          className='absolute top-5 right-10 hover:text-neon-green'
        >
          &#60; Source /&#62;
        </a>
        <div className='container ml-10'>
          <Link to='/' className='btn btn-ghost btn-sm btn-action'>
            <VscArrowSmallLeft
              fontSize={25}
              className='btn-action-arrow mr-1'
            />
            Back To Search
          </Link>
        </div>
        <div className='user-avatar my-3 rounded-full flex justify-center'>
          <img
            src={avatar_url}
            alt='avatar'
            className='w-36 rounded-full m-auto ring ring-neon-green'
          />
        </div>

        <div className='flex flex-col items-center justify-center my-1 pb-20'>
          <h1 className='text-3xl font-black my-1 text-light'>{name}</h1>
          <a
            href={html_url}
            target='_blank'
            rel='noreferrer'
            className='hover:underline text-neon-green text-2xl mono mb-2'
          >
            @{login}
          </a>
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
          <em className='w-3/4 md:w-3/5 text-center'>{bio}</em>
          {blog && (
            <a
              href={`https://${blog}`}
              target='_blank'
              rel='noreferrer'
              className='hover:underline hover:text-neon-green col-auto mx-1  flex items-center'
            >
              <IoLinkOutline />
              <span className='mx-1'>{blog}</span>
            </a>
          )}
          <div className='flex w-full mx-4 justify-center items-center my-4 flex-wrap'>
            {location && (
              <div className='flex items-center col-auto mx-1'>
                <HiOutlineLocationMarker />
                <div className={user_detail}>{location}</div>
              </div>
            )}
            {company && (
              <div className='flex items-center col-auto mx-1'>
                <HiOutlineBriefcase />
                <div className={user_detail}>{company}</div>
              </div>
            )}

            <div className='flex items-center col-auto mx-1'>
              <IoCalendarOutline />
              <div className={user_detail}>
                Join {moment(created_at).format('YYYY MMM DD')}
              </div>
            </div>

            {twitter_username && (
              <div className='flex items-center hover:underline col-auto mx-1 hover:text-blue-400'>
                <TiSocialTwitter fontSize={20} />
                <div className={user_detail}>
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

      <div className='flex justify-center bg-light'>
        <div className='stats rounded-sm text-dark-gray relative bottom-16 shadow-md'>
          <div className={stat}>
            <div className={stat_number}>{IntergerFormatter(followers)}</div>
            <div className='stat-title'>Followers</div>
          </div>

          <div className={stat}>
            <div className={stat_number}>{IntergerFormatter(following)}</div>
            <div className='stat-title'>Following</div>
          </div>

          <div className={stat}>
            <div className={stat_number}>{IntergerFormatter(public_repos)}</div>
            <div className='stat-title'>Repos</div>
          </div>

          <div className={stat}>
            <div className={stat_number}>{IntergerFormatter(public_gists)}</div>
            <div className='stat-title'>Public Gists</div>
          </div>
        </div>
      </div>
      <div className='bg-light pb-12'>
        <RepoList repos={repos} />
      </div>
    </>
  )
}
const stat = 'stat bg-light py-4 text-center px-5'
const stat_number = 'text-3xl'
const user_detail = 'text mr-6 ml-1'
export default User
