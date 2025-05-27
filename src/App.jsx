import { Route, Routes } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';
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
import { useLocation } from 'react-router-dom';
import AnimatedPage from './components/AnimatedPage'; // adjust the path as needed

function App() {
  const location = useLocation();

  return (
    <>
    <div className="App-screen">
      <DisableZoom>
      <div className='ContainerRoute'>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<StartScreen />} exact={true}/>
              <Route path="/home" element={<HomeScreen />} />

              {/* Define the routes for Bulb */}
              <Route path="/history_bulb"     element={<AnimatedPage><ElementHistoryBulb /></AnimatedPage>} />
              <Route path="/description_bulb" element={<AnimatedPage><ElementDescriptionBulb /></AnimatedPage>} />
              <Route path="/video_bulb"       element={<AnimatedPage><ElementVideoBulb /></AnimatedPage>} />
              
              {/* Define the routes for Kinetoscope */}
              <Route path="/description_kinetoschope" element={<AnimatedPage><ElementDescriptionKinetoschope /></AnimatedPage>} />
              <Route path="/history_kinetoschope"     element={<AnimatedPage><ElementHistoryKinetoschope /></AnimatedPage>} />
              <Route path="/video_kinetoschope"       element={<AnimatedPage><ElementVideoKinetoschope /></AnimatedPage>} />

              {/* Define the routes for Electric Pen */}
              <Route path="/description_eletricpen" element={<AnimatedPage><ElementDescriptionEletricPen /></AnimatedPage>} />
              <Route path="/history_eletricpen"     element={<AnimatedPage><ElementHistoryEletricPen /></AnimatedPage>} />
              <Route path="/video_eletricpen"       element={<AnimatedPage><ElementVideoEletricPen /></AnimatedPage>} />

              {/* Define the routes for Phonograph */}
              <Route path="/description_phonograph" element={<AnimatedPage><ElementDescriptionPhonograph /></AnimatedPage>} />
              <Route path="/history_phonograph"     element={<AnimatedPage><ElementHistoryPhonograph /></AnimatedPage>} />
              <Route path="/video_phonograph"       element={<AnimatedPage><ElementVideoPhonograph /></AnimatedPage>} />
            </Routes>
          </AnimatePresence>
      </div>
      </DisableZoom>
    </div>
    </>
  );
}

export default App;
