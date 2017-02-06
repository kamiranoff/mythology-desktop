import React, { PropTypes } from 'react';
import styles from './FigureForm.css';

const FigureForm = ({ handleSubmit, handleChange, figure, error }) => {
  return (
    <form
      className={styles.FigureForm}
      onSubmit={(event) => handleSubmit(event)}
    >
      <h3>Edit Mode</h3>
      <label>
        <p>title</p>
        <input
          onChange={(event) => handleChange(event)}
          name="name"
          placeholder="Name"
          value={figure.name}
        />
      </label>
      <label>
        <p>Greek Name</p>
        <input
          onChange={(event) => handleChange(event)}
          name="greekName"
          placeholder="Greek Name"
          value={figure.greekName}
        />
      </label>
      <label>
        <p>Roman Name</p>
        <input
          onChange={(event) => handleChange(event)}
          name="romanName"
          placeholder="Roman Name"
          value={figure.romanName}
        />
      </label>
      <label>
        <p>Category</p>
        <input
          onChange={(event) => handleChange(event)}
          name="category"
          placeholder="Category"
          value={figure.category}
        />
      </label>
      <label>
        <p>Immortal</p>
        <input
          onChange={(event) => handleChange(event)}
          name="immortal"
          placeholder="Immortal"
          value={figure.immortal}
        />
      </label>
      <label>
        <p>Description</p>
        <textarea
          onChange={(event) => handleChange(event)}
          name="description"
          placeholder="Description"
          cols="160"
          rows="60"
          value={figure.description}
        />
      </label>
      <p>{error}</p>
      <button className={styles.FigureForm__submitBtn} type="submit">
        Submit
      </button>
    </form>
  );
}

FigureForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  figure: PropTypes.object.isRequired,
  error: PropTypes.string,
};

export default FigureForm;
