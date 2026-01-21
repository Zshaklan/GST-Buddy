import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppContext.Provider
      value={{ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line
export const useAppContext = () => useContext(AppContext);
