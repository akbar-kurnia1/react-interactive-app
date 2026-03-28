import { gameList } from "./dataGames";
import GameCard from "./components/GameCard";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className=" bg-white min-h-screen text-black">
      <Navbar totalGames={gameList.length} />
      <div className="px-4 md:px-8 pb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {gameList.map((gameItem) => (
          <GameCard key={gameItem.id} game={gameItem} />
        ))}
      </div>
    </div>
    </div>
  );
}
export default App;