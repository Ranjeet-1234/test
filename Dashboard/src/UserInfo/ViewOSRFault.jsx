import React from "react";
import "./OsrFault.css";

const ViewOSRFault = () => {
  return (
    <div>
      <table
        style={{
          width: 1150,
          textAlign: "center",
        }}
        className="osrFault"
      >
        <tr>
          <th>Data Input</th>
          <th>Expected Data</th>
          <th>Actual Data</th>
        </tr>
        <tr>
          <td>Date-of-Birth</td>
          <td
            style={{
              color: "green",
            }}
          >
            2024-02-02
          </td>
          <td
            style={{
              color: "red",
            }}
          >
            2024-09-01
          </td>
        </tr>
        <tr>
          <td>Surname</td>
          <td
            style={{
              color: "green",
            }}
          >
            Jare
          </td>
          <td
            style={{
              color: "red",
            }}
          >
            Zare
          </td>
        </tr>

        <tr>
          <td>Birth-Place</td>
          <td
            style={{
              color: "green",
            }}
          >
            Sangli
          </td>
          <td
            style={{
              color: "red",
            }}
          >
            Sangola
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ViewOSRFault;
