import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState(bookings);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  // const handleSearchInput =(e)=>{
  //   setSearchInput(e.target.value)
  //   setFiltered(bookings.filter((name)=>{
  //     return(name.firstName.toLowerCase().includes())
  //   }))
  //   }))
  // }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={filtered} data={setFiltered} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
