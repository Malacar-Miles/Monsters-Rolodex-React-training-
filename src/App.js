import React, { useState, useEffect } from "react";
import './App.css';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  const handleChange = (event) => setSearchField(event.target.value);

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
  );
}

/* Older code that uses a class component

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField : ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = (event) => this.setState({searchField: event.target.value});

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder="search monsters" handleChange={this.handleChange} />
          <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}
*/

export default App;

