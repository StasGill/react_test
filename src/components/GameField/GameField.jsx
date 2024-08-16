import "./GameField.css";
import NumberGrid from "./NumberGrid";

function GameField({ roundData }) {
  const { height, items } = roundData;
  const itemsArray = items.split(",").map(Number);

  return <NumberGrid arr={itemsArray} height={height} />;
}

export default GameField;
