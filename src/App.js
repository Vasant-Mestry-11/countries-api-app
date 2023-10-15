import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import {
  FILTER_BY_REGION,
  REGIONS,
  SEARCH_PLACEHOLDER,
} from "./constants/global";
import Select from "./components/Select/Select";
import { ALL_COUNTRIES } from "./constants/data";
import Card from "./components/Card/Card";
import useFilteration from "./hooks/useFilteration";

function App() {
  const [input, setInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries] = useState(ALL_COUNTRIES);

  const { filteredEntries } = useFilteration(countries, input, selectedRegion);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleInputClear = () => {
    setInput("");
  };

  return (
    <div style={{ height: "100%" }}>
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
              {input && (
                <i
                  className="bx bx-x close-icon"
                  onClick={handleInputClear}
                ></i>
              )}
            </div>
            <Select
              options={REGIONS}
              placeholder={FILTER_BY_REGION}
              selected={selectedRegion}
              onChange={handleRegionChange}
            />
          </div>
        </div>

        <div className="countries">
          {filteredEntries.length > 0
            ? filteredEntries.map((country, idx) => {
                return <Card country={country} key={idx} />;
              })
            : "Countries not found"}
        </div>
      </Main>
    </div>
  );
}

export default App;
