import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation('components');
  const { resolvedTheme } = useTheme();
  const location = useLocation();
  
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
            <p className={`${styles.secondaryText} text-sm leading-relaxed max-w-md`}>
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-fjalla text-lg mb-4 ${styles.text}`}>{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="/" className={`text-sm ${styles.linkColor} transition-colors`}>{t('navbar.home')}</a></li>
              <li><a href="/about-us" className={`text-sm ${styles.linkColor} transition-colors`}>{t('navbar.aboutUs')}</a></li>
              <li><a href="/guide" className={`text-sm ${styles.linkColor} transition-colors`}>{t('navbar.guide')}</a></li>
              <li><a href="/essentials" className={`text-sm ${styles.linkColor} transition-colors`}>{t('navbar.essentials')}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className={`font-fjalla text-lg mb-4 ${styles.text}`}>{t('footer.resources')}</h4>
            <ul className="space-y-2">
              <li><a href="/designs" className={`text-sm ${styles.linkColor} transition-colors`}>{t('navbar.designs')}</a></li>
              <li><a href="/contribute" className={`text-sm ${styles.linkColor} transition-colors`}>{t('navbar.contribute')}</a></li>
              <li><a href="#" className={`text-sm ${styles.linkColor} transition-colors`}>{t('footer.community')}</a></li>
              <li><a href="#" className={`text-sm ${styles.linkColor} transition-colors`}>{t('footer.support')}</a></li>
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
              <a href="#" className={`text-sm ${styles.linkColor} transition-colors`}>
                {t('footer.terms')}
              </a>
              <a href="#" className={`text-sm ${styles.linkColor} transition-colors`}>
                {t('footer.privacy')}
              </a>
              <a href="#" className={`text-sm ${styles.linkColor} transition-colors`}>
                {t('footer.contact')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;