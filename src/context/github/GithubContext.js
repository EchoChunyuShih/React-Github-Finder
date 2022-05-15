import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  //[loading時間設定]一開始設loading 為false
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)
  // format intergers
  const IntergerFormatter = (int) => {
    const formatted = new Intl.NumberFormat('en-us', {
      maximumFractionDigits: 0,
    }).format(int)
    return formatted
  }
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        IntergerFormatter,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
export default GithubContext
