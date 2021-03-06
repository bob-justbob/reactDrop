import './App.css';
// import Banner from './banner/Banner';
// import Footer from './footer/Footer';
// import Head from './header/Head';
// import Asection from './sectionA/Asection';
// import Bsection from './sectionB/Bsection';
// import Csection from './sectionC/Csection';
// import Dsection from './sectionD/Dsection';
// import Esection from './sectionE/Esection';
// import Fsection from './sectionF/Fsection';
import { Routes, Route} from "react-router-dom"
import React from 'react';
import Linked from './linked/Linked';
import All from './All';
import About from "./about/About"
import Pricing from "./pricing/Pricing"
import Supplier from './supplier/Supplier';
import HelpCenter from './helpcenter/HelpCenter';
import Blog from './blog/Blog';



function App() {
  return (
    <div className="App">

      {/* <Head /> */}
      <Routes>
      <Route path="/"  element={<All />}/>

      <Route  path="Linked" element={<Linked />}/>
      <Route  path="About" element={<About />}/>
      <Route  path="Pricing" element={<Pricing />}/>
      <Route  path="Supplier" element={<Supplier />}/>
      <Route  path="HelpCenter" element={<HelpCenter />}/>
      <Route  path="Blog" element={<Blog />}/>
      </Routes>
    </div>
  );
}

export default App;
