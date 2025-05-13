import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import ElementDescription from './screens/ElementDescription';
import ElementHistory from './screens/ElementHistory';
import ElementVideo from './screens/ElementVideo';

function App() {
  return (
    <>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/description" element={<ElementDescription />} />
          <Route path="/history" element={<ElementHistory />} />
          <Route path="/video" element={<ElementVideo />} />
        </Routes>
      </Router>
    </div>
    </>
    
  );
}

export default App;
