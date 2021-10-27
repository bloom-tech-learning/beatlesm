import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [],
        input: ""
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breed/husky/images')
            .then(resp=> {
                this.setState({
                    ...this.state,
                    dogImages: resp.data.message
                });
            })
            .catch(err=> {
                console.log(err);
            });
    }

    componentDidUpdate(prevProps, prevState) {
        //1. Did we update dogImages?
        //2. Is that update tied to Chihuahuas?
        //3. If so, make a new axios call on huskies?
        
        // console.log("State/Props Update");

        // if (prevState.dogImages !== this.state.dogImages) {
        //     console.log("DogImages Update");
        //     if (this.state.input === "chihuahua") {
        //         axios.get('https://dog.ceo/api/breed/husky/images')
        //             .then(resp=> {
        //                 this.setState({
        //                     ...this.state,
        //                     dogImages: resp.data.message
        //                 });
        //             })
        //             .catch(err=> {
        //                 console.log(err);
        //             })
        //     }
        // }

        if (this.state.input === "chihuahua") {
            this.setState({
                ...this.state,
                input: "husky"
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://dog.ceo/api/breed/${this.state.input}/images`)
            .then(resp=> {
                this.setState({
                    ...this.state,
                    dogImages: resp.data.message
                })
            })
            .catch(err=> {
                console.log(err);
            })
    }
    
    render() {
        return(<div>
            <h1>Dog Pic Finder 3.2</h1>
            <form>
                <input value={this.state.input} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Fetch Dogs</button>
            </form>
            <div>
                {
                    this.state.dogImages.map(dogImage => {
                        return(<img width="200" src={dogImage}/>);
                    })
                }
            </div>
        </div>);
    }
}

export default App;