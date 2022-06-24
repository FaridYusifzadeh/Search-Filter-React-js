import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { userData } from "./data";

const App = () => {
  const [userDatas, setUserDatas] = useState(userData);
  const inputStyle = {
    padding: 10,
    width: "30%",
    fontSize: "22px",
  };
  const onSearchHandleChange = (value) => {
    const newData = userData.filter(
      (user) =>
        // user.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())  // only name search

        user.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        user.order.includes(value) // multiply search
    );
    setUserDatas(newData);
  };
  return (
    <div className="App">
      <h1>User Data</h1>
      <input
        type="search"
        placeholder="Serach...."
        style={inputStyle}
        onChange={(e) => onSearchHandleChange(e.target.value)}
      />
      {userDatas.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
};

export default App;
