import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from './Components/Login/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<><h1>Successfull</h1></>} />
      </Routes>
    </div>
  );
}

export default App;
