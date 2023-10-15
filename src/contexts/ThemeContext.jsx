import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme());

  //store current theme to local storage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  //check for an existing theme
  //if no existing theme, set theme to light
  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  //change theme value
  function switchTheme() {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }
  return (
    <ThemeContext.Provider
      value={{
        switchTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error('Cannot use Theme Context outside Theme Provider');
  return context;
};

export { ThemeProvider, useTheme };
