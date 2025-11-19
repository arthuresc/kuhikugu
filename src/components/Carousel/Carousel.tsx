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
  title?: string | boolean;
  background?: boolean;
}

const products: CardLayout[] = [...cards.products];

function Carousel({ title, elements = 4, background }: CarouselProps) {
  const [start, setStart] = useState(0);
  const [indexes, setIndexes] = useState<CardLayout[]>([
    ...products.slice(0, 4),
  ]);

  const length: number = products.length;

  function aumentar() {
    // debugger;
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
    <>
      <div className="flex flex-col h-[40dvh] justify-around my-10 lg:mx-16">
        <div className="">
          <h3 className="text-5xl lg:text-6xl font-medium text-neutral-600 text-center capitalize">
            {title}
          </h3>
        </div>
        <SwipersButtons forward={aumentar} backward={diminuir} mode="circles">
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
      </div>
    </>
  );
}

export default Carousel;
