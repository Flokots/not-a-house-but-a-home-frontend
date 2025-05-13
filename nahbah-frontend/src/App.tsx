import { Routes, Route } from 'react-router-dom';
import '@/App.css';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import Designs from '@/pages/Designs';
import Materials from '@/pages/Materials';
import AboutUs from '@/pages/AboutUs';
import Guide from '@/pages/Guide';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/learn-more" />
      </Route>
    </Routes>
  );
}

export default App;