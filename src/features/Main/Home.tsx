import React from 'react';
import image1 from '../../assets/Images/img2.jpg'




const images = import.meta.glob("../../assets/Images/*.jpg", {eager: true})

// const useImages = () => {
//   const loadImage = async (path: string) => {
//     const imageModule = await images
//   }
// }

console.log(Promise(images))
// images.forEach((item) => console.log(item, '👾'))

function Home() {
  return (
    <main className="bg-pink-500 overflow-hidden">
      <img
        src={image1}
        style={{ width: '100%' }}
        className="h-[30dvh] sm:h-[40dvh] md:h-[45dvh] lg:h-[50dvh]"
      />
      {/* {
        Object.keys(images).map((item) => async item )
      } */}
    </main>
  );
}

export default Home;
