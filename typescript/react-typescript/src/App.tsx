import { useEffect, useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import { Sub } from './types'
interface AppState{
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  useEffect(() => {
  }, [])
  const divRef = useRef<HTMLDivElement>(null)
  const handleNewSub =  (newSub: Sub): void  => {
    setSubs(subs => ([...subs, newSub]))
    setNewSubsNumber(n => n + 1)
  }
  return (
    <div className="App" ref={divRef}>
      <h1>Twitch Subs</h1>
      <List subs={subs}/>
      New Subs: {newSubsNumber}
      <Form onNewSub={handleNewSub}/>
    </div>
  )
}

export default App
