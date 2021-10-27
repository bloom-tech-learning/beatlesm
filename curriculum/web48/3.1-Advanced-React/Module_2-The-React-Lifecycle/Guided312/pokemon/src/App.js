import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    console.log("App: Component Has Mounted");
    setTimeout(()=> {
      this.setState({
        ...this.state,
        pokemon: data
      });
    }, 3000);
  }

  render() {
    console.log("App: Rendering Dom");
    return (
      <div className="App">
        {(this.state.pokemon.length === 0)?<h1>Loading</h1>:<Pokemon pokemon={this.state.pokemon} />}
      </div>
    );
  }
}

export default App;
