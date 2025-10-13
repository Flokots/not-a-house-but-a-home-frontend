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
      className={linkClass}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Clean toggle switch with proper proportions */}
      <div className={`relative w-14 h-8 rounded-full transition-all duration-300 ease-out
                      ${isDark 
                        ? 'bg-gray-700 border border-gray-600' 
                        : 'bg-gray-300 border border-gray-400'
                      }`}>
        
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
    </button>
  );
};

export default ThemeToggle;