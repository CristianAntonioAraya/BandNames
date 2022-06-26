import Navbar from "../components/Navbar"
import BandTable from "../components/BandTable"
import BandChart from "../components/BandChart"

const HomePage = () => {

  return (
    <div className="app__container">

      <Navbar/>
      
      <div className="content__container">
        <BandChart/>
      </div>

      <BandTable/>

      
    </div>
  )
}

export default HomePage