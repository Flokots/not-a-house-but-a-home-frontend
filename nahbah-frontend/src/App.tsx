import { Routes, Route } from 'react-router-dom';
import '@/App.css';
import HomePage from '@/pages/HomePage';
import Designs from '@/pages/Designs';
import Materials from '@/pages/Materials';
import Submit from '@/pages/Submit';
import Layout from '@/components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/upload" element={<Submit />} />
        <Route path="/about-us" element={<div>About Us Page</div>} />
        <Route path="/learn-more" element={<div>Learn More Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;