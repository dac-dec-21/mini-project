import { useState } from "react";

export default function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

function Hello() {
  const [username, setUsername] = useState("rohit");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    const newusername = e.target.value;
    setUsername(newusername);
  };

  const handlePassword = (e) => {
    const newpassword = e.target.value;
    setPassword(newpassword);
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleUsername} />
      <input type="password" value={password} onChange={handlePassword} />

      <h1>
        {username} {password}
      </h1>
      <hr />
    </div>
  );
}
