// TODO - Criar carousel com base em objeto
// [ ] - Colocar botão de link
// [ ] - Colocar hover que troca a imagem pela segunda
import { useState } from 'react';
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
  const [start, setStart] = useState(0);
  const [indexes, setIndexes] = useState<CardLayout[]>([
    ...products.slice(0, 4),
  ]);

  const length: number = products.length;

  function aumentar() {
    debugger;
    const count = elements; // quantidade de cards visíveis
    const nextStart = (start + 1 + length) % length; // wrap para frente
    const newIndexes: CardLayout[] = Array.from(
      { length: count },
      (_, i) => products[(nextStart + i) % length],
    );

    setStart(nextStart);
    setIndexes(newIndexes);
  }
  function diminuir() {
    // debugger;
    const count = elements; // quantidade de cards visíveis
    const nextStart = (start - 1 + length) % length; // wrap para trás

    const newIndexes: CardLayout[] = Array.from(
      { length: count },
      (_, i) => products[(nextStart + i) % length],
    );

    setStart(nextStart);
    setIndexes(newIndexes);
  }
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
