import { Routes, Route } from 'react-router-dom';
import '@/App.css';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import Designs from '@/pages/Designs';
import Essentials from '@/pages/Essentials';
import AboutUs from '@/pages/AboutUs';
import Guide from '@/pages/Guide';
import Contribute from '@/pages/Contribute';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/essentials" element={<Essentials />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contribute" element={<Contribute />} />
      </Route>
    </Routes>
  );
}

export default App;