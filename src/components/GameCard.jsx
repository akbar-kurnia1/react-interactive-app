import {useState} from "react";
export default function GameCard({ game }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [rating, setRating] = useState(0);
    const handleIncrease = () => {
        if (rating < 5) {
            setRating(rating + 1);
        }
    };
    const handleDecrease = () => {
        if (rating > 0) {
            setRating(rating - 1);
        }
    }
    return (
        <div className="p-4 border-2 border-black bg-white mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold">{game.name}</h2>
            <p className="text-gray-700">{game.genre}</p>
          </div>
          <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="text-2xl cursor-pointer"
        >
          {isFavorite ? '⭐' : '☆'}
        </button>
      </div>

      <div className="border-t-2 border-black pt-4 flex items-center gap-4">
        <span className="font-semibold">Rating:</span>
        
        <button 
          onClick={handleDecrease}
          className="px-3 py-1 border-2 border-black bg-gray-200 font-bold hover:bg-gray-300 cursor-pointer"
        >
          -
        </button>
        
        <span className="text-lg font-bold w-6 text-center">{rating}</span>
        
        <button 
          onClick={handleIncrease}
          className="px-3 py-1 border-2 border-black bg-gray-200 font-bold hover:bg-gray-300 cursor-pointer"
        >
          +
        </button>

        {rating === 1 && (
          <span className="ml-auto font-bold text-red-600">
            Very Bad
          </span>
        )}
        {rating === 2 && (
          <span className="ml-auto font-bold text-yellow-600">
            Bad
          </span>
        )}
        {rating === 3 && (
          <span className="ml-auto font-bold text-lime-600">
            Not Bad
          </span>
        )}
        {rating === 4 && (
          <span className="ml-auto font-bold text-green-600">
            Good
          </span>
        )}
        {rating === 5 && (
          <span className="ml-auto font-bold text-yellow-600">
            Masterpiece! 🏆
          </span>
        )}
      </div>
    </div>
  );
}