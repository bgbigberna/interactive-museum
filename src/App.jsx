import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import ElementDescriptionBulb from './screens/ElementDescriptionBulb';
import ElementDescriptionKinetoschope from './screens/ElementDescriptionKinetoschope';
import ElementDescriptionPhonograph from './screens/ElementDescriptionPhonograph';
import ElementDescriptionEletricPen from './screens/ElementDescriptionEletricPen';
import ElementHistoryBulb from './screens/ElementHistoryBulb';
import ElementHistoryKinetoschope from './screens/ElementHistoryKinetoschope';
import ElementHistoryEletricPen from './screens/ElementHistoryEletricPen';
import ElementHistoryPhonograph from './screens/ElementHistoryPhonograph';
import ElementVideoBulb from './screens/ElementVideoBulb';
import ElementVideoKinetoschope from './screens/ElementVideoKinetoschope';
import ElementVideoEletricPen from './screens/ElementVideoEletricPen';
import ElementVideoPhonograph from './screens/ElementVideoPhonograph';
import './Styles/App.css' 
import DisableZoom from './useful/DisableZoom';

function App() {
  return (
    <>
    <div className="App-screen">
      <DisableZoom>
      <div className='ContainerRoute'>
        <Router>
          <Routes>
            <Route path="/" element={<StartScreen />} exact={true}/>
            <Route path="/home" element={<HomeScreen />} />

            {/* Define the routes for Bulb */}
            <Route path="/history_bulb"     element={<ElementHistoryBulb />} />
            <Route path="/description_bulb" element={<ElementDescriptionBulb />} />
            <Route path="/video_bulb"       element={<ElementVideoBulb />} />
            
            {/* Define the routes for Kinetoscope */}
            <Route path="/description_kinetoschope" element={<ElementDescriptionKinetoschope />} />
            <Route path="/history_kinetoschope"     element={<ElementHistoryKinetoschope />} />
            <Route path="/video_kinetoschope"       element={<ElementVideoKinetoschope />} />

            {/* Define the routes for Electric Pen */}
            <Route path="/description_eletricpen" element={<ElementDescriptionEletricPen />} />
            <Route path="/history_eletricpen"     element={<ElementHistoryEletricPen />} />
            <Route path="/video_eletricpen"       element={<ElementVideoEletricPen />} />

            {/* Define the routes for Phonograph */}
            <Route path="/description_phonograph" element={<ElementDescriptionPhonograph />} />
            <Route path="/history_phonograph"     element={<ElementHistoryPhonograph />} />
            <Route path="/video_phonograph"       element={<ElementVideoPhonograph />} />
          </Routes>
        </Router>
      </div>
      </DisableZoom>
    </div>
    </>
  );
}

export default App;
