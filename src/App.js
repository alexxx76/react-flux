import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      height: '',
      weight: '',
      sex: 'M',
      id: 0,
      person: []
    };

    this.changeSex = this.changeSex.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeHeight = this.changeHeight.bind(this);
    this.changeWeight = this.changeWeight.bind(this);
    this.addPerson = this.addPerson.bind(this);
  }

  changeName(e) {
    this.setState({ name: e.target.value })
  }

  changeHeight(e) {
    this.setState({ height: e.target.value })
  }

  changeWeight(e) {
    this.setState({ weight: e.target.value })
  }

  changeSex(e) {
    this.setState({ sex: e.target.dataset.sex });
  }

  addPerson() {
    this.setState({ id: this.state.id + 1 }, () => {
      const { name, height, weight, sex, id } = this.state;
      const obj = { name, height, weight, sex, id };
      const newPerson = [...this.state.person, obj];
      this.setState({ person: newPerson });
    });
  }

  removePerson(id) {
    console.log('remove', id);
    const newPerson = this.state.person.filter(item => item.id !== id);
    this.setState({person: newPerson});
  }

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
