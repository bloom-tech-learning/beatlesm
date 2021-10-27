import React from 'react';
import Poki from './Poki';

class Pokemon extends React.Component {
  componentDidMount() {
    console.log("Pokemon: Component Mounted");
  }

  render() {
    console.log("Pokemon: Rendered DOM");
    return (
      <>
        {this.props.pokemon.map(pokemon => (
          <Poki key={pokemon.id} pokemon={pokemon}/>
        ))}
      </>
    );
  }
}

export default Pokemon;
