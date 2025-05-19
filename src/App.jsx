import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import ElementDescription from './screens/ElementDescription';
import ElementHistory from './screens/ElementHistory';
import ElementVideo from './screens/ElementVideo';
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
            <Route path="/description" element={<ElementDescription />} />
            <Route path="/history" element={<ElementHistory />} />
            <Route path="/video" element={<ElementVideo />} />
          </Routes>
        </Router>
      </div>
      </DisableZoom>
    </div>
    </>
    
  );
}

export default App;
