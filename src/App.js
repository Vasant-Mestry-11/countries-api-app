import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { SEARCH_PLACEHOLDER } from "./constants/global";

function App() {
  const [input, setInput] = useState();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Main>
        <div className="main-content-wrapper">
          <div className="inputs">
            <div className="input-wrapper">
              <i className="bx bx-search searcgh-icon"></i>
              <input
                className="input"
                value={input}
                onChange={handleInputChange}
                placeholder={SEARCH_PLACEHOLDER}
              />
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default App;
