import Button from './Button';

export default function Four({ name, age }) {
  return (
    <div>
      <div>{name}  {age}</div>
      <Button hendeler={() => (alert('Hello Worl!'))} text='Click me' />
    </div>
  )
}
