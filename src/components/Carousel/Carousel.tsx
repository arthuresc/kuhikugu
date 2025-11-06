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
  // const [controls, setControls] = useState({ first: 0, last: 4 });
  const [ start, setStart ] = useState(0)
  const [ finish, setFinish ] = useState(elements)
  const [indexes, setIndexes] = useState<CardLayout[]>([]);

  // const range = (size = 7) =>
  //   Array.from({ length: Math.ceil(size - 1) }, (_, i) => products[i]);

  const length: number = products.length;
  let finalArray: CardLayout[] = [];

  let controls = { start: 0, finish: 4 };
  function aumentar() {
    debugger;
    setStart(start + 1)
    setFinish(finish + 1)
    finalArray = [...products.slice(start, finish)];
    console.log(finalArray, start, finish,'🛩️');
    setIndexes([...finalArray]);
    // console.log(indexes, indexes.length, '🛩️');
  }

  function diminuir() {}

  useEffect(() => {
    if (indexes.length == 0) {
      console.log(indexes, indexes.length, '✈️');
      setIndexes([...products.slice(0, 4)]);
    }
    if(finish > length) {
      console.log(finish, indexes.length, '🌹')
      setIndexes(indexes.concat(products.slice(0, finish - length)))
    }
  });
  // HTMl
  return (
    <SwipersButtons forward={aumentar} backward={diminuir}>
      <>
        {indexes.map((item, index) => {
          return (
            <CarouselCard
              key={index}
              image={item.defaultImg}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </>
    </SwipersButtons>
  );
}

export default Carousel;
