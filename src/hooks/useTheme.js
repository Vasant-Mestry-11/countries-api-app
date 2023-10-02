import { useEffect, useState } from "react";
import { switchTheme } from "../utils/themes";

const useTheme = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "");

  useEffect(() => {
    handleTheme()
  }, []);

  const handleTheme = () => {
    switchTheme();
    setTheme(localStorage.getItem("theme"));
  };

  return [theme, handleTheme];
};

export default useTheme;
