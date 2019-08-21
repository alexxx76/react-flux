import React, { Component } from 'react';
import { getState, addListen } from './flux/store';
import InputName from './components/Inputs/InputName';
import InputHeight from './components/Inputs/InputHeight';
import InputWeight from './components/Inputs/InputWeight';
import CheckboxesSex from './components/CheckboxesSex/CheckboxesSex';
import Controls from './components/Controls/Controls';
import PersonsList from './components/PersonsList/PersonsList';

import styles from './App.module.css';

class App extends Component {
  constructor() {
    super();

    this.state = getState();
  }

  componentDidMount() {
    addListen(this._update);
  }

  _update = () => this.setState(getState());

  render() {
    return (
      <div className={styles.App}>
        <InputName />
        <InputHeight />
        <InputWeight />
        <div className={styles.floatClear}></div>
        <CheckboxesSex />
        <Controls />
        <PersonsList />
      </div>
    );
  }
}

export default App;
