import { CAPITAL, POPULATION, REGION } from "../../constants/global";
import "./Card.css";

const Card = ({ country }) => {
  const { name, flag, population, region, capital } = country;
  return (
    <section className="card" key={name}>
      <img src={flag} alt={name} className="card__img" />
      <div className="card__content">
        <h2 className="card__heading">{name}</h2>
      </div>
      <div className="card__subheading">
        <p>
          <span className="card__keys">{POPULATION}:</span>{" "}
          <span className="card__values">{population}</span>
        </p>
        <p>
          <span className="card__keys">{REGION}:</span>{" "}
          <span className="card__values">{region}</span>
        </p>
        <p>
          <span className="card__keys">{CAPITAL}:</span>{" "}
          <span className="card__values">{capital}</span>
        </p>
      </div>
    </section>
  );
};

export default Card;
