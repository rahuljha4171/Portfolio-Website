import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  // Function to get system theme preference
  const getSystemTheme = () => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  // Function to check if user has manually set a theme
  const getStoredTheme = () => {
    return localStorage.getItem("userThemePreference");
  };

  // Initialize theme: use stored preference if available, otherwise use system preference
  const [themename, setthemename] = useState(() => {
    const stored = getStoredTheme();
    return stored || getSystemTheme();
  });

  // Toggle theme and store preference
  const toggeltheme = () => {
    setthemename((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("userThemePreference", newTheme);
      return newTheme;
    });
  };

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      // Only update if user hasn't manually set a preference
      if (!getStoredTheme()) {
        setthemename(e.matches ? "dark" : "light");
      }
    };

    // Modern API - use addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return (
    <ThemeContext.Provider value={[{ themename, toggeltheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
