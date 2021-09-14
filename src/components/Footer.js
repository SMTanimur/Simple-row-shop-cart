import Link from 'next/link';
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';


 
const Footer = () => {
  return (
    <div className=" border-t-2 border-red-50 py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
         <h3 className="text-lg md:text-xl">© Tanimur Rahman. All Rights Reserved.</h3>
         <h3 className="text-lg md:tex-xl">Developed by <span>Tanimur Rahman</span></h3>
         <div className='flex text-2xl justify-between space-x-4 items-center mt-3'>
          <Link href='https://m.facebook.com/profile.php?ref=bookmarks'>
            <a className='hover:text-green-400 transition'>
              <FaFacebook />
            </a>
          </Link>
          <Link href='https://m.facebook.com/profile.php?ref=bookmarks'>
            <a className='hover:text-green-400 transition'>
              <FaTwitter />
            </a>
          </Link>
          <Link href='https://m.facebook.com/profile.php?ref=bookmarks'>
            <a className='hover:text-green-400 transition'>
              <FaGithub />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
