// TODO - Criar carousel com base em objeto
import { useState } from 'react';
import imgBrinde from '../../assets/Images/kit-cafe.webp';
import type { CardLayout } from '../../types/Carousel';
import cards from './Feed/cards.json';
import CarouselCard from './Utils/CarouselCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface CarouselProps {
  elements?: number;
}

const products: CardLayout[] = [...cards.products];

console.log(products[0], '✏️');

// function createCards(): CardLayout[] {
//   const cards: CardLayout[] = products;

//   return cards;
// }


function Carousel({ elements }: CarouselProps) {
  const [controls, setControls] = useState({ first: 0, last: 3 });

  console.log(elements, '🐊')

  function caroulserForwards(steps: number, array: any) {
    // const object = { first: controls.first + 1, last: controls.last + 1 == array.length ? 0 : controls.last + 1 };
    const object = { first: controls.first + 1, last: controls.last + 1 == array.length ? 0 : controls.last + 1 };
    setControls({ ...object });
  }





  // HTMl
  return (
    <div className="relative overflow-visible">
      <div className="flex flex-row justify-around items-end-safe">
        {products.map((product, index) => {
          return index >= controls.first && index <= controls.last ? (
            // index <= 3 ?
            <CarouselCard
              image={product.defaultImg}
              title={product.title}
              subTitle={product.subTitle}
            />
          ) : (
            <></>
          );
        })}
      </div>

      <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-between">
        <button
          className="group pointer-events-auto h-full mix-blend-overlay hover:bg-black/30  active:bg-black/50 px-2 py-1"
          onClick={(): void => caroulserForwards()}
        >
          <IoIosArrowBack className="mx-5 text-transparent group-hover:text-gray-400 group-active:text-gray-400" />
        </button>
        <button
          className="group pointer-events-auto h-full mix-blend-overlay hover:bg-black/30  active:bg-black/50 px-2 py-1"
          onClick={(): void => changeImage('-')}
        >
          <IoIosArrowForward className="mx-5 text-transparent  group-hover:text-gray-400 group-active:text-gray-400" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
