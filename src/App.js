import React, { useState } from "react";
import RoundsList from "./components/RoundsList/RoundsList";
import GameField from "./components/GameField/GameField";

function App() {
  const [selectedRoundId, setSelectedRoundId] = useState(null);

  return (
    <div className="App">
      <RoundsList onSelectRound={setSelectedRoundId} />
      {selectedRoundId && <GameField roundId={selectedRoundId} />}
    </div>
  );
}

export default App;
