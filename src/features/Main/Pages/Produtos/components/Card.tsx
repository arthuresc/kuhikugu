import { Link } from '@tanstack/react-router';
import Button from '../../../../../components/Button/Button';

export default function Card() {
  return (
    <Link to="/produtos/1">
      <article className="flex flex-col text-center items-center-safe justify-between ease-in-out hover:scale-105 duration-100 hover:bg-neutral-100">
        <div className="min-w-[10rem] max-w-[24rem] h-fit">
          <img className='mix-blend-multiply' src="src/assets/Images/Feed/agenda_2026.webp" alt="" />
        </div>
        <div className="leading-4 my-1 align-middle h-fit">
          <h5 className="font-semibold text-lg uppercase">Titulo</h5>
          <h6 className="font-extralight">asdadasdasdasdasdasd</h6>
        </div>
        <div className="">
          <Button title="Adicionar" />
          {/* <Button title="Adicionar" /> */}
        </div>
      </article>
    </Link>
  );
}
