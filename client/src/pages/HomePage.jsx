import Navbar from "../components/Navbar"
import BandTable from "../components/BandTable"
import AddNewBand from "../components/AddNewBand"
import BandChart from "../components/BandChart"

const HomePage = () => {

  return (
    <div className="app__container">

      <Navbar/>
      
      <div className="content__container">
        <BandChart/>
        <AddNewBand/>
      </div>

      <BandTable/>

      
    </div>
  )
}

export default HomePage