import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/hooks/useLanguage';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { resolvedTheme } = useTheme();
  const isLightMode = resolvedTheme === 'light';

  const languages = [
    { code: 'en', name: 'EN', fullName: 'English', flag: '🇺🇸' },
    { code: 'hu', name: 'HU', fullName: 'Magyar', flag: '🇭🇺' },
  ];

  const currentLang = languages.find(lang => currentLanguage.startsWith(lang.code)) || languages[0];

  return (
    <div className="relative group">
      <button
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
          isLightMode 
            ? 'text-black hover:bg-gray-100/50' 
            : 'text-white hover:bg-gray-800/50'
        }`}
        aria-label="Change language"
      >
        <span className="text-sm">{currentLang.flag}</span>
        <span className="text-sm font-medium font-fjalla">{currentLang.name}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <div className="absolute top-full right-0 mt-1 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                      border border-gray-200 dark:border-gray-700 opacity-0 invisible 
                      group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 
                       transition-colors first:rounded-t-lg last:rounded-b-lg ${
              currentLanguage.startsWith(lang.code)
                ? 'bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-400' 
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <div>
              <div className="text-sm font-medium font-fjalla">{lang.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{lang.fullName}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;