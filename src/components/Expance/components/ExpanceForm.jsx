import { useState } from 'react'

export default function ExpanceForm({ onAddExpance }) {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')

    const hendelSubmit = () => {
        e.preventDefault();

        if (!title || !amount) return alert('Fill all Filds!')

        const newExpance = {
            id: Date.now(),
            title,
            amount: parseFloat(amount)
        }

        onAddExpance(newExpance)
        setTitle('')
        setAmount('')

    }

    return (
        <div>
            <form className='expence-form' onSubmit={hendelSubmit}>
                <input
                    type="text"
                    placeholder='Enter Expance Tille'
                    value={title}
                    onChange={(e) => (setTitle(e.target.value))}
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
