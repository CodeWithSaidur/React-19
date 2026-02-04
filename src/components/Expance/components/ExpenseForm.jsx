import { useRef } from 'react'
import { useState } from 'react'

export default function ExpenseForm({ onAddExpense }) {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const refTitle = useRef()

    const hendelSubmit = (e) => {
        e.preventDefault();

        if (!title || !amount) return alert('Fill all Filds!')

        const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount)
        }

        onAddExpense(newExpense)
        setTitle('')
        setAmount('')
        refTitle.current.focus()

    }

    return (
        <div>
            <form className='expence-form' onSubmit={hendelSubmit}>
                <input
                    type="text"
                    placeholder='Enter Expense Tille'
                    value={title}
                    onChange={(e) => (setTitle(e.target.value))}
                    ref={refTitle}
                />
                <input
                    type="text"
                    placeholder='Enter Amount'
                    value={amount}
                    onChange={(e) => (setAmount(e.target.value))}
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}
