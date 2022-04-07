import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Navbar from "./features/home/Navabr";
import Home from './components/Home.js'
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contact';
import Faq from './components/Faq';
import JoiinUs from './components/joinUs';
import Services from './components/Service';
import 'bootstrap/dist/css/bootstrap.min.css';




//QRcScanning
import Register_Mob from './Components/Register_Mob'
import ActiveTab_Mob from './Components/ActiveTab_Mob'
import ContactOwnerVeh_Mob from './Components/ContactOwnerVeh_Mob'
import OtpVeri__Mob from './Components/OtpVeri__Mob'
import Qrcode_Mob from './Components/Qrcode_Mob'

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path= "/aboutus" component={AboutUs}  />
      <Route path='/joinus' component={JoiinUs} />
      <Route path='/services' component={Services} />
      <Route path='/faq' component={Faq} />
      <Route path='/contact' component={ContactUs} />

      <Route path="/Register_Mob" component={Register_Mob}/>
            <Route path="/ActiveTab_Mob" component={ActiveTab_Mob}/>
            <Route path="/ContactOwnerVeh_Mob" component={ContactOwnerVeh_Mob}/>
            <Route path="/OtpVeri__Mob" component={OtpVeri__Mob}/>
            <Route path="/Qrcode_Mob" component={Qrcode_Mob}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
