import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home';
import Curso from './Curso';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/curso" element={<Curso />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
