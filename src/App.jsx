import './App.css';
import Navbar from './components/Navbar';
import Section2 from './components/Section2';
import SlideShow from './components/SlideShow';

const App = () => {
  return (
    <div>
      <button className="fixed z-10 bottom-2 right-2 w-11 h-11 rounded-full">
        <img
          src="./assets/wa-icon.svg"
          alt="whatsapp"
          className="w-full h-full"
        />
      </button>

      <Navbar />
      <SlideShow />
      <Section2 />
    </div>
  );
};
export default App;
