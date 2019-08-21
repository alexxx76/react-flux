import React from 'react';
import { emit } from '../../flux/dispatcher';
import { action } from '../../flux/actions';

import styles from './Controls.module.css';

const addPerson = () => emit(action.person.ADD);

const clearPerson = () => emit(action.clear.PERSON);

const clearAll = () => emit(action.clear.ALL);

const Controls = () => {
  return (
    <div className={styles.box}>
      <button className={styles.button} onClick={addPerson}>Add Person</button>
      <button className={styles.button} onClick={clearPerson}>Reset Person</button>
      <button className={styles.button} onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default Controls;