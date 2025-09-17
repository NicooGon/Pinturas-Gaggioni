import CarouselImg from './components/carouselimg'
import TopBar from './Components/TopBar'
import ServicePage from './Pages/ServicePage'

function App() {
  return (
    <div className="App">
      <TopBar />
      <CarouselImg>
        
      </CarouselImg>
      <div >
        <ServicePage></ServicePage>
      </div>
    </div>
  )
}

export default App