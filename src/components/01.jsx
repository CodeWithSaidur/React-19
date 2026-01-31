export default function One() {

  let age = 25

  function name() {
    return 'sabed'
  }

  let hendelClick = () => {
    alert('sabed')
  }

  return (
    <div>
      <h1>Hi {name()} age {age}</h1>
      <button onClick={hendelClick}>click</button>
      <button onClick={hendelClick}>click</button>
      <button onClick={hendelClick}>click</button>
    </div>
  )
}
