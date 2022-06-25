import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ShoppingCartOutlined, UserOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons';
import Logo from './Logo'
import LogoDark from './LogoDark'
import '../App.css'


const TopNav = ({ setNav, nav }) => {
  const [ mobileW, setMobileW ] = useState(window.innerWidth) 

  const openNav =()=> {
    setNav(true)
  }

  const updateWidth =()=> {
    setMobileW(window.innerWidth)
    // console.log(mobileW)
  }
  useEffect(()=> {
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener("resize", updateWidth);
  })

  return ( 
    <header className="w-full lg:bg-white bg-black lg:text-gray-700 text-white h-20 fixed top-0">
      <nav className="w-navWidth mx-auto h-full flex justify-between items-center">
        <div className='lg:hidden'>
          <MenuOutlined className='cursor-pointer text-2xl' onClick={openNav} />
          <SearchOutlined className='text-2xl px-3' />
        </div>
        
        <ul className='lg:flex hidden'>
          <li className='px-1'>
            <Link to="#">Shop</Link>
          </li>
          <li className='px-5'>
            <Link to="#">Reviews</Link>
          </li>
          <li className='px-5'>
            <Link to="#">How To</Link>
          </li>
          <li className='px-5'>
            <Link to="#">Support</Link>
          </li>
        </ul>
        <div className='w-48'>
          <Link to="#">
            { 
              mobileW <= 1024 ? <LogoDark /> : <Logo />
            }
            
          </Link>
        </div>
        <div className='flex h-full items-center'>
          <Link to="#" className='px-4 lg:block hidden order-1'>
           <SearchOutlined className='text-2xl' />
          </Link>
          <Link to="#" className='px-4 order-4 lg:order-2'>
            <div className='flex'>
              <ShoppingCartOutlined className='text-2xl' />
              <p className='text-sm'>0</p>
            </div>
          </Link>
          <Link to="#" className='px-4 lg:block hidden order-3'>
            <UserOutlined className='text-2xl' />
          </Link>
          <div className='order-2 lg:order-4'>
            <label htmlFor="cur" className='px-4'>NGN</label>
            <select name="cur" id="cur" className='select'>
              <option value="USD"></option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            </div>
        </div>
      </nav>
    </header>
   );
}
 
export default TopNav;
