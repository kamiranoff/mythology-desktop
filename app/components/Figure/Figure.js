// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import FigureInfo from './FigureInfo';

import styles from './Figure.css';

import FigureFormPage from '../../containers/FigureFormPage';

const Figure = ({ figure, editMode, handleUpdateClick }) => {
  let view = null;
  if (!editMode) {
    view = (
      <FigureInfo figure={figure} />
    );
  }

  if (editMode) {
    view = (<FigureFormPage />)
  }

  return (
    <section>
      <div className={styles.backButton}>
        <Link to="/figures">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <button
        className={styles.Figure__updateBtn}
        onClick={() => handleUpdateClick(!editMode)}
      >
        Edit Mode
      </button>
      {view}
    </section>
  )

};

export default Figure;
