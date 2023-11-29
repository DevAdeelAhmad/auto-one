import NavBar from './components/NavBar';
import Explore from './components/Explore';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Value from './components/Value';
import Aim from './components/sub/Aim';
import Banner1 from './components/Banner1';
import Banner2 from './components/Banner2';
import Footer from './components/Footer';
import SellerOffer from './components/SellerOffer';
import VisitorOffer from './components/VisitorOffer';
import FadeAnimation from './components/FadeAnimation'

function App() {

  const components = [NavBar, Hero, Explore, Solutions, VisitorOffer, SellerOffer, Aim, Value, Banner2, Banner1, Footer]
  return (

    <>
      {
        components.map((Component, index) => (
          <FadeAnimation>
            <main className='flex flex-col items-center'>
              <Component />
            </main>
          </FadeAnimation>
        ))
      }
    </>
  );
}

export default App;

