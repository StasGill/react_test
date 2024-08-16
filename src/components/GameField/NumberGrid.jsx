import React from "react";
import "./NumberGrid.css";
import { images } from "../../images/images";

const countHeight = (rows) => {
  if (rows === 4) return 0;
  if (rows === 3) return 35;
  if (rows === 2) return 70;
  if (rows === 1) return 170;
};

const NumberGrid = ({ arr, height }) => {
  const rows = height;
  const cols = 5;

  const table = [];
  for (let i = 0; i < rows; i++) {
    table.push(arr.slice(i * cols, i * cols + cols));
  }

  const renderTable = () => {
    let skipColumns = Array(cols).fill(0);

    return table.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, colIndex) => {
          if (skipColumns[colIndex] > 0) {
            skipColumns[colIndex]--;
            return null;
          }

          let rowspan = 1;

          if (cell === 4) {
            while (
              rowIndex + rowspan < rows &&
              table[rowIndex + rowspan][colIndex] === 4
            ) {
              rowspan++;
            }
          }

          if (rowspan > 1) {
            skipColumns[colIndex] = rowspan - 1;
          }

          if (rowIndex === 0) {
            return (
              <td
                key={colIndex}
                rowSpan={rowspan}
                id={rowIndex}
                className={cell === 4 ? "grey-td" : "white-td"}
              >
                {cell === 4 ? (
                  <img
                    src={images[cell]}
                    alt="icon"
                    className="td-image"
                    style={{
                      transform: `translateY(-${countHeight(rowspan)}px)`,
                    }}
                  />
                ) : (
                  <img src={images[cell]} alt="icon" />
                )}
              </td>
            );
          } else {
            return (
              <td
                key={colIndex}
                rowSpan={rowspan}
                id={rowIndex}
                className={cell === 4 ? "grey-td" : "white-td"}
              >
                {cell === 4 ? (
                  <img
                    src={images[cell]}
                    className="td-image"
                    alt="icon"
                    style={{
                      transform: `translateY(${countHeight(rowspan)}px)`,
                    }}
                  />
                ) : (
                  <img src={images[cell]} alt="icon" />
                )}
              </td>
            );
          }
        })}
      </tr>
    ));
  };

  return (
    <table className="number-grid">
      <tbody>{renderTable()}</tbody>
    </table>
  );
};

export default NumberGrid;
