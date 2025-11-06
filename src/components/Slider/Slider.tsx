import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { useEffect, useState } from 'react';
import SwipersButtons from '../SwiperButtons/SwipersButtons';

const images = import.meta.glob('/src/assets/Images/*.jpg');

function Slider() {
  const [imgNum, setImgNum] = useState(0);
  const imgNumLength = Object.keys(images).length;
  // TODO - Criar os tipos e os objetos que serão construidos apartir das imagens da pasta elas terão o texto a ser exibido, `alt`, link e etc para que seja configurado. E falta os bullets indicando as imagens
  // FOLLOW-ME - Terminado o visual e as funções básicas do componente
  function changeImageBackward(): void {
    if (imgNum == 0) {
      // console.log('🤖 imgNum', imgNum, 'imgNumLength', imgNumLength, 'verificação: ', imgNum < 0)
      setImgNum(imgNumLength - 1);
    }
    if (imgNum > 0) {
      // console.log('🤖 imgNum', imgNum, 'imgNumLength', imgNumLength, 'verificação: ', imgNum > 0)
      setImgNum(imgNum - 1);
    }
  }
  
  function changeImageForward(): void {
    if (imgNum == imgNumLength - 1) {
      // console.log('🤖 imgNum', imgNum, 'imgNumLength', imgNumLength, imgNum == (imgNumLength - 1))
      setImgNum(0);
    }
    if (imgNum < imgNumLength - 1) {
      // console.log('🤖 imgNum', imgNum, 'imgNumLength', imgNumLength, 'verificação: ', imgNum < (imgNumLength - 1))
      setImgNum(imgNum + 1);
    }
  }
  return (
    <>
      <SwipersButtons forward={changeImageForward} backward={changeImageBackward} wrapper='relative overflow-visible h-[30dvh] sm:h-[40dvh] md:h-[45dvh] lg:h-[50dvh]'>
        <img src={Object.keys(images)[imgNum]} />
      </SwipersButtons>
    </>
  );
}

export default Slider;


      // <div className="relative overflow-visible h-[30dvh] sm:h-[40dvh] md:h-[45dvh] lg:h-[50dvh]">
