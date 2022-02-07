import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();
    this.state={
      name:'Luke Bhangyi',
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(users => this.setState({monsters:users}))
  }
  render(){
    const{monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome {this.state.name}!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick ={()=>this.setState({name:'Alfred Thembo'})}> Change Name</button>
          <h1>Monsters Rolodex</h1>
        </header>
        <SearchBox placeholder='search monsters' handleChange={e => this.setState({searchField: e.target.value})}></SearchBox>
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
