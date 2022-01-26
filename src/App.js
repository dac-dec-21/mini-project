import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Login | </Link>
      <Link to="/register">Register </Link>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

function Login() {
  return <div>Login Page</div>;
}

function Register() {
  return <div>Reigster Page</div>;
}
