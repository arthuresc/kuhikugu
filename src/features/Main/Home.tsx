import { MdOutlineMarkEmailRead } from "react-icons/md"; 
import { BsSend } from "react-icons/bs"; 
import { BiCart } from "react-icons/bi"; 
import { BiTargetLock } from 'react-icons/bi';
import image1 from '../../assets/Images/img2.jpg';
import Carousel from '../../components/Carousel/Carousel';
import Mosaic from '../../components/Mosaic/Mosaic';
import Slider from '../../components/Slider/Slider';

function Home() {
  return (
    <main className="overflow-hidden">
      <div className="overflow-hidden">
        <Slider />
      </div>
      <div className="h-[15dvh] flex flex-row items-center-safe justify-around flex">
        <div className=" h-[50%] w-[20%] flex items-center">
          <BiTargetLock className="text-[6dvh] text-neutral-400 w-[25%]" />
          <div className="text-neutral-500 text-2xl w-[85%]">
            Procure os presentes que a sua campanha precisa
          </div>
        </div>
        <div className=" h-[50%] w-[20%] flex items-center">
          <BiCart className="text-[6dvh] text-neutral-400 w-[25%]" />
          <div className="text-neutral-500 text-2xl w-[85%]">
            Adicione ao carrinho o que você pretende orçar
          </div>
        </div>
        <div className=" h-[50%] w-[20%] flex items-center">
          <BsSend className="text-[6dvh] text-neutral-400 w-[25%]" />
          <div className="text-neutral-500 text-2xl w-[85%]">
            Feche o seu orçamento que ele será enviado para nós
          </div>
        </div>
        <div className=" h-[50%] w-[20%] flex items-center">
          <MdOutlineMarkEmailRead className="text-[6dvh] text-neutral-400 w-[25%]" />
          <div className="text-neutral-500 text-2xl w-[85%]">
            Você irá receber o orçamento por email
          </div>
        </div>
      </div>

      <Carousel title="Novidades"/>
      <Mosaic />
    </main>
  );
}

export default Home;
