export default function ExpenseItems({ item, onDel }) {
  return (
    <div className='Expense-item'>
      <span>{item.title}</span>
      <span>{item.amount}</span>
      <button onClick={() => { onDel(item.id) }}>❌</button>
    </div>
  )
}
