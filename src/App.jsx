import { gameList } from "./dataGames";
function App() {
  const gameElements= [];
  for (let i=0; i<gameList.length; i++){
   gameElements.push(
    <div key={gameList[i].id} className="p-4 border-2 border-black mb-4 bg-white">
      <h2 className="text-xl font-bold">{gameList[i].name}</h2>
      <p className="text-gray-700">{gameList[i].genre}</p>
    </div>
   );
  }
  return (
    <div className="p-8 bg-white min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-6 border-b-2 border-black pb-2">
        Game Collections
      </h1>
      <div>
        {gameElements}
      </div>
    </div>
  );
}
export default App;