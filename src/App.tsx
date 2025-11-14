import './style/App.css';
import image1 from './assets/Images/img2.jpg';
import Home from './features/Main/Home';
import Header from './components/Header/Header';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <Header />
        <Home />
        {/* resolver o sidebar depois */}
        <footer className="bg-neutral-900 h-[40dvh]">Footer</footer>
      </div>
    </>
  );
}

export default App;
