import React, { useEffect, useState} from "react";
import { gql, useQuery } from '@apollo/client'
import Persons from "./Persons";
import './App.css';
import logo from './logo.svg';
import PersonForm from "./PersonForm";
import PhoneForm from "./PhoneForm";
import { usePersons } from "./persons/customHooks";
import Notify from "./Notify";



function App() {

  const { loading, error, data } = usePersons();
  const [errorMessage, setErrorMessage] = useState(null);
  
  const notifyError = (errorMessage) => {
    setErrorMessage(errorMessage);
    setTimeout(() => setErrorMessage(null),5000)
  }
  if (error) return <span style={{ color: "red" }}>Error: {error}</span>;
  return (
    <div className="App">
    <Notify errorMessage={errorMessage} />
      <header>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      {loading ? <p>Loading...</p>: (
        <>
          <p>Graphql + React</p>
          <Persons persons={data?.allPersons} notifyError={notifyError}/>
        </>  
        
      )}
      <PersonForm />
      <br />
      <PhoneForm />
    </div>
  );
}

export default App;
