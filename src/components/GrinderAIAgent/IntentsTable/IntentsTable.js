import React from "react";
import "./IntentsTable.css";

function IntentsTable() {
  const tableData = [
    {
      id: 1,
      owner: "0xC185...Dee",
      plan: "Basic",
      startPeriod: "2025-01-01",
      endPeriod: "2025-12-31",
      paid: "Yes",
    },
    {
      id: 2,
      owner: "0xA12B...34C",
      plan: "Premium",
      startPeriod: "2024-07-01",
      endPeriod: "2025-06-30",
      paid: "No",
    },
    // Дополнительные записи...
  ];

  return (
    <div className="intents-table-container">
      <h2 className="table-title">Intents</h2>
      <table className="intents-table">
        <thead>
          <tr>
            <th>Intent ID</th>
            <th>Owner</th>
            <th>Plan</th>
            <th>Start Period</th>
            <th>End Period</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.owner}</td>
              <td>{row.plan}</td>
              <td>{row.startPeriod}</td>
              <td>{row.endPeriod}</td>
              <td>{row.paid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IntentsTable;