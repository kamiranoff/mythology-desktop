import React, { Component, PropTypes } from 'react';
import DOMPurify from 'dompurify';
import { connect } from 'react-redux';
import _ from 'lodash';
import FigureForm from '../components/FigureForm/FigureForm';
import { updateFigure } from '../actions/formActions';

const FIELDS = {
  FIGURE_ID: 'figureId',
  NAME: 'name',
  GREEK_NAME: 'greekName',
  ROMAN_NAME: 'romanName',
  CATEGORY: 'category',
  DESCRIPTION: 'description',
  SHORT_DESCRIPTION: 'shortDescription',
  IMMORTAL: 'immortal',
  GENDER: 'gender',
  IMAGE: {
    THUMBNAIL: 'thumbnail',
    REGULAR: 'regular',
  },
  RELATIVES: {
    FATHER: 'father',
    MOTHER: 'mother',
  },
  CHILDREN: 'children',
  BOOKS: 'books',
  EVENTS: 'events',
};

class FigureFormContainer extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      figure: this.figureObj(props),
      err: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      figure: this.figureObj(nextProps),
      err: null,
    };
  }

  figureObj(props) {
    return props.figure;
  }

  validateForm(data) {
    const err = {};
    const sanitizedForm = {};
    Object.keys(data).forEach((key) => {
      let newData = data[key];

      if (key === FIELDS.NAME && data[key] === '') {
        err.error = 'title field shoud not be empty';
      }

      if (key === FIELDS.DESCRIPTION) {
        // replace line break with <br/>
        //newData = data[key].replace(/(?:\r\n|\r|\n)/g, '<br />');
        newData = newData.replace(/\[.*?\]/g, "");
      }

      if (typeof newData === 'string') {
        sanitizedForm[key] = DOMPurify.sanitize(newData);
      }

      if (typeof newData === 'object' && !_.isEmpty(newData)) {
        for (const key of Object.keys(newData)) {
          if (typeof key === 'string' && !newData[key].length > 0) {
            delete newData[key];
          }
        }
        sanitizedForm[key] = newData;
      }

      if (
        (typeof newData === 'string' && !newData.length > 0) ||
        _.isEmpty(newData)) {
        console.log(newData, key);
        delete sanitizedForm[key];
      }
    });

    if (err.error) {
      return err;
    }

    return sanitizedForm;
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    if (name === FIELDS.IMAGE.REGULAR || name === FIELDS.IMAGE.THUMBNAIL) {
      this.state.figure.images[name] = value;
    } else if (name === FIELDS.RELATIVES.FATHER || name === FIELDS.RELATIVES.MOTHER) {
      this.state.figure.relatives[name] = value;
    } else {
      this.state.figure[name] = value;
    }
    this.setState({ figure: this.state.figure }, () => {
      console.log(this.state.figure);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const figureData = this.state.figure;
    const result = this.validateForm(figureData);

    if (result.error) {
      this.setState({ err: result.error });
    } else {
      this.setState({ err: null });
      this.props.updateFigure(result);
    }
  }

  render() {
    return (
      <FigureForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        figure={this.state.figure}
        error={this.state.err}
      />
    );
  }
}

FigureFormContainer.propTypes = {
  updateFigure: PropTypes.func.isRequired,
  figure: PropTypes.object.isRequired,
};

const mapStateToProps = ({ figures: { figure } }) => {
  return {
    figure,
  };
};

export default connect(mapStateToProps, { updateFigure })(FigureFormContainer);
