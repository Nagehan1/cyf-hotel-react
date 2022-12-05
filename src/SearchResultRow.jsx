import React, { useState } from "react";
import moment from "moment";
// import "/home/cyf/Documents/CYF/cyf-hotel-react/src/searcresultrow.css";
function SearchResultRow(props) {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <tr className={click ? "clicked" : "unclicked"} onClick={handleClick}>
      <td>{props.inf.id}</td>
      <td>{props.inf.title}</td>
      <td>{props.inf.firstName}</td>
      <td>{props.inf.surname}</td>
      <td>{props.inf.email}</td>
      <td>{props.inf.roomId}</td>
      <td>{props.inf.checkInDate}</td>
      <td>{props.inf.checkOutDate}</td>
      <td>
        {moment(props.inf.checkOutDate).diff(
          moment(props.inf.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button onClick={() => props.onClick(props.inf.id)} value={props.value}>
          Show profile
        </button>
      </td>
    </tr>
  );
}

export default SearchResultRow;
