import React, { Component } from 'react';
import { getState, addListen } from './store';
import { action } from './actions';
import { setName, setHeight, setWeight, setSex, addPerson, removePerson } from './store';
import { clearPerson, clearAll } from './store';

class App extends Component {
  constructor() {
    super();

    this.state = getState();
  }

  componentDidMount() {
    addListen(this._update);
    console.log(action);
    console.log(action.set);
    console.log(action.set.WEIGHT);
  }

  _update = () => this.setState(getState());

  changeName = (e) => setName(e.target.value);

  changeHeight = (e) => setHeight(e.target.value);

  changeWeight = (e) => setWeight(e.target.value);

  changeSex = (e) => setSex(e.target.dataset.sex);

  render() {
    return (
      <div>
        <div>
          <div>
            <input type="text" value={this.state.name} onChange={this.changeName} /> - Имя
          </div>
          <div>
            <input type="text" value={this.state.height} onChange={this.changeHeight} /> - Рост
          </div>
          <div>
            <input type="text" value={this.state.weight} onChange={this.changeWeight} /> - Вес
          </div>
          <div>
            <input
              type="radio"
              name="sex"
              data-sex="M"
              checked={this.state.sex === 'M'}
              onChange={this.changeSex}
            /> - М
          </div>
          <div>
            <input
              type="radio"
              name="sex"
              data-sex="F"
              checked={this.state.sex === 'F'}
              onChange={this.changeSex}
            /> - Ж
          </div>
          <div>
            <button onClick={addPerson}>Add Person</button>
            <button onClick={clearPerson}>Reset Person</button>
            <button onClick={clearAll}>Clear All</button>
          </div>
          <div>
            {this.state.person.map(
              item => (
                <div key={item.id}>
                  {item.id} |
                  {item.sex === 'M' ? 'муж' : 'жен'} |
                  {item.name} |
                  {item.height} |
                  {item.weight} |
                  <button onClick={() => removePerson(item.id)}>remove</button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
