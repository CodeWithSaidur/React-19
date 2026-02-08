import { useEffect, useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './styles.css';

export default function Index() {

  const [expanes, setExpanes] = useState(() => {
    const saveData = localStorage.getItem("expanes")
    return saveData ? JSON.parse(saveData) : []
  })

  useEffect(() => {
    localStorage.setItem('expanes', JSON.stringify(expanes))
  }, [expanes])


  const addExpense = (exp) => {
    setExpanes((prev) => [...prev, exp])
  }

  const delExpense = (id) => {
    setExpanes(expanes.filter(exp => exp.id !== id))
  }

  const togol = (id) => {
    setExpanes(expanes.map((i) => (
      i.id === id ? { ...i, completed: !i.completed } : {i}
    )))
  }

  let total = expanes.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className='app-container'>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h3 className='total'>Total Expense : {total}</h3>
      <ExpenseList expanes={expanes} delExpense={delExpense} togol={togol} />
    </div>
  )
}
