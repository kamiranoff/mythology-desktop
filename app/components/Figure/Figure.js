// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Figure.css';


import FigureFormPage from '../../containers/FigureFormPage';

const Figure = ({ figure, editMode, handleUpdateClick }) => {
  return (
    <article className={styles.Figure}>
      <h1>
        {figure.name}
        <button
          className={styles.Figure__updateBtn}
          onClick={() => handleUpdateClick(!editMode)}
        >
          Edit Mode
        </button>
      </h1>

      {!editMode ? null :
        {/*<FigureFormPage />*/}
      }
    </article>
  );
};

export default Figure;
