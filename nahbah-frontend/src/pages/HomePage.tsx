import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '@/pages/HeroSection';
import Navbar from '@/components/Navbar';

const HomePage: React.FC = () => {
  const { t } = useTranslation('common');

  useEffect(() => {
    document.title = `${t('title')} - Not A House But A Home`;
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