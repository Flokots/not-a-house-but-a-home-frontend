import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import TermsAndConditions from './TermsAndConditions';
import GDPRStatement from './GDPRStatement';

const Footer = () => {
  const { t } = useTranslation('components');
  const { resolvedTheme } = useTheme();
  const location = useLocation();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  
  const isLightMode = resolvedTheme === 'light';
  const isHomePage = location.pathname === '/';
  
  // Footer colors to match your page backgrounds
  const getFooterStyles = () => {
    if (isHomePage) {
      // Homepage always has dark footer (matches hero)
      return {
        bg: 'bg-black',
        text: 'text-white',
        linkColor: 'text-gray-300 hover:text-lime-400',
        borderColor: 'border-gray-700',
        secondaryText: 'text-gray-300'
      };
    } else {
      // Other pages follow theme but match page background
      if (isLightMode) {
        return {
          bg: 'bg-slate-100', // Match AboutUs light background
          text: 'text-black',
          linkColor: 'text-gray-600 hover:text-lime-600',
          borderColor: 'border-gray-300',
          secondaryText: 'text-gray-600'
        };
      } else {
        return {
          bg: 'bg-black', // Match AboutUs dark background
          text: 'text-white',
          linkColor: 'text-gray-300 hover:text-lime-400',
          borderColor: 'border-gray-700',
          secondaryText: 'text-gray-300'
        };
      }
    }
  };

  const styles = getFooterStyles();

  return (
    <>
      <footer className={`${styles.bg} ${styles.text} py-12 transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-fjalla text-xl mb-4">
                <span className={styles.text}>{t('navbar.brand.notAHouse')}</span>
                <span className="bg-gradient-to-r from-yellow-500 to-lime-600 bg-clip-text text-transparent ml-2">
                  {t('navbar.brand.butAHome')}
                </span>
              </h3>
              <p className={`${styles.secondaryText} text-base leading-relaxed max-w-md`}>
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-lg mb-4 ${styles.text}`}>{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                <li><Link to="/" className={`text-base ${styles.linkColor} transition-colors`}>{t('footer.home')}</Link></li>
                <li><Link to="/about" className={`text-base ${styles.linkColor} transition-colors`}>{t('footer.aboutUs')}</Link></li>
                <li><Link to="/guide" className={`text-base ${styles.linkColor} transition-colors`}>{t('footer.guide')}</Link></li>
                <li><Link to="/essentials" className={`text-base ${styles.linkColor} transition-colors`}>{t('footer.essentials')}</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className={`text-lg mb-4 ${styles.text}`}>{t('footer.resources')}</h4>
              <ul className="space-y-2">
                <li><Link to="/designs" className={`text-base ${styles.linkColor} transition-colors`}>{t('footer.designs')}</Link></li>
                <li><Link to="/contribute" className={`text-base ${styles.linkColor} transition-colors`}>{t('footer.contribute')}</Link></li>
                <li><a href="#" className={`text-base ${styles.linkColor} transition-colors`}>{t('footer.community')}</a></li>
                <li><a href="mailto:support@nahbah.org" className={`text-base ${styles.linkColor} transition-colors`}>{t('footer.support')}</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`pt-8 border-t ${styles.borderColor}`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={`text-sm ${styles.secondaryText} mb-4 md:mb-0`}>
                {t('footer.copyright')}
              </p>
              <div className="flex space-x-6">
                <button 
                  onClick={() => setShowTerms(true)}
                  className={`text-sm ${styles.linkColor} transition-colors hover:underline`}
                >
                  {t('footer.terms')}
                </button>
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className={`text-sm ${styles.linkColor} transition-colors hover:underline`}
                >
                  {t('footer.privacy')}
                </button>
                <a 
                  href="mailto:contact@nahbah.org?subject=Not a House But a Home Inquiry"
                  className={`text-sm ${styles.linkColor} transition-colors hover:underline`}
                  title="Send us an email"
                >
                  {t('footer.contact')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <TermsAndConditions 
          isOpen={showTerms} 
          onClose={() => setShowTerms(false)} 
        />
      )}

      {/* Privacy Policy (GDPR) Modal */}
      {showPrivacy && (
        <GDPRStatement 
          isOpen={showPrivacy} 
          onClose={() => setShowPrivacy(false)} 
        />
      )}
    </>
  );
};

export default Footer;