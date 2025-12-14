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
      <footer 
        className={`${styles.bg} ${styles.text} py-12 transition-colors duration-500`}
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-fjalla text-xl mb-4">
                <span className={styles.text}>{t('navbar.brand.notAHouse')}</span>
                <span className="bg-gradient-to-r from-yellow-500 to-lime-600 bg-clip-text text-transparent ml-2">
                  {t('navbar.brand.butAHome')}
                </span>
              </h2>
              <p className={`${styles.secondaryText} text-base leading-relaxed max-w-md`}>
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
            <nav aria-label="Quick links">
              <h3 className={`text-lg mb-4 ${styles.text}`}>{t('footer.quickLinks')}</h3>
              <ul className="space-y-2" role="list">
                <li>
                  <Link 
                    to="/" 
                    className={`text-base ${styles.linkColor} transition-colors focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
                  >
                    {t('footer.home')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about-us" 
                    className={`text-base ${styles.linkColor} transition-colors focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
                  >
                    {t('footer.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/guide" 
                    className={`text-base ${styles.linkColor} transition-colors focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
                  >
                    {t('footer.guide')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/principles" 
                    className={`text-base ${styles.linkColor} transition-colors focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
                  >
                    {t('footer.principles')}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Resources */}
            <nav aria-label="Resources">
              <h3 className={`text-lg mb-4 ${styles.text}`}>{t('footer.resources')}</h3>
              <ul className="space-y-2" role="list">
                <li>
                  <Link 
                    to="/materials" 
                    className={`text-base ${styles.linkColor} transition-colors focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
                  >
                    {t('footer.materials')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/plans" 
                    className={`text-base ${styles.linkColor} transition-colors focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
                  >
                    {t('footer.plans')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contribute" 
                    className={`text-base ${styles.linkColor} transition-colors focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
                  >
                    {t('footer.contribute')}
                  </Link>
                </li>
                <li>
                  <a 
                    href="mailto:support@nahbah.org" 
                    className={`text-base ${styles.linkColor} transition-colors focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
                  >
                    {t('footer.support')}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Bottom Section */}
          <div className={`pt-8 border-t ${styles.borderColor}`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={`text-sm ${styles.secondaryText} mb-4 md:mb-0`}>
                {t('footer.copyright')}
              </p>
              <nav aria-label="Legal">
                <ul className="flex space-x-6" role="list">
                  <li>
                    <button 
                      onClick={() => setShowTerms(true)}
                      className={`text-sm ${styles.linkColor} transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
                    >
                      {t('footer.terms')}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setShowPrivacy(true)}
                      className={`text-sm ${styles.linkColor} transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
                    >
                      {t('footer.privacy')}
                    </button>
                  </li>
                  <li>
                    <a 
                      href="mailto:contact@nahbah.org?subject=Not a House But a Home Inquiry"
                      className={`text-sm ${styles.linkColor} transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
                      title="Send us an email"
                    >
                      {t('footer.contact')}
                    </a>
                  </li>
                </ul>
              </nav>
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