import React, { Component } from 'react';
import { getState, addListen } from './store';
import { emit } from './dispatcher';
import { action } from './actions';

class App extends Component {
  constructor() {
    super();

    this.state = getState();
  }

  componentDidMount() {
    addListen(this._update);
  }

  _update = () => this.setState(getState());

  changeName = e => emit(action.set.NAME, e.target.value);

  changeHeight = e => emit(action.set.HEIGHT, e.target.value);

  changeWeight = e => emit(action.set.WEIGHT, e.target.value);

  changeSex = e => emit(action.set.SEX, e.target.dataset.sex);

  addPerson = () => emit(action.person.ADD);

  removePerson = id => emit(action.person.REMOVE, id);

  clearPerson = () => emit(action.clear.PERSON);

  clearAll = () => emit(action.clear.ALL);

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
            <button onClick={this.addPerson}>Add Person</button>
            <button onClick={this.clearPerson}>Reset Person</button>
            <button onClick={this.clearAll}>Clear All</button>
          </div>
          <div>
            {this.state.persons.map(
              item => (
                <div key={item.id}>
                  {item.id} |
                  {item.sex === 'M' ? 'муж' : 'жен'} |
                  {item.name} |
                  {item.height} |
                  {item.weight} |
                  <button onClick={() => this.removePerson(item.id)}>remove</button>
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
