import PropTypes from "prop-types";
import "./Portfolio.css";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

const Cards = () => {
  const image =
    'https://jakubpolomski.com/wp-content/uploads/2023/05/Lofoten-Islands-in-Norway-Norway-landscape-130700NOR0462-1024x682.jpg"';
  const title = "Norway landscape";
  const repeatCount = 6;
  const cards = Array.from({ length: repeatCount }, (_, index) => ({
    id: index,
    image,
    title,
  }));

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} image={card.image} title={card.title} />
      ))}
    </div>
  );
};
Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Cards;
