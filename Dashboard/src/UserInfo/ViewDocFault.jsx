import React from "react";
import imgOne from "../../public/ranjaOne.png";
import imgTwo from "../../public/ranjyaTwo.png";
const ViewDocFault = () => {
  return (
    <div>
      <div>
        <div>
          <div
            style={{
              gap: 20,
            }}
          >
            <img
              src={imgOne}
              alt=""
              style={{
                height: 380,
                width: 550,
              }}
            />
            <img
              src={imgTwo}
              alt=""
              style={{
                height: 380,
                width: 550,
              }}
            />
          </div>
        </div>
        <div>
          <ul>
            <li
              style={{
                fontSize: 25,
                marginTop: 10,
                color: "red",
              }}
            >
              The First Name is of User is Edited
            </li>
            <li
              style={{
                color: "green",
                fontSize: 20,
              }}
            >
              Expected Name (UIDI_API_KEY) - Ranjeet{" "}
            </li>
            <li
              style={{
                color: "red",
                fontSize: 20,
              }}
            >
              Actual Name - Shravan{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewDocFault;
