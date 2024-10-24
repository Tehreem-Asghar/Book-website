import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

interface StarsProps {
  stars: number; // Total rating value
  rating : number
}

const Stars: React.FC<StarsProps> = ({ stars , rating }) => {
  // Full stars
  const fullStars = Math.floor(stars); // Pura number
  // Half star check
  const hasHalfStar = stars - fullStars >= 0.5; 
  // Empty stars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {/* Full stars */}
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} className="text-yellow-500 mt-2" />
      ))}
      
      {/* Half star */}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500 mt-2" />}
      
      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <AiOutlineStar key={index} className="text-yellow-500 mt-2" />
      ))}
       <p className="ml-2">  (<i className='text-cyan-600  '>{rating} ratings</i>)</p>
    </div>
  );
};

export default Stars;
