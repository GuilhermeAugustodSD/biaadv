import React, { createContext, useContext, useEffect, useState } from 'react';


const MeuContexto = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt"); 
  const [content, setContent] = useState({}); 
  
  useEffect(() => {
    fetch(`/api/data`)
      .then((response) => response.json())
      .then((response) => {
        console.log("***", response[language]);
        setContent(response[language]);
      });

  }, [language]);
  
  const value = { language, setLanguage, content };

  return <MeuContexto.Provider value={value} >{children}</MeuContexto.Provider>;
};

export const useLanguage = () => useContext(MeuContexto);
