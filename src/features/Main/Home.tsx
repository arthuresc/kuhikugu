import image1 from '../../assets/Images/img2.jpg';
import Carousel from '../../components/Carousel/Carousel';
import Slider from '../../components/Slider/Slider';

function Home() {
  return (
    <main className="bg-pink-500 overflow-hidden">
      <div className="overflow-hidden">
        <Slider />
      </div>
      <Carousel elements={4}/>
    </main>
  );
}

export default Home;
