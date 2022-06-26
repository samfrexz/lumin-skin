import { Link } from 'react-router-dom';
import '../App.css'

const Banner = () => {
  return ( 
      <main className="w-full mt-20">
        <div className='w-full md:hidden fixed top-20 z-50 bg-mob text-white'>
          <div className='w-navWidth mx-auto flex overflow-x-scroll h-14'>
              <ul className='flex bg-red- min-w-full items-center justify-between'>
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
        </div>
        <div className='lg:w-navWidth w-full mx-auto'>
          <div className='w-full lg:h-24 lg:flex hidden items-center'>
            <h3>Home</h3>
          </div>

          {/* main banner section */}
          <div className='banner__section w-full'>
            <div className='overlay'>
            <div className='z-50 flex flex-col items-center justify-center h-80'>
                <h1 className='text-white text-3xl'>New to Skincare?</h1>
                <p className='text-white py-2'>Unlock your personality skincare routine today.</p>
                <button className='bg-white text-gray-700 py-4 px-8 w-52 mt-12'>
                  START SHOPPING
                </button>
            </div>
            </div>
          </div>
        </div>
      </main>
   );
}
 
export default Banner;