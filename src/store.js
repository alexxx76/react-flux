import { listen, emit } from './dispatcher';
import { action } from './actions';

const listeners = [];

const state = {
  name: '',
  height: '',
  weight: '',
  sex: 'M',
  id: 0,
  person: []
};

export const getState = () => state;

export const addListen = (fn) => listeners.push(fn);

const notify = () => listeners.forEach(fn => fn());

export const setName = (value) => {
  state.name = value;
  notify();
}

export const setHeight = (value) => {
  state.height = value;
  notify();
}

export const setWeight = (value) => {
  state.weight = value;
  notify();
}

export const setSex = (value) => {
  state.sex = value;
  notify();
}

export const addPerson = () => {
  state.id = state.id + 1;
  const { name, height, weight, sex, id } = state;
  const obj = { name, height, weight, sex, id };
  state.person = [...state.person, obj];
  notify();
}

export const removePerson = (id) => {
  state.person = state.person.filter(item => item.id !== id);
  notify();
}

export const clearPerson = () => {
  state.name = '';
  state.height = '';
  state.weight = '';
  state.sex = 'M';
  notify();
}

export const clearAll = () => {
  state.name = '';
  state.height = '';
  state.weight = '';
  state.sex = 'M';
  state.person = [];
  notify();
}
