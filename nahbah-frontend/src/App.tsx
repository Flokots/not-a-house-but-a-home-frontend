import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/components/LanguageProvider';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutUs from '@/pages/AboutUs';
import Guide from '@/pages/Guide';
import Essentials from '@/pages/Essentials';
import DesignsLibrary from '@/pages/DesignsLibrary';
import Contribute from '@/pages/Contribute';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/essentials" element={<Essentials />} />
            <Route path="/designs" element={<DesignsLibrary />} />
            <Route path="/contribute" element={<Contribute />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;