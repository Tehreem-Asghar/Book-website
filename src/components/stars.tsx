import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import '/style/stars.css'

interface StarsProps {
  stars: number;  // Total rating value
  rating: number; // Rating count
}

const Stars: React.FC<StarsProps> = ({ stars, rating }) => {
  // Full stars
  const fullStars = Math.floor(stars);
  // Check if there's a half star
  const hasHalfStar = stars - fullStars >= 0.5;
  // Empty stars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="stars-container">
      {/* Render full stars */}
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} className="star full-star" />
      ))}

      {/* Render half star if needed */}
      {hasHalfStar && <FaStarHalfAlt className="star half-star" />}

      {/* Render empty stars */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <AiOutlineStar key={index} className="star empty-star" />
      ))}

      {/* Rating count */}
      <p className="rating-text">
        (<span className="rating-number">{rating}</span> ratings)
      </p>
    </div>
  );
};

export default Stars;
