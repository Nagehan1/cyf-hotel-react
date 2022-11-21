import React from "react";
import moment from "moment";
function SearchResultRow(props) {
  return (
    <tr>
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
    </tr>
  );
}

export default SearchResultRow;
