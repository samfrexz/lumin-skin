import { Link } from "react-router-dom";
import { useState } from "react";
import Cards from "./Cards";

const BestSeller = () => {
  const [ cardItems ] = useState([
    {
      image: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png',
      price: 'NGN 25, 000.00',
      title: 'classic maintentance set',
      description: 'for skin that ages like the classics.',
      review: 1240,
      id: 1
    },
    {
      image: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png',
      price: 'NGN 31, 000.00',
      title: 'anti-fatigue essentials bundle',
      description: 'the ultimate wake up call for your face.',
      review: 1745,
      id: 2
    },
    {
      image: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png',
      price: 'NGN 16, 000.00',
      title: 'fundamental duo',
      description: 'two powerful steps to amazing skin',
      review: 1163,
      id: 3
    },
    {
      image: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png',
      price: 'NGN 6, 600.00',
      title: 'charcoal cleanser',
      description: 'a daily detox for your face',
      review: 937,
      id: 4
    },
    {
      image: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png',
      price: 'NGN 12, 000.00',
      title: 'ultra-Hydrating moisturizing',
      description: 'keep your face looking ultra-fresh, always',
      review: 226,
      id: 5
    },
    {
      image: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png',
      price: 'NGN 12, 000.00',
      title: 'dark circle defence',
      description: 'never hear, "you look tired", again',
      review: 505,
      id: 6
    },
  ])
  return ( 
    <section className="w-navWidth mx-auto bg-bestBg mt-5 py-10">
      <div className="w-1/2 text-center py-3 mx-auto h-40">
        <h2>Best Sellers</h2>
        <p>
          Our iconic skincare products are changing the game for men’s skin. Cleanse, hydrate, and feel renewed with our best-selling must-haves.
        </p>
        <Link to="#">Shop all Best Sellers products (6)</Link>
      </div>
      <div className="grid grid-cols-3 gap-x-10 w-bestWidth mx-auto gap-y-20">
        {cardItems.map((item)=> (
         <div key={item.id}>
           <Cards {...item} />
         </div>
        ))}
      </div>
    </section>
   );
}
 
export default BestSeller;