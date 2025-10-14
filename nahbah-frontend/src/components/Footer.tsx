import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation('components');
  const { resolvedTheme } = useTheme();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  // Footer is always dark on homepage, follows theme on other pages
  const footerTheme = isHomePage ? 'dark' : resolvedTheme;
  const isDarkFooter = footerTheme === 'dark';
  
  const bgColor = isDarkFooter ? 'bg-slate-950' : 'bg-gray-100';
  const textColor = isDarkFooter ? 'text-white' : 'text-gray-800';
  const linkColor = isDarkFooter ? 'text-gray-300 hover:text-lime-400' : 'text-gray-600 hover:text-lime-600';
  const borderColor = isDarkFooter ? 'border-gray-700' : 'border-gray-300';

  return (
    <footer className={`${bgColor} ${textColor} py-12 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-fjalla text-xl mb-4">
              <span className={textColor}>{t('navbar.brand.notAHouse')}</span>
              <span className="bg-gradient-to-r from-yellow-500 to-lime-600 bg-clip-text text-transparent ml-2">
                {t('navbar.brand.butAHome')}
              </span>
            </h3>
            <p className={`${isDarkFooter ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed max-w-md`}>
              Essential resources for building emergency shelter and creating sustainable housing solutions when you need them most.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-fjalla text-lg mb-4 ${textColor}`}>Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className={`text-sm ${linkColor} transition-colors`}>{t('navbar.home')}</a></li>
              <li><a href="/about-us" className={`text-sm ${linkColor} transition-colors`}>{t('navbar.aboutUs')}</a></li>
              <li><a href="/guide" className={`text-sm ${linkColor} transition-colors`}>{t('navbar.guide')}</a></li>
              <li><a href="/essentials" className={`text-sm ${linkColor} transition-colors`}>{t('navbar.essentials')}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className={`font-fjalla text-lg mb-4 ${textColor}`}>Resources</h4>
            <ul className="space-y-2">
              <li><a href="/designs" className={`text-sm ${linkColor} transition-colors`}>{t('navbar.designs')}</a></li>
              <li><a href="/contribute" className={`text-sm ${linkColor} transition-colors`}>{t('navbar.contribute')}</a></li>
              <li><a href="#" className={`text-sm ${linkColor} transition-colors`}>Community</a></li>
              <li><a href="#" className={`text-sm ${linkColor} transition-colors`}>Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`pt-8 border-t ${borderColor}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${isDarkFooter ? 'text-gray-400' : 'text-gray-500'} mb-4 md:mb-0`}>
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className={`text-sm ${linkColor} transition-colors`}>
                {t('footer.terms')}
              </a>
              <a href="#" className={`text-sm ${linkColor} transition-colors`}>
                {t('footer.privacy')}
              </a>
              <a href="#" className={`text-sm ${linkColor} transition-colors`}>
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