import CarouselImg from './Components/CarouselImg';
import TopBar from './Components/TopBar'
import ContactPage from './Pages/ContactPage'
import ServicePage from './Pages/ServicePage'

function App() {
  return (
    <div> 
      <TopBar />
      <CarouselImg></CarouselImg>
      <div >
        <ServicePage></ServicePage>
      </div>
    </div>
  );
}


export default App