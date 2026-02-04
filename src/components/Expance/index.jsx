import { useState } from 'react';
import ExpanceForm from './components/ExpanceForm';
import ExpanceList from './components/ExpanceList';

export default function Index() {

  const [expanes, setExpanes] = useState([])

  const addExpance = (exp) => {
    setExpanes((prev) => [...prev, exp])
  }

  const delExpance = (id) => {
    alert("Del Exp")
  }

  return (
    <div className='app-container'>
      <h1>Expance Tracker</h1>
      <ExpanceForm onAddExpance={addExpance} />
      <h3 className='total'>Total Expance : {2}</h3>
      <ExpanceList expanes={expanes} delExpance={delExpance} />
    </div>
  )
}
