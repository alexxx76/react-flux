import React from 'react';
import { emit } from '../../flux/dispatcher';
import { action } from '../../flux/actions';
import { getPersons } from '../../flux/store';

import styles from './PersonsList.module.css';

const removePerson = id => emit(action.person.REMOVE, id);

const PersonsList = () => {
  return (
    <div className={styles.box}>
      {getPersons().map(
        item => (
          <div className={styles.row} key={item.id}>
            <button
              className={styles.button}
              onClick={() => removePerson(item.id)}
            >
              remove
            </button>
            <span className={styles.item}>{item.id}</span>
            <span className={styles.item}>{item.sex === 'M' ? 'male' : 'female'}</span>
            <span className={styles.item}>name : {item.name}</span>
            <span className={styles.item}>height : {item.height}</span>
            <span className={styles.item}>weight : {item.weight}</span>
          </div>
        )
      )}
    </div>
  );
};

export default PersonsList;