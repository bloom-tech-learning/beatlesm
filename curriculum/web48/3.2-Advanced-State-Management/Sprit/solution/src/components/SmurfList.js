import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';

import { fetchSmurfs } from './../actions';

 const SmurfList = (props)=> {
    //  console.log('props in SmurfList.js: ', props);
     //1. Connect the smurfs and loading state values to the SmurfList component.
     //3. Replace the static isLoading variable with the state loading variable.    
    const { smurfs, isLoading, error, dispatch} = props;

    useEffect(()=> {
        dispatch(fetchSmurfs());        
      }, []);

    if (error) {
        return <h1>We got an error: {error}</h1>;
      }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        {/* <Smurf smurf={testSmurf}/> */}
        {
            //2. Replace the single Smurf component instance with a map 
            // return a Smurf component for each entry in the smurfs list.
            smurfs.map(smurf=><Smurf key={smurf.id} smurf={smurf}/>)
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    };
  };
  
export default connect(mapStateToProps)(SmurfList);
