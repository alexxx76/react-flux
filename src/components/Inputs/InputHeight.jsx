import React from 'react';
import { emit } from '../../flux/dispatcher';
import { action } from '../../flux/actions';
import { getHeight } from '../../flux/store';

import styles from './Input.module.css';

const changeHeight = e => emit(action.set.HEIGHT, e.target.value);

const InputHeight = () => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>height (cm)</div>
      <input
        className={styles.input}
        type="text"
        value={getHeight()}
        onChange={changeHeight}
      />
    </div>
  );
};

export default InputHeight;
