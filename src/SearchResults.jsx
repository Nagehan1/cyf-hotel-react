import React from "react";
import Table from "react-bootstrap/Table";
import SearchResultRow from "./SearchResultRow";
import CustomerProfile from "./CustomerProfile";
import { useState } from "react";

function SearchResults(props) {
  const [customerId, setCustomerId] = useState("");
  function handleClick(e) {
    setCustomerId(e.target.value);
  }

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>first name</th>
            <th>surname</th>
            <th>email</th>
            <th>room id</th>
            <th>check in date</th>
            <th>check out date</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(inf => {
            return <SearchResultRow inf={inf} />;
          })}
        </tbody>
        <tr>
          <button onClick={props.onclick} value={props.value}>
            Show profile
          </button>
        </tr>
      </Table>
      <CustomerProfile />
    </div>
  );
}
export default SearchResults;
