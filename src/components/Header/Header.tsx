import { RxAvatar } from 'react-icons/rx';
import TextField from '../TextField/TextField';
import { Link } from '@tanstack/react-router';

function Header() {
  return (
    <header className="w-full bg-white text-neutral-800 h-[8dvh] md:h-[8dvh] flex flex-col justify-between">
      <div className="w-full flex items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-3">
          <img
            src="src/assets/Logos/BL/BL.webp"
            alt="Nome da empresa"
            className="h-10"
          />
        </a>
        <TextField />
        <button
          aria-label="Conta do usuário"
          className="rounded-full overflow-hidden w-9 h-9"
        >
          {/* //FIXME Provisório o icone */}
          {/* <img src="/path/to/avatar.jpg" alt="Avatar do usuário" /> */}
          <RxAvatar className="text-3xl text-neutral-800" />
        </button>
      </div>
      <nav className="
      flex justify-around 
      *:h-[3rem] *:leading-[2.5rem] *:px-3.5
      [&>:hover]:bg-neutral-100 
      uppercase text-neutral-500">
        <Link className="" to="/">
          Home
        </Link>
        <Link className="" to="/produto">
          Produto
        </Link>
      </nav>
    </header>
  );
}

export default Header;
