import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Navbar = ({ title }) => {
  return (
    <nav className='navbar mb-1 text-neon-green pt-5'>
      <div className='container'>
        <div className='flex-none'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            {title}
          </Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'GitHub Finder',
}
Navbar.propTypes = {
  title: PropTypes.string,
}
export default Navbar
