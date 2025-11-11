import React from 'react';

// TODO - Criar código para colocar h-100 na imagem com width menor e o vice-versa

function Mosaic() {
  return (
    <div className="bg-blue-400 h-[50dvh] w-[100dvw] grid grid-cols-6 grid-rows-3 gap-0">
      {/* <div className="col-start-1 col-end-3 row-span-3 bg-auto bg-center">
        <div className="h-250 bg-[url(src/components/Mosaic/Feed/Images/garrafa_termica_1l.webp)]"></div>
      </div>
      <div className="col-start-3 col-end-6 row-span-2 bg-[url(src/components/Mosaic/Feed/Images/garrafa_termica_1l.webp)] bg-contain"></div> */}

        {/* <img
          className="col-start-1 col-end-3 row-start-1 object-fill"
          src="src/components/Mosaic/Feed/Images/garrafa_termica_1l.webp"
          alt=""
        /> */}
      <div className="col-start-1 col-end-3 row-start-1 row-end-3 h-full ">
        <img
          className=" object-center"
          src="src/components/Mosaic/Feed/Images/garrafa_termica_1l.webp"
          alt=""
        />
      </div>

      <div className="col-start-3 col-end-6 row-start-2 row-end-3">
        <img
          className=""
          src="src/components/Mosaic/Feed/Images/agenda_2026.webp"
          alt=""
        />
      </div>

      <div className="col-start-3 col-end-4 row-start-1 row-end-3">
        <img
          className=""
          src="src/components/Mosaic/Feed/Images/garrafa_termica_500ml.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Mosaic;
