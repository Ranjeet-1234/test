import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

import { Link } from "react-router-dom";

const TABLE_HEADS = [
  "Name",
  "Applied Date",
  "OCR Verification",
  "Document Accurecy",
  "Status",
  "Accept / Reject",
  "Forward",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Shravan jare",
    date: "Jun 24 , 2024",
    ocr: "Verified - (67%) ",
    docacc: "87%",
    status: "pending",
  },
  {
    id: 101,
    name: "Shivam Mathapati",
    date: "July 21 , 2024",
    ocr: "Verified - (97%) ",
    docacc: "67%",
    status: "pending",
  },
  {
    id: 102,
    name: "Sharvari Jadhav",
    date: "Jan 1 , 2024",
    ocr: "Verified - (77%) ",
    docacc: "87%",
    status: "pending",
  },
  {
    id: 103,
    name: "Manas Gedam",
    date: "May 24 , 2024",
    ocr: "Verified - (67%) ",
    docacc: "90%",
    status: "pending",
  },
  {
    id: 104,
    name: "Ranjeet Revatkar",
    date: "Jun 4 , 2024",
    ocr: "Verified - (60%) ",
    docacc: "97%",
    status: "pending",
  },
  {
    id: 105,
    name: "Vivek Patil",
    date: "Jun 1 , 2024",
    ocr: "Verified - (77%) ",
    docacc: "47%",
    status: "pending",
  },
];

const AreaTable = () => {
  return (
    <>
      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">Pending Birth Certificates</h4>
        </div>
        <div className="data-table-diagram">
          <table>
            <thead>
              <tr>
                {TABLE_HEADS?.map((th, index) => (
                  <th key={index}>{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA?.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.date}</td>
                    <td>{dataItem.ocr}</td>
                    <td>
                      {dataItem.docacc}{" "}
                      <Link
                        to="/view/birth/details"
                        style={{
                          backgroundColor: "violet",
                          padding: 5,
                          borderRadius: 10,
                        }}
                      >
                        View Details
                      </Link>
                    </td>
                    <td>
                      <div className="dt-status">
                        <span
                          className={`dt-status-dot dot-${dataItem.status}`}
                        ></span>
                        <span className="dt-status-text">
                          {dataItem.status}
                        </span>
                      </div>
                    </td>
                    <td className="dt-cell-action">
                      <div>
                        <div>
                          <input type="checkbox" />
                          Accept
                        </div>
                        <div>
                          <input type="checkbox" />
                          Reject
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "lightpink",
                          padding: 10,
                          borderRadius: 10,
                        }}
                      >
                        Send
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">Accepted Birth Certificates</h4>
        </div>
        <div className="data-table-diagram">
          <table>
            <thead>
              <tr>
                {TABLE_HEADS?.map((th, index) => (
                  <th key={index}>{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA?.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.date}</td>
                    <td>{dataItem.ocr}</td>
                    <td>
                      {dataItem.docacc}{" "}
                      <Link to="/view/birth/details">View Details</Link>{" "}
                    </td>
                    <td>
                      <div
                        className="dt-status"
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: 5,
                          padding: 5,
                          textAlign: "center",
                        }}
                      >
                        Accepted
                      </div>
                    </td>
                    <td className="dt-cell-action">
                      <div
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: 5,
                          padding: 5,
                          textAlign: "center",
                        }}
                      >
                        Accepted
                      </div>
                    </td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "lightpink",
                          padding: 10,
                          borderRadius: 10,
                        }}
                      >
                        Send
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">Rejected Birth Certificates</h4>
        </div>
        <div className="data-table-diagram">
          <table>
            <thead>
              <tr>
                {TABLE_HEADS?.map((th, index) => (
                  <th key={index}>{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA?.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.date}</td>
                    <td>{dataItem.ocr}</td>
                    <td>
                      {dataItem.docacc}{" "}
                      <Link to="/view/birth/details">View Details</Link>{" "}
                    </td>
                    <td>
                      <div
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          borderRadius: 5,
                          padding: 5,
                          textAlign: "center",
                        }}
                        className="dt-status"
                      >
                        Rejected
                      </div>
                    </td>
                    <td className="dt-cell-action">
                      <div
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          borderRadius: 5,
                          padding: 5,
                          textAlign: "center",
                        }}
                      >
                        Rejected
                      </div>
                    </td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "lightpink",
                          padding: 10,
                          borderRadius: 10,
                        }}
                      >
                        Send
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AreaTable;
