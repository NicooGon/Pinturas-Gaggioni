import CarouselImg from './components/carouselimg'
import TopBar from './Components/TopBar'
import ContactPage from './Pages/ContactPage'
import ServicePage from './Pages/ServicePage'

function App() {
  return (
    <div className='min-h-screen'>
      <TopBar />
    <div className="pt-54 md:pt-20 lg:pt-20">
        <ServicePage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
