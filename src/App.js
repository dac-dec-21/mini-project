import { useState } from "react";

export default function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

function Hello() {
  let counter = 1000;
  const like = () => {
    counter++;
    console.log(counter);
  };

  // RHS ::  SPECIAL FUNCTION :: startWith, prefix useState, useEffect
  // React Hooks,
  // useState :: it works with DOM internally.
  let [counter1, setCounter1] = useState(1000);

  const like1 = () => {
    const newCounter1 = counter1 + 1;
    setCounter1(newCounter1);
  };

  return (
    <div>
      <h1>
        Counter : {counter}
        <button onClick={like}>LIKE</button>
      </h1>
      <h1>
        Counter1 : {counter1}
        <button onClick={like1}>LIKE1</button>
      </h1>
    </div>
  );
}
