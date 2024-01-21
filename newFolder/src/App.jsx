
import Navigation from './assets/components/navigation'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footerr from './assets/components/footer'
import { Outlet } from "react-router-dom";
import BasicExample from './assets/components/nav2';


function App() {

  return (
    <>
    
        <BasicExample/>
        {/* <Video/>
        <Timeline/>
        <Sponsor/>
        <Merch/> */}
        <Outlet />
        <Footerr/>
        {/* <div id="detail">
        
      </div> */}
    </>
  )
}

export default App;
