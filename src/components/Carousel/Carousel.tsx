// TODO - Criar carousel com base em objeto
import { useEffect, useState } from 'react';
// import imgBrinde from '../../assets/Images/kit-cafe.webp';
import type { CardLayout } from '../../types/Carousel';
import cards from './Feed/cards.json';
import CarouselCard from './Utils/CarouselCard';
import SwipersButtons from '../SwiperButtons/SwipersButtons';

interface CarouselProps {
  elements?: number;
}

const products: CardLayout[] = [...cards.products];

function Carousel({ elements = 4 }: CarouselProps) {
  const [controls, setControls] = useState({ first: 3, last: elements });
  const [indexes, setIndexes] = useState([]);

  const range = (size = 4, steps = 1) =>
    Array.from({ length: Math.ceil(size - steps) }, (_, i) => steps + i);

  console.log(range(elements), '🐊');

  range();

  function aumentar() {
    // setControls({ first: controls.first + 1, last: controls.last + 1 });
    // setIndexes(range(elements));
    console.log('aumentou')
  }
  function diminuir() {
    // setControls({ first: controls.first - 1, last: controls.last - 1 });
    // setIndexes(range(elements));
    console.log('diminuiu')
  }

  // useEffect(() => {
  //   // console.log(range(controls.first, controls.last), '🫠');
  // });
  // HTMl
  return (
    <SwipersButtons forward={aumentar} backward={diminuir}>
      <>
        {range(elements).map((item, index) => {
          return (
            <CarouselCard
              key={item}
              image={products[item].defaultImg}
              title={products[item].title}
              subTitle={products[item].subTitle}
            />
          );
        })}
      </>
    </SwipersButtons>
  );
}

export default Carousel;
