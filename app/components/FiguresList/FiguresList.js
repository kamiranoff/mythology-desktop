// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './FiguresList.css';

class FiguresList extends Component {

  render() {
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>

          <div>
            {this.props.figures.map((figure, i) => {
              return (
                <div key={figure.name + i} className={styles.figureContainer}>
                  <div>
                    <p className={styles.figureLinkContainer}>
                      <Link
                        className={styles.figureLink}
                        to={`/figures/${figure._id}`}
                      >
                        {figure.name}</Link>
                      <span className={styles.figureLabel}>{figure.category}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    );
  }
}

export default FiguresList;
