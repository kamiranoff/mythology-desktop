// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Figure.css';


import FigureFormPage from '../../containers/FigureFormPage';

const Figure = ({ figure, editMode, handleUpdateClick }) => {
  let view = null;
  if (!editMode) {
    view = (
      <article className={styles.Figure}>
        <h1>
          <p className={styles.entryName}>Name</p>{figure.name}
        </h1>
        <p><span className={styles.entryName}>Greek Name</span>{figure.greekName}</p>
        <p><span className={styles.entryName}>Roman Name</span>{figure.romanName}</p>
        <p><span className={styles.entryName}>Category</span>{figure.category}</p>
        <p><span className={styles.entryName}>Description</span>{figure.description}</p>
        <p><span className={styles.entryName}>Immortal</span>{figure.immortal}</p>
        <p><span className={styles.entryName}>Gender</span>{figure.gender}</p>
        <p>
          <span className={styles.entryName}>image Thumbnail</span>
          <img width="50" src={figure.images && figure.images.thumbnail} />
        </p>
        <p>
          <span className={styles.entryName}>image regular</span>
          <img width="300" src={figure.images && figure.images.regular} />
        </p>
        <p>
          <span className={styles.entryName}>Father</span>
          {figure.relatives && figure.relatives.father}
        </p>
        <p>
          <span className={styles.entryName}>Mother</span>
          {figure.relatives && figure.relatives.mother}
        </p>
        <p>
          <span className={styles.entryName}>Spouses</span>
          {figure.relatives && figure.relatives.spouses.map(spouse => {
            return spouse;
          })}
        </p>
        <p>
          <span className={styles.entryName}>Lovers</span>
          {figure.relatives && figure.relatives.lovers.map(lover => {
            return lover;
          })}
        </p>
        <p>
          <span className={styles.entryName}>Children</span>
          {figure.relatives && figure.relatives.children.map(child => {
            return child;
          })}
        </p>
        <p>
          <span className={styles.entryName}>Books</span>
          {figure.books && figure.books.map(book => {
            return book;
          })}
        </p>
        <p>
          <span className={styles.entryName}>Events</span>
          {figure.events && figure.events.map(event => {
            return event;
          })}
        </p>
      </article>
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
