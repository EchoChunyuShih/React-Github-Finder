import { createContext, useReducer } from 'react'
import { createRenderer } from 'react-dom/test-utils'
import { useNavigate } from 'react-router-dom'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  //[loading時間設定]一開始設loading 為false
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  // get search result
  const searchUsers = async (text) => {
    //[loading時間設定]啟動fetchUser會先設定loading => true
    setLoading()
    const params = new URLSearchParams({ q: text })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    const { items } = await response.json()
    //[loading時間設定]啟動fetchUser=> loading === true => 1.3秒後 loading ===false
    setTimeout(() => {
      dispatch({
        type: 'GET_USERS',
        payload: items,
      })
    }, 1000)
  }

  // get single user result
  const getUser = async (login) => {
    //[loading時間設定]啟動fetchUser會先設定loading => true
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    if (response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await response.json()
      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  // get user repos
  const getUserRepos = async (login) => {
    //[loading時間設定]啟動fetchUser會先設定loading => true
    setLoading()
    const params = new URLSearchParams({ sort: 'created_at', per_page: 10 })
    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    )
    const data = await response.json()
    //[loading時間設定]啟動fetchUser=> loading === true => 1.3秒後 loading ===false
    setTimeout(() => {
      dispatch({
        type: 'GET_REPOS',
        payload: data,
      })
    }, 1000)
  }

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' })
  }
  const clearUsers = () => {
    dispatch({ type: 'CLEAR_USERS' })
  }
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
export default GithubContext
