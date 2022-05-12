import { BsCodeSlash } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer pt-10 pb-5 bg-base-200 text-primary-content footer-center'>
      <BsCodeSlash size={30} />
      <div className='flex justify-center items-center text-slate-400 w-full '>
        <div> &copy; {footerYear} </div>
        <div className='ml-1 text-slate-400 flex'>
          Built with
          <Link to='https://tailwindcss.com/' className='text-sky-400 ml-1'>
            React v17
          </Link>
          ,
          <Link to='https://tailwindcss.com/' className='text-sky-400 ml-1'>
            Tailwind
          </Link>
          ,
          <Link to='https://daisyui.com/' className='text-sky-400 mx-1'>
            Daisy UI
          </Link>
          and more...
        </div>
      </div>
    </footer>
  )
}

export default Footer
