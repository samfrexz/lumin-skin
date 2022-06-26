import { Link } from 'react-router-dom';
import '../App.css'
import { DownOutlined, FilterOutlined } from '@ant-design/icons';

const StickyNav = () => {
  return ( 
    <aside className='w-full sticky md:top-20 top-32 bg-bodybg border-b border-gray-300 lg:border-b-0'>
      <div className='lg:w-navWidth w-full mx-auto flex flex-wrap lg:justify-between items-center'>
           <div className='w-full md:block hidden lg:w-auto lg:bg-bodybg py-2 lg:py-6'>
            <ul className='flex w-navWidth mx-auto lg:w-auto lg:bg-bodybg'>
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
           </div>

            <div className='flex gap-4 w-full lg:w-auto py-2 lg:py-6'>
              <div className='flex lg:w-32 w-1/2 h-full items-center lg:border-gray-500 lg:border rounded p-2 cursor-pointer lg:justify-between justify-end'>
               <div className='flex h-full items-center'>
                  <FilterOutlined className='lg:block hidden' />
                  <p className='px-2 text-small'>Filters</p>
               </div>
                <DownOutlined />
              </div>
              <p className='border-l-2 border-gray-500 lg:hidden'></p>
              <div className='lg:w-60 w-1/2'>
                <div className='flex lg:justify-between h-full items-center lg:border-gray-500 lg:border rounded p-2 cursor-pointer'>
                  <p className='text-small'>Sort by: </p>
                  <DownOutlined className='px-2 lg:px-0' />
                </div>
                <div className='block'>
                  <div>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">option 1</label>
                  </div>
                  <div>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">option 2</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
            {/* <div className='bg-white'>
              <div>
                <div>
                  <input type="radio" name="" id="" />
                  <label htmlFor="">option 1</label>
                </div>
                <div>
                  <input type="radio" name="" id="" />
                  <label htmlFor="">option 2</label>
                </div>
              </div>
            </div> */}
    </aside>
   );
}
 
export default StickyNav;