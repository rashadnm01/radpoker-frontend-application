import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Customers from "./components/Index/Customers";
import Contests from "./components/Index/Contests";
import Customer from "./components/Show/Customer";
import Contest from "./components/Show/Contest";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState({
    customers: null,
    contests: null,
    accounts: null,
  });

  useEffect(() => {
    const getCustomerData = async () => {
      const response = await fetch(
        "https://radpoker-backend.herokuapp.com/customers"
      );
      data.customers = await response.json();
      setData({ ...data });
      console.log(`Customer data: ${data.customers}`);
    };
    const getContestData = async () => {
      const response = await fetch(
        "https://radpoker-backend.herokuapp.com/contests"
      );
      data.contests = await response.json();
      setData({ ...data });
      console.log(`Contest data: ${data.contests}`);
    };
    const getAccountData = async () => {
      const response = await fetch(
        "https://radpoker-backend.herokuapp.com/accounts"
      );
      data.accounts = await response.json();
      setData({ ...data });
      console.log(`Account data: ${data.accounts}`);
      console.log(`Account data: ${data.accounts}`);
      console.log(data.accounts);
    };
    getAccountData();
    getContestData();
    getCustomerData();
  }, []);
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/customers" element={<Customers data={data} />}></Route>
          <Route path="/contests" element={<Contests data={data} />}></Route>
          <Route path="/customers/:id" element={<Customer data={data} />} />
          <Route path="/contests/:id" element={<Contest data={data} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
