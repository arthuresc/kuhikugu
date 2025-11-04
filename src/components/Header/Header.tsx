import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { BiSearch } from 'react-icons/bi';


function Header() {
  return (
    <header className="w-full bg-white text-neutral-800 h-[8dvh] md:h-[5dvh]">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-3">
          <img
            src="src/assets/Logos/BL/BL.webp"
            alt="Nome da empresa"
            className="h-10"
          />
        </a>
        <form
          className="flex justify-center items-center border border-neutral-500 rounded-lg px-2 py-1 w-2/5 md:w-1/2 max-w-md"
          role="search"
          action=""
        >
          <input
            className="flex-1 bg-transparent outline-none"
            type="text"
            id="pesquisa"
            placeholder="Pesquisar..."
          />
          <button className="ml-2" type="submit">
            <BiSearch className='text-neutral-500' />
          </button>
        </form>
        <button
          aria-label="Conta do usuário"
          className="rounded-full overflow-hidden w-9 h-9"
        >
          {/* //FIXME Provisório o icone */}
          {/* <img src="/path/to/avatar.jpg" alt="Avatar do usuário" /> */}
          <RxAvatar className="text-3xl text-neutral-800" />
        </button>
      </div>
      <nav className="bg-lime-300 "></nav>
    </header>
  );
}

export default Header;
