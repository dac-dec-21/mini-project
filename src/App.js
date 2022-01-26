import { useState } from "react";

export default function App() {
  let [active] = useState(true);

  return (
    <div>
      <h1>Conditional Execution</h1>

      {active && <h3>Good Morning</h3>}
      {!active && <h3>Good Afternoon</h3>}

      {active ? <h3>Good Morning</h3> : <h3>Good Afternoon</h3>}
    </div>
  );
}
