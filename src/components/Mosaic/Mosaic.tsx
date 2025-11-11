import React from 'react'

// TODO - Criar código para colocar h-100 na imagem com width menor e o vice-versa


function Mosaic() {
  return (
    <div className='bg-blue-400 h-[30vh] grid grid-cols-6 grid-rows-3 gap-0 w-[100vw]'>
      <div className='col-start-1 col-end-3 row-span-3 bg-auto bg-center'>
        <div className="h-250 bg-[url(src/components/Mosaic/Feed/Images/garrafa_termica_1l.webp)] bg-size-[100px] bg-no-repeat bg-center"></div>
      </div>
        <div className="col-start-3 col-end-6 row-span-2 bg-[url(src/components/Mosaic/Feed/Images/garrafa_termica_1l.webp)] bg-contain"></div>
      <div className=''>
      </div>
    </div>
  )
}

export default Mosaic