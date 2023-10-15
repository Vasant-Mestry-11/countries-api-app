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

function App() {
  const [input, setInput] = useState("");
  const [filteredRegion, setFilteredRegion] = useState("");
  const [countries] = useState(ALL_COUNTRIES);
  const [filteredData, setFilteredData] = useState([]);

  const filteration = (type, value) => {
    const temp = [...countries];
    const result = temp.filter(({ name }) =>
      name.trim().toLowerCase().includes(value.trim().toLowerCase())
    );
    return result;
  };

  // const checkCriteria = (type, value) => {
  //   switch (type) {
  //     case "search":
  //       return filteration("search", value);
  //     case "filter":
  //       return filteration("filter", value);
  //     case "both":
  //       return filteration("both");
  //     default:
  //       return;
  //   }
  // };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    const res = filteration("input", event.target.value);
    setFilteredData(res);
  };

  const handleRegionChange = (event) => {
    setFilteredRegion(event.target.value);
    filteration("filter", event.target.value);
  };

  const shouldShowFilteredValue =
    input && filteredData.length > 0
      ? filteredData
      : input && filteredData.length === 0
      ? false
      : countries;

  return (
    <div style={{ height: "100vh" }}>
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

        <div className="countries">
          {shouldShowFilteredValue
            ? shouldShowFilteredValue.map((country, idx) => {
                return <Card country={country} key={idx} />;
              })
            : "Countries not found"}
        </div>
      </Main>
    </div>
  );
}

export default App;
