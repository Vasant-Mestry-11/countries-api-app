import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { FILTER_BY_REGION, REGIONS, SEARCH_PLACEHOLDER } from "./constants/global";
import Select from "./components/Select/Select";

function App() {
  const [input, setInput] = useState("");
  const [filteredRegion, setFilteredRegion] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleRegionChange = (event) => {
    setFilteredRegion(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Main>
        <div className="main-content-wrapper">
          <div className="inputs">
            <div className="input-wrapper">
              <i className="bx bx-search search-icon"></i>
              <input
                className="input"
                value={input}
                onChange={handleInputChange}
                placeholder={SEARCH_PLACEHOLDER}
              />
            </div>
            <Select
              options={REGIONS}
              placeholder={FILTER_BY_REGION}
              selected={filteredRegion}
              onChange={handleRegionChange}
            />
          </div>
        </div>
      </Main>
    </div>
  );
}

export default App;
