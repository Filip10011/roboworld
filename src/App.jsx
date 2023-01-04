import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (searchTerm === "") {
      fetch("http://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    } else {
      setUsers(
        users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  const onInputChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <div className="App">
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <div className="Wrapper">
          {users?.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
