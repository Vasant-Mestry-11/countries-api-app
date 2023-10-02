import {
  DARK_MODE,
  LIGHT_MODE,
  WHERE_IN_THE_WORLD,
} from "../../constants/global";
import "./Navbar.css";
import "../../App.css";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
  const [theme, handleTheme] = useTheme();

  const themeContent =
    theme === "dark" ? (
      <>
        <i className="bx bx-sun"></i>
        <p>{LIGHT_MODE}</p>
      </>
    ) : (
      <>
        <i className="bx bx-moon"></i>
        <p>{DARK_MODE}</p>
      </>
    );

  return (
    <nav className="navbar">
      <h1>{WHERE_IN_THE_WORLD}</h1>
      <div className="themes" onClick={handleTheme}>
        {themeContent}
      </div>
    </nav>
  );
};

export default Navbar;
