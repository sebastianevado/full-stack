import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { EDIT_NUMBER } from "./persons/graphql-mutations";
import { ALL_PERSONS } from "./persons/graphql-queries";

const PhoneForm = ({ NotifyError }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const  [changeNumber, result ]= useMutation(EDIT_NUMBER);
  useEffect(() => {
    if(result.data && result.data.editNumber === null) {
      NotifyError("Person not found");
    }
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    changeNumber({ variables: { name, phone } });
    setName("");
    setPhone("");
  };
  return (
    <div>
      <h4>Edit Phone Number</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder='Name'
          onChange={(event) => setName(event.target.value)}
        />
        <input type="text" value={phone} placeholder='Phone' onChange={(event) => setPhone(event.target.value)}/>
        <button>Change Phone</button>
      </form>
    </div>
  );
}
export default PhoneForm;