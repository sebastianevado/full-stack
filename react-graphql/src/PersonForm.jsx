import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_PERSON } from "./persons/graphql-mutations";
import { ALL_PERSONS } from "./persons/graphql-queries";
function PersonForm({ notifyError}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const  [createPerson ]= useMutation(CREATE_PERSON , {
    refetchQueries: [ { query: ALL_PERSONS } ],
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message);
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    createPerson({ variables: { name, street, city, phone } });
    setName("");
    setPhone("");
    setCity("");
    setStreet("");
  };
  return (
    <div>
      <h4>Create new Contact</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder='Name'
          onChange={(event) => setName(event.target.value)}
        />
        <input type="text" value={phone} placeholder='Phone' onChange={(event) => setPhone(event.target.value)}/>
        <input type="text" value={street} placeholder='Street' onChange={(event) => setStreet(event.target.value)}/>
        <input type="text" value={city} placeholder='City' onChange={(event) => setCity(event.target.value)}/>
        <button>Add Contact</button>
      </form>
    </div>
  );
}

export default PersonForm;
