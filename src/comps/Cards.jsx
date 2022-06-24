import '../App.css'
import { StarFilled } from '@ant-design/icons';
const Cards = ({...item}) => {
  return ( 
    <div className="w-full bg-white rounded-xl card py-9">
      <div className='w-cardWidth mx-auto'>
        <div className='my-5'>
          <img src={item.image} alt="" className='h-auto w-32 mx-auto' />
        </div>
        <div>
          <p className='text-center text-gray-500 py-3'>{ item.price }</p>
          <h1 className='capitalize'>{ item.title } </h1>
          <p className='text-gray-400 italic'>{ item.description } </p>
        </div>
        <div className='py-2 flex items-center'>
          <StarFilled className='text-rate'/>
          <StarFilled className='text-rate'/>
          <StarFilled className='text-rate'/>
          <StarFilled className='text-rate'/>
          <StarFilled className='text-rate'/>
          <p>&nbsp; {item.review} Reviews </p>
        </div>
        <div>
          <button className='w-full p-3 bg-btnBg text-white'>
            QUICK ADD
          </button>
        </div>
      </div>
    </div>
   );
}
 
export default Cards;