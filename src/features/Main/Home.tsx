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
      
      <Carousel/>
      <Mosaic />
    </main>
  );
}

export default Home;
