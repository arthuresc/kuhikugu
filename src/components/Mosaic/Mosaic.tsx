import React from 'react';

// TODO - Criar código para colocar h-100 na imagem com width menor e o vice-versa

function Mosaic() {
  return (
    <div className="h-[50dvh] w-[100dvw] grid grid-cols-6 grid-rows-3 gap-2 p-2">
      {/* Large hero-like image: wrapper ocultando "sobra", img maior e centralizada */}
      <div className="col-start-1 col-end-3 row-start-1 row-end-3 relative overflow-hidden">
        <div className="group">
          <div className="h-[50px] w-full bg-neutral-800 absolute bottom-0 left-0 opacity-0 group-hover:opacity-75 transition-color duration-500 ease-out text-neutral-100 z-10 px-2 py-0.5 leading-5.5">
            <div className="font-bold">Garrafa Térmica 1L</div>
            <div className="">Descrição curta genérica do produto.</div>
          </div>
          <img
            src="src/components/Mosaic/Feed/Images/garrafa_termica_1l.webp"
            alt=""
            className="
              absolute left-1/2 top-1/2
              w-[120%] h-[120%] max-w-none
              -translate-x-1/2 -translate-y-1/2
              object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-150
            "
          />
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/20" />
      </div>
      <div className="col-start-3 col-end-4 row-start-1 row-end-2 relative overflow-hidden">
        <div className="group">
          <div className="h-[50px] w-full bg-neutral-800 absolute bottom-0 left-0 opacity-0 group-hover:opacity-75 transition-color duration-500 ease-out text-neutral-100 z-10 px-2 py-0.5 leading-5.5">
            <div className="font-bold">Garrafa Térmica 500ml</div>
            <div className="">Descrição curta.</div>
          </div>
          <img
            className="absolute left-1/2 top-1/2 w-[110%] h-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-700 ease-out group-hover:scale-150"
            src="src/components/Mosaic/Feed/Images/garrafa_termica_500ml.webp"
            alt=""
          />
        </div>
      </div>
      <div className="col-start-4 col-end-6 row-start-1 row-end-3 relative overflow-hidden">
        <div className="group">
          <div className="h-[50px] w-full bg-neutral-800 absolute bottom-0 left-0 opacity-0 group-hover:opacity-75 transition-color duration-500 ease-out text-neutral-100 z-10 px-2 py-0.5">
            <div className="font-bold">Kit Canecas</div>
            <div className="">Descrição curta.</div>
          </div>
          <img
            className="absolute left-1/2 top-1/2 w-[110%] h-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-700 ease-out group-hover:scale-150"
            src="src/components/Mosaic/Feed/Images/kit_canecas.webp"
            alt=""
          />
        </div>
      </div>
      <div className="col-start-3 col-end-3 row-start-2 row-end-3 relative overflow-hidden">
        <div className="group">
          <div className="h-[50px] w-full bg-neutral-800 absolute bottom-0 left-0 opacity-0 group-hover:opacity-75 transition-color duration-500 ease-out text-neutral-100 z-10 px-2 py-0.5">
            <div className="font-bold">Garrafa Térmica 1L</div>
            <div className="">Descrição curta genérica do produto.</div>
          </div>
          <img
            className="absolute left-1/2 top-1/2 w-[110%] h-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-700 ease-out group-hover:scale-150"
            src="src/components/Mosaic/Feed/Images/agenda_2026.webp"
            alt=""
          />
        </div>
      </div>
      <div className="col-start-1 col-end-2 row-start-3 row-end-4 relative overflow-hidden">
        <div className="group">
          <div className="h-[50px] w-full bg-neutral-800 absolute bottom-0 left-0 opacity-0 group-hover:opacity-75 transition-color duration-500 ease-out text-neutral-100 z-10 px-2 py-0.5">
            <div className="font-bold">Garrafa Térmica 1L</div>
            <div className="">Descrição curta genérica do produto.</div>
          </div>
          <img
            className="absolute left-1/2 top-1/2 w-[110%] h-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-700 ease-out group-hover:scale-150"
            src="src/components/Mosaic/Feed/Images/kit_secretaria.webp"
            alt=""
          />
        </div>
      </div>
      <div className="col-start-2 col-end-5 row-start-3 row-end-4 relative overflow-hidden">
        <div className="group">
          <div className="h-[50px] w-full bg-neutral-800 absolute bottom-0 left-0 opacity-0 group-hover:opacity-75 transition-color duration-500 ease-out text-neutral-100 z-10 px-2 py-0.5">
            <div className="font-bold">Garrafa Térmica 1L</div>
            <div className="">Descrição curta genérica do produto.</div>
          </div>
          <img
            className="absolute left-1/2 top-1/2 w-[110%] h-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-700 ease-out group-hover:scale-150"
            src="src/components/Mosaic/Feed/Images/agenda_reciclavem.webp"
            alt=""
          />
        </div>
      </div>
      <div className="col-start-5 col-end-6 row-start-3 row-end-4 relative overflow-hidden">
        <div className="group">
          <div className="h-[50px] w-full bg-neutral-800 absolute bottom-0 left-0 opacity-0 group-hover:opacity-75 transition-color duration-500 ease-out text-neutral-100 z-10 px-2 py-0.5">
            <div className="font-bold">Garrafa Térmica 1L</div>
            <div className="">Descrição curta genérica do produto.</div>
          </div>
          <img
            className="absolute left-1/2 top-1/2 w-[110%] h-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-700 ease-out group-hover:scale-150"
            src="src/components/Mosaic/Feed/Images/power_bank_10000ma.webp"
            alt=""
          />
        </div>
      </div>
      <div className="col-start-6 col-end-7 row-start-2 row-end-4 relative overflow-hidden">
        <div className="group">
          <div className="h-[50px] w-full bg-neutral-800 absolute bottom-0 left-0 opacity-0 group-hover:opacity-75 transition-color duration-500 ease-out text-neutral-100 z-10 px-2 py-0.5">
            <div className="font-bold">Garrafa Térmica 1L</div>
            <div className="">Descrição curta genérica do produto.</div>
          </div>
          <img
            className="absolute left-1/2 top-1/2 w-[110%] h-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-700 ease-out group-hover:scale-150"
            src="src/components/Mosaic/Feed/Images/garrafa_termica_500ml.webp"
            alt=""
          />
        </div>
      </div>
      <div className="col-start-6 col-end-7 row-start-1 row-end-2 relative overflow-hidden">
        <div className="group">
          <div className="h-[50px] w-full bg-neutral-800 absolute bottom-0 left-0 opacity-0 group-hover:opacity-75 transition-color duration-500 ease-out text-neutral-100 z-10 px-2 py-0.5">
            <div className="font-bold">Garrafa Térmica 1L</div>
            <div className="">Descrição curta genérica do produto.</div>
          </div>
          <img
            className="absolute left-1/2 top-1/2 w-[110%] h-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-700 ease-out group-hover:scale-150"
            src="src/components/Mosaic/Feed/Images/estacao_carregamento.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Mosaic;
