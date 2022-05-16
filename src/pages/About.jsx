import { useContext } from 'react'
import { Link } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'

const About = () => {
  const { user } = useContext(GithubContext)
  return (
    <>{user && <div className='absolute top-0 right-0 bg-neon-green'></div>}</>
  )
}

export default About
