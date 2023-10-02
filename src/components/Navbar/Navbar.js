import { useState } from "react";
import {
  DARK_MODE,
  LIGHT_MODE,
  WHERE_IN_THE_WORLD,
} from "../../constants/global";
import "./Navbar.css";
import '../../App.css'

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const themeContent = isDark ? (
    <>
      <i class="bx bx-sun"></i>
      <p>{LIGHT_MODE}</p>
    </>
  ) : (
    <>
      <i class="bx bx-moon"></i>
      <p>{DARK_MODE}</p>
    </>
  );

  const handleThemes = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <nav className="container navbar">
      <h1>{WHERE_IN_THE_WORLD}</h1>
      <div className="themes" onClick={handleThemes}>
        {themeContent}
      </div>
    </nav>
  );
};

export default Navbar;
