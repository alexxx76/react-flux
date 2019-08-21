import React from 'react';
import { emit } from '../../flux/dispatcher';
import { action } from '../../flux/actions';
import { getSex } from '../../flux/store';

import styles from './CheckboxesSex.module.css';

const changeSex = e => emit(action.set.SEX, e.target.dataset.sex);

const CheckboxesSex = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div>
          <span>male</span>
          <input
            type="radio"
            name="sex"
            data-sex="M"
            checked={getSex() === 'M'}
            onChange={changeSex}
          />
        </div>
        <div>
          <span>female</span>
          <input
            type="radio"
            name="sex"
            data-sex="F"
            checked={getSex() === 'F'}
            onChange={changeSex}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckboxesSex;