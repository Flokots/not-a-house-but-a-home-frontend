import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  lightMode?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ lightMode = false }) => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const isDark = resolvedTheme === 'dark';

  // Use same styling approach as nav links
  const textColor = lightMode ? "text-black" : "text-white";
  const linkClass = `nav-link ${textColor}`;

  return (
    <button
      onClick={toggleTheme}
      className={`${linkClass} focus-visible:outline-2 focus-visible:outline-lime-500 focus-visible:outline-offset-2 rounded`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Clean toggle switch with proper proportions */}
      <div className={`relative w-14 h-8 rounded-full transition-all duration-300 ease-out
                      ${isDark 
                        ? 'bg-gray-700 border border-gray-600' 
                        : 'bg-gray-300 border border-gray-400'
                      }`}
           aria-hidden="true">
        
        {/* Sliding indicator with proper spacing */}
        <div className={`absolute top-1 left-0.5 w-6 h-6 rounded-full transition-all duration-300 ease-out
                        transform ${isDark ? 'translate-x-6' : 'translate-x-0'}
                        ${isDark ? 'bg-gray-900' : 'bg-white'}
                        shadow-md border border-gray-200 dark:border-gray-500`}>
          
          {/* Clear icons */}
          <div className="flex items-center justify-center w-full h-full text-sm">
            {isDark ? '🌙' : '☀️'}
          </div>
        </div>
      </div>
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;