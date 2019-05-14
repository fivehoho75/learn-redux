import React, { Component } from 'react';

import './App.css';
import PaletteContainer from './containers/PaletteContainer'; // **** (1) 불러오기
import CounterContainer from './containers/CounterContainer'; // **** (1) 불러오기
import WaitingListContainer from './containers/WaitingListContainer'; // **** 불러오기

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer /> {/* **** (2) 대체하기 */}
        <CounterContainer /> {/* ****(2) 대체하기 */}
        <WaitingListContainer />
      </div>
    );
  }
}

export default App;
