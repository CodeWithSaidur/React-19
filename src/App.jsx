// import { useState } from 'react'

// export default function App() {

//   const [c, setc] = useState(0)

//   let inc = () => {
//     setc(c + 1)
//     console.log('----------'); 
//   }

//   return (
//     <div>
//       <p>{c}</p>
//       <button onClick={inc}>+</button>
//     </div>
//   )
// }


import { useCallback, useState } from "react";

export default function App() {
  const [c, setC] = useState(0);

  const inc = useCallback(() => {
    setC((prev) => prev + 1);
    console.log("-----------------");
  }, []);

  return (
    <div>
      <p>{c}</p>
      <button onClick={inc}>+</button>
    </div>
  );
}