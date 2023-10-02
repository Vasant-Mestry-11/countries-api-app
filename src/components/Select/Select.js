import { FILTER_BY_REGION } from "../../constants/global";
import "./Select.css";

const Select = ({ options, placeholder, selected, onChange }) => {
  return (
    <select
      value={selected}
      onChange={onChange}
      placeholder={placeholder}
      className="select"
    >
      <option style={{ display: "none" }}>{FILTER_BY_REGION}</option>
      {options.map(({ id, value, label }) => (
        <option key={id} value={value} className="option">
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
