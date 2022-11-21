import React from "react";
import Table from "react-bootstrap/Table";

import SearchResultRow from "./SearchResultRow";

function SearchResults(props) {
  return (
    <div>
      <Table striped bordered hover>
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
      </Table>
    </div>
  );
}

export default SearchResults;
