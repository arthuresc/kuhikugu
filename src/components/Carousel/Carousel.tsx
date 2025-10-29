import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { useEffect, useState } from 'react';

const images = import.meta.glob('/src/assets/Images/*.jpg');

function Carousel() {
  const [imgNum, setImgNum] = useState(0);
  const imgNumLength = Object.keys(images).length;
  // TODO - Criar os tipos e os objetos que serão construidos apartir das imagens da pasta elas terão o texto a ser exibido, `alt`, link e etc para que seja configurado. E falta os bullets indicando as imagens
  // FOLLOW-ME - Terminado o visual e as funções básicas do componente
  function changeImage(value: string): void {
    if (value == '+' && imgNum == imgNumLength - 1) {
      // console.log('🤖 imgNum', imgNum, 'imgNumLength', imgNumLength, imgNum == (imgNumLength - 1))
      setImgNum(0);
    }
    if (value == '+' && imgNum < imgNumLength - 1) {
      // console.log('🤖 imgNum', imgNum, 'imgNumLength', imgNumLength, 'verificação: ', imgNum < (imgNumLength - 1))
      setImgNum(imgNum + 1);
    }
    if (value == '-' && imgNum == 0) {
      // console.log('🤖 imgNum', imgNum, 'imgNumLength', imgNumLength, 'verificação: ', imgNum < 0)
      setImgNum(imgNumLength - 1);
    }
    if (value == '-' && imgNum > 0) {
      // console.log('🤖 imgNum', imgNum, 'imgNumLength', imgNumLength, 'verificação: ', imgNum > 0)
      setImgNum(imgNum - 1);
    }
  }
  return (
    <>
      <div className="relative overflow-visible h-[30dvh] sm:h-[40dvh] md:h-[45dvh] lg:h-[50dvh]">
        <img src={Object.keys(images)[imgNum]} />
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-between">
          <button
            className="group pointer-events-auto h-full mix-blend-overlay hover:bg-black/30  active:bg-black/50 px-2 py-1"
            onClick={(): void => changeImage('+')}
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
    </>
  );
}

export default Carousel;
