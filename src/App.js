import NavBar from './components/NavBar';
import Explore from './components/Explore';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Value from './components/Value';
import Aim from './components/sub/Aim';
import Banner1 from './components/Banner1';
import Banner2 from './components/Banner2';
import VisitorsOffer from './components/VisitorsOffer';
import SellerOffer from './components/SellerOffer';
import Footer from './components/Footer';

function App() {
  return (
    <main className='flex flex-col items-center'>
      <NavBar />
      <Hero />
      <Explore />
      <Solutions />
      {/* <VisitorsOffer />
      <SellerOffer /> */}
      <Aim />
      <Value />
      <Banner2 />
      <Banner1 />
      <Footer />
    </main>
  );
}

export default App;
