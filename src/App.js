import logo from './logo.svg';
import './App.css';
import Settings from './pages/settings/Settings';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
