import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import HeroSection from '@/pages/HeroSection';
import Navbar from '@/components/Navbar';

const HomePage: React.FC = () => {
  const [, setLoaded] = useState(false);
  const { t } = useTranslation('home');

  useEffect(() => {
    document.title = `${t('title')}`;
    setLoaded(true);
  }, [t]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* Additional sections can be added here */}
    </div>
  );
};

export default HomePage;