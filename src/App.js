import React, { Component, useState }  from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';
class App extends Component {
  
  state = {
    selected1: null,
    selected2: null,
    selected3: null,
    selected4: null,
  };

  componentDidMount() {
    this.setState({
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
    });
  };

  componentDidUpdate(){
   
  }


  selectedState1 = (e) => {
   
    this.setState({
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
    });
  };

  selectedState2 = (e) => {
   
    this.setState({
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
    });
  };

  selectedState3 = (e) => {
   
    this.setState({
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
    });
  };

  selectedState4 = (e) => {
    
    this.setState({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT - Jivesh</header>
        <main>
          <CircleSelector
            state={this.state}
            selectedone={this.selectedState1}
            selectedtwo={this.selectedState2}
            selectedthree={this.selectedState3}
            selectedfour={this.selectedState4}
          />
          <Circles state={this.state} />
        </main>
      </div>
    );
  }
}

export default App;