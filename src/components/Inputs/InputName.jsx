import React from 'react';
import { emit } from '../../flux/dispatcher';
import { action } from '../../flux/actions';
import { getName } from '../../flux/store';

import styles from './Input.module.css';

const changeName = e => emit(action.set.NAME, e.target.value);

const InputName = () => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>name (word)</div>
      <input
        className={styles.input}
        type="text"
        value={getName()}
        onChange={changeName}
      />
    </div>
  );
};

export default InputName;
