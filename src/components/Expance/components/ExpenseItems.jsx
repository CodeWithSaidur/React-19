export default function ExpenseItems({ item, onDel, togol }) {
  return (
    <div className='Expense-item'>
      <span style={{
        textDecoration: item.completed ? 'line-through' : 'none'
      }}>{item.title}</span>
      <span>{item.amount}</span>
      <button onClick={() => { onDel(item.id) }}>❌</button>
      <input type="checkbox" checked={item.completed || false}
        onChange={() => { togol(item.id) }} />
    </div>
  )
}
