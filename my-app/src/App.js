import './App.css';
import Banner from './banner/Banner';
import Head from './header/Head';
import Asection from './sectionA/Asection';
import Bsection from './sectionB/Bsection';
import Csection from './sectionC/Csection';

function App() {
  return (
    <div className="App">
      <Head />
      <Banner />
      <Asection/>
      <Bsection/>
      <Csection />
      <div className="iframe">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ig3CLaRdjk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
    </div>
  );
}

export default App;
