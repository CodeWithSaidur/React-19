import ExpenseItems from './ExpenseItems'

export default function ExpenseList({ expanes, delExpense }) {
    if (expanes.length === 0) {
        return <p>No Expences</p>
    }
    return (
        <div>
            {
                expanes.map((i) => (
                    <ExpenseItems key={i.id} item={i} onDel={delExpense} />
                ))
            }
        </div>
    )
}
