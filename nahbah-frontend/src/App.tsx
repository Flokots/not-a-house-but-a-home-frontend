import { Routes, Route } from 'react-router-dom'; // Keep Routes, Route
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import DesignsLibrary from './pages/DesignsLibrary';
import Essentials from './pages/Essentials';
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
          <Route path="/designs" element={<DesignsLibrary />} />
          <Route path="/essentials" element={<Essentials />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;