import { BsCodeSlash } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer pt-10 pb-5 footer-center'>
      <div className='flex justify-center items-center text-slate-gray w-full'>
        <div> &copy; {footerYear} </div>
        <div className='ml-1 flex'>
          Built with&nbsp;
          <Link to='https://tailwindcss.com/' className='text-neon-green ml-1'>
            React v17
          </Link>
          ,
          <Link to='https://tailwindcss.com/' className='text-neon-green ml-1'>
            Tailwind
          </Link>
          ,
          <Link to='https://daisyui.com/' className='text-neon-green mx-1'>
            Daisy UI
          </Link>
          &nbsp;and more...
        </div>
      </div>
    </footer>
  )
}

export default Footer
