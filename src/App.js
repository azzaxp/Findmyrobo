import React, { Component } from 'react';
import './App.css';
import SearchBox from './SearchBox';
import BigCard from './BigCard';
import 'tachyons';

class App extends Component {
  constructor(){
    super();
    this.state={
      yourname : ''
    }
  }

  onSearchChange = (event)=>{
    //console.log(event.target.value);
          this.setState({ yourname: event.target.value});
  }

  render() {
    return (
      <div className="tc">
      <h1> Find My Robo Image </h1>
        <SearchBox searchChange={this.onSearchChange}/>

        <BigCard yourname={this.state.yourname} />

        <p>powered by <a href="https://robohash.org">robohash.org</a></p>
      </div>    
    );
  }
}

export default App;
