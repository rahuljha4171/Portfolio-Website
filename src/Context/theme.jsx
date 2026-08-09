import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = useState(() => {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const colorScheme = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!colorScheme) return undefined;

    const syncTheme = (event) => {
      setthemename(event.matches ? "dark" : "light");
    };

    if (colorScheme.addEventListener) {
      colorScheme.addEventListener("change", syncTheme);
      return () => colorScheme.removeEventListener("change", syncTheme);
    }

    colorScheme.addListener(syncTheme);
    return () => colorScheme.removeListener(syncTheme);
  }, []);

  return (
    <ThemeContext.Provider value={[{ themename }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
