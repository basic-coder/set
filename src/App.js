import logo from './logo.svg';
import './App.css';
import Settings from './pages/settings/Settings';
import { Route, Routes } from 'react-router-dom';
import Stripe from './pages/stripe/Stripe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Settings />} />
        <Route path="/stripe" exact element={<Stripe />} />
      </Routes>
    </div>
  );
}

export default App;
