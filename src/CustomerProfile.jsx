import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CustomerProfile(props) {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/<${props.id}/>`)
      .then(res => res.json())
      .then(data => setCustomer(data));
  }, [props.id]);
  console.log(customer);

  return (
    <div>
      <p>Customer {props.id}Profile </p>
      <>
        {customer.vip ? (
          <div>
            <h1>Customer {props.id} Profile</h1>
            <ul>
              <li>{customer.email}</li>
              <li>{customer.phoneNumber}</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
}

export default CustomerProfile;
