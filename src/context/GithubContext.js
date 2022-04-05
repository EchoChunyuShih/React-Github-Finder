import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  //[loading時間設定]一開始設loading 為false
  const initialState = {
    users: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  //? fetch initial users (testing purposes)
  const fetchUser = async () => {
    //[loading時間設定]啟動fetchUser會先設定loading => true
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    const data = await response.json()
    //[loading時間設定]啟動fetchUser=> loading === true => 1.3秒後 loading ===false
    setTimeout(() => {
      dispatch({
        type: 'GET_USERS',
        payload: data,
      })
    }, 1300)
  }
  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' })
  }
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
export default GithubContext
