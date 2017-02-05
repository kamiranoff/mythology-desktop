// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Greek Mythology Management System</h2>
          <div>
            <p>Menu: </p>
          <Link to="/figures">Figure list</Link>
          </div>
        </div>
      </div>
    );
  }
}
