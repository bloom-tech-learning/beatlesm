import React from "react";

class AppClass extends React.Component {
  constructor () {
    console.log("AppClass: Setup State");
    super();
    this.state = {    
      name: "Warren"
    }   
  }   

  componentDidMount() {
    console.log("AppClass: Component Has Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('old props: ', prevProps);
    console.log('new props: ', this.props);

    console.log('old state: ', prevState);
    console.log('new state: ', this.state);
  }

  handleNameButtonClick = (e) => {
    console.log("AppClass: Changing State");
    this.setState({
      ...this.state,
      name: "Allison"
    });
  }
  
  render() {
    console.log("AppClass: Rendering DOM");
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
