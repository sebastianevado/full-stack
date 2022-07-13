import React, { useEffect, useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
const FIND_PERSONS = gql`
query findPersonByName($nameToSearch: String!) {
  findPerson(name: $nameToSearch) {
    name
    phone
    id
    address{
      street
      city
    }
  }
}
`

const Person = ({ persons }) => {
  const [getPerson, result] = useLazyQuery(FIND_PERSONS)
  const [person, setPerson] = useState(null)
  const showPerson = name => {
    getPerson({ variables : { nameToSearch : name } })
  }
  useEffect(() => {
    if(result.data){
      setPerson(result.data.findPerson)
    }
  },[result])
  if(person){
    return(<div>
      <h2>{person.name}</h2>
      <div>
        <p>{person.address.street}, {person.address.city}</p>
        <h5>{person.phone ? person.phone : 'No Phone'}</h5>
        <button onClick={()=> setPerson(null)}>Close</button>
      </div>
    </div>)
  }
  if(persons===null) return null;
  return (
    <div>
      <h4>Persons</h4>
      {persons.map(
        person => <div key={person.key} onClick={()=>showPerson(person.name)}>
          <p>{person.name} : {person.phone ? person.phone : 'No Phone'}</p>
        </div>
        )}
    </div>
  )
}
export default Person;