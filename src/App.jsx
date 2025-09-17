import './App.css'
import TopBar from './Components/TopBar'
import ServicePage from './Pages/ServicePage'

function App() {
  return (
    <div className="App">
      <TopBar />

      <div >
        <ServicePage></ServicePage>
      </div>
    </div>
  )
}

export default App
