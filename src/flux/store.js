import { listen, emit } from './dispatcher';
import { action } from './actions';

const listeners = [];

const state = {
  name: '',
  height: '',
  weight: '',
  sex: 'M',
  id: 0,
  persons: []
};

export const getState = () => state;

export const getName = () => state.name;

export const getHeight = () => state.height;

export const getWeight = () => state.weight;

export const getSex = () => state.sex;

export const getPersons = () => state.persons;

export const addListen = fn => listeners.push(fn);

const notify = () => listeners.forEach(fn => fn());

listen(action.set.NAME, name => {
  let result = name.match(/([A-Z]|[a-z]|[А-Я]|[а-я])*/);
  if (result) {
    state.name = result[0];
    notify();
  }
});

const trimLeftNil = (string) => {
  return string.replace(/^[0]*/, '');
};

listen(action.set.HEIGHT, height => {
  let result = height.match(/([0-9])*/);
  if (result && +result[0] >= 0 && +result[0] <= 250) {
    state.height = trimLeftNil(result[0]);
    notify();
  }
});

listen(action.set.WEIGHT, weight => {
  let result = weight.match(/([0-9])*/);
  if (result && +result[0] >= 0 && +result[0] <= 400) {
    state.weight = trimLeftNil(result[0]);
    notify();
  }
});

listen(action.set.SEX, sex => {
  state.sex = sex;
  notify();
});

listen(action.person.ADD, () => {
  if (state.name === '') return;
  state.id = state.id + 1;
  const { name, height, weight, sex, id } = state;
  const obj = { name, height, weight, sex, id };
  state.persons = [...state.persons, obj];
  notify();
});

listen(action.person.REMOVE, id => {
  state.persons = state.persons.filter(item => item.id !== id);
  notify();
});

const resetPersonState = () => {
  state.name = '';
  state.height = '';
  state.weight = '';
  state.sex = 'M';
};

listen(action.clear.PERSON, () => {
  resetPersonState();
  notify();
});

listen(action.clear.ALL, () => {
  resetPersonState();
  state.persons = [];
  state.id = 0;
  notify();
});
