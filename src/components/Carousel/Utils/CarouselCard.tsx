

function CarouselCard({image, title, subTitle}) {

  console.log(typeof image)
  return (
      <div className="bg-orange-300 flex justify-center w-[22dvh] px-3 py-3 text-center leading-6 ">
        <div className="">
          <img src={image}/>
          <div className="flex flex-col py-2">
            <h3 className="text-neutral-800 font-bold">{title}</h3>
            <h4 className="text-neutral-600 font-normal line-clamp-3">
              {subTitle}
            </h4>
          </div>
        </div>
      </div>
  )
}

export default CarouselCard