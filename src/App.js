import "./App.css";
import Header from "./components/Header";
import Customers from "./components/Index/Customers";
import Contests from "./components/Index/Contests";
import Customer from "./components/Show/Customer";
import Contest from "./components/Show/Contest";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState({
    customers: null,
    contests: null,
  });
  const getCustomerData = async () => {
    const response = await fetch("http://localhost:3001/customers");
    const myData = await response.json();
    console.log(data);
    setData((prevState) => ({
      ...prevState,
      customers: myData,
    }));
  };
  useEffect(() => {
    getCustomerData();
  }, []);
  const getContestData = async () => {
    const response = await fetch("http://localhost:3001/contests");
    const myData = await response.json();
    console.log(data);
    setData((prevState) => ({
      ...prevState,
      contests: myData,
    }));
  };
  useEffect(() => {
    getContestData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Customers data={data.customers} />}
        ></Route>
        <Route
          path="/customers"
          element={<Customers data={data.customers} />}
        ></Route>
        <Route
          path="/contests"
          element={<Contests data={data.contests} />}
        ></Route>
        <Route
          path="/customers/:id"
          element={<Customer data={data.customers} />}
        />
        <Route
          path="/contests/:id"
          element={<Contest data={data.contests} />}
        />
      </Routes>
    </div>
  );
}

export default App;
