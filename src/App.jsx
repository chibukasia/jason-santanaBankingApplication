import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/AllData";
import NavigationBar from "./components/NavBar";
import { UserDataProvider } from "./UserDataContext";

function App() {
  return (
    <UserDataProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/all-data" element={<AllData />} />
        </Routes>
      </Router>
    </UserDataProvider>
  );
}

export default App;
