import Child from './Child';

export default function Parent({ a }) {
    return (
        <div>
            <h2 style={{ color: 'magenta' }}>Parent</h2>
            <Child a={a + 'Barbhuiya'} />
        </div>
    )
}
