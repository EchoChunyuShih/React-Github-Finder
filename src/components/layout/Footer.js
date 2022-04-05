import { BsCodeSlash } from 'react-icons/bs';

const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-10 bg-base-200 text-primary-content footer-center'>
      <BsCodeSlash size={30} />
      <div>Copyright &copy; {footerYear} All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
