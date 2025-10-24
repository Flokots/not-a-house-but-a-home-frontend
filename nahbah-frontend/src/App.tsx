import { Routes, Route } from 'react-router-dom'; // Keep Routes, Route
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Plans from './pages/Plans';
import Principles from './pages/Principles';
import Materials from './pages/Materials';
import Guide from './pages/Guide';
import Contribute from './pages/Contribute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;