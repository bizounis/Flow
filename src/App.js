import './App.css';
import Features from './components/sections/Features';
import Footer from './components/sections/Footer';
import Home from './components/sections/Home';
import Podcasts from './components/sections/Podcasts';
import Pricing from './components/sections/Pricing';
import Reviews from './components/sections/Reviews';

function App() {
  return (
    <>
      <Home />
      <Features />
      <Podcasts />
      <Reviews />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
