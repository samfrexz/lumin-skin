import { Link } from 'react-router-dom';
import '../App.css'
import { DownOutlined, FilterOutlined } from '@ant-design/icons';

const StickyNav = () => {
  return ( 
    <aside className='w-full sticky top-20 bg-bodybg'>
      <div className='w-navWidth mx-auto flex justify-between h-24 items-center'>
            <ul className='flex'>
              <li>
                <Link to="#">All</Link>
              </li>
              <li className='px-5'>
                <Link to="#">Best Sellers</Link>
              </li>
              <li className='px-5'>
                <Link to="#">Face</Link>
              </li>
              <li className='px-5'>
                <Link to="#">Hair & Body</Link>
              </li>
              <li className='px-5'>
                <Link to="#">Bundles</Link>
              </li>
              <li className='px-5'>
                <Link to="#">Accessories</Link>
              </li>
            </ul>

            <div className='flex gap-4'>
              <div className='flex w-32 justify-between h-full items-center border-gray-500 border rounded p-2 cursor-pointer'>
               <div className='flex h-full items-center'>
                  <FilterOutlined className='' />
                  <p className='px-2'>Filters</p>
               </div>
                <DownOutlined />
              </div>
              <div>
                <div className='flex w-60 justify-between h-full items-center border-gray-500 border rounded p-2 cursor-pointer'>
                  <p>Sort by: </p>
                  <DownOutlined className='' />
                </div>
              </div>
            </div>
          </div>
    </aside>
   );
}
 
export default StickyNav;