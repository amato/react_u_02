import React,{Component} from 'react';

class App extends Component {
  render(){
    //return <h1>Hi! World!!!!</h1>

    // const greeting ="Hi";
    // const dom = <h1>{greeting}</h1>;
    // return dom;

    // return <input type="text" onClick = {()=>{console.log("I am clicked!")}} />;

    return(
      <React.Fragment>
        // <div>
          <label htmlFor="bar">bar</label>
          <input type="text" onChange={()=>{console.log("I am clicked!")}} />
        // </div>
      </React.Fragment>
    )
  }
}

export default App;
