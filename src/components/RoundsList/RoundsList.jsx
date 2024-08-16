import React, { useState, useEffect } from "react";
import "./RoundsList.css";
import GameField from "../GameField/GameField";

function RoundsList() {
  const [rounds, setRounds] = useState([]);
  const [selectedRound, setSelectedRound] = useState(null);

  useEffect(() => {
    fetch("https://60f7b35b9cdca00017454f5e.mockapi.io/api/v1/rounds")
      .then((response) => response.json())
      .then((data) => setRounds(data))
      .catch((error) => console.error("Error fetching rounds:", error));
  }, []);

  const handleRoundClick = (roundId) => {
    fetch(`https://60f7b35b9cdca00017454f5e.mockapi.io/api/v1/round/${roundId}`)
      .then((response) => response.json())
      .then((data) => setSelectedRound({ id: roundId, ...data }))
      .catch((error) => console.error("Error fetching round data:", error));
  };

  return (
    <div className="rounds-list">
      <table>
        <thead>
          <tr>
            <th>Rounds</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rounds.map((round, index) => (
            <>
              <tr key={index} onClick={() => handleRoundClick(round.roundId)}>
                <td className="main-td">{round.roundId}</td>
                <td className="main-td">
                  {new Date(round.dateTime).toLocaleString()}
                </td>
                <td className="main-td"></td>
              </tr>
              <tr key={index}>
                {selectedRound && selectedRound.id === round.roundId && (
                  <>
                    <td className="secondary-td">
                      <GameField roundData={selectedRound} />
                    </td>
                    <td className="secondary-td"></td>
                    <td className="secondary-td"></td>
                  </>
                )}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoundsList;
