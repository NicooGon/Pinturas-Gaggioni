import TopBar from './Components/TopBar'
import ContactPage from './Pages/ContactPage'
import ServicePage from './Pages/ServicePage'
import CarouselPage from './Pages/CarouselPage';

function App() {
  return (
    <div className='min-h-screen'>
      <TopBar />
      <div className="bg-white pt-20">
        <CarouselPage/>
        <ServicePage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;