import { useEffect, useState } from "react";

export const useGetThemeMode = () => {
  const [items, setItems] = useState<string | undefined>("");
  const theme = localStorage.getItem('darkmode');

  useEffect(() => {
    if (theme) {
     setItems(items);
    };
  }, [theme]);



  return items;
};