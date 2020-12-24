import React, {Component} from "react";
import axios from "axios";
import List from './List';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
    }
  }

  getPeople = () => {
    return axios.get("https://swapi.dev/api/people")
    .then((response) => {
      console.log(response.data.results);
      this.setState( {people:response.data.results} )
    })
  }

  componentDidMount(){
    this.getPeople()
  }

  render() {
    const {people} = this.state;

    return(
      <div className="App">
        <List people = {people} />
      </div>
    );
  }
}

export default App;
