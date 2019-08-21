import React from 'react';
import { emit } from '../../flux/dispatcher';
import { action } from '../../flux/actions';
import { getWeight } from '../../flux/store';

import styles from './Input.module.css';

const changeWeight = e => emit(action.set.WEIGHT, e.target.value);

const InputWeight = () => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>weight (kg)</div>
      <input
        className={styles.input}
        type="text"
        value={getWeight()}
        onChange={changeWeight}
      />
    </div>
  );
};

export default InputWeight;
