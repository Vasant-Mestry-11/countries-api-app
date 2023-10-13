import "./Button.css";

const Button = ({ label, onClick, classNames, showIcon, icon }) => {
  return (
    <div>
      {showIcon && icon}
      <button className={`btn ${classNames}`}>{label}</button>
    </div>
  );
};

export default Button;
