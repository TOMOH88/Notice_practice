import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('hello!');
  }
  
  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count : current.count + 1 ,
    }));
  };
  mimus = () => {
    this.setState(current => ({
      count: current.count -1,
    }));
  };

  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log('i just updated');
  }

  componentWillUnmount() {
    console.log('good bye, cruel world');
  }
  render(){
    console.log("i'm rendering");
    return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.mimus}>mimus</button>
    </div>
    );
   }
}
export default App;
