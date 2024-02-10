import { useEffect, useState } from "react";

export const toastStyleTheme = () => {
  const [toastStyleTheme, setToastStyleTheme] = useState<any>({});
  const theme = localStorage.getItem('darkmode');

  useEffect(() => {
    const lightStyle = {
      style: {
        borderRadius: '10px',
        background: '#fff',
        color: '#181B23',
        border: 0,
      }
    };
  
    const darkStyle = {
      style: {
        borderRadius: '10px',
        background: '#181B23',
        color: '#fff',
        border: 0,
      }
    };

    const newStyle = theme === 'light' ? lightStyle : darkStyle;
    setToastStyleTheme(newStyle);
  }, [theme]);

  return toastStyleTheme;
};