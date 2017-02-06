import React, { Component, PropTypes } from 'react';
import DOMPurify from 'dompurify';
import { connect } from 'react-redux';
import FigureForm from '../components/FigureForm/FigureForm';
import { updateFigure } from '../actions/formActions';

const FIELDS = {
  FIGURE_ID: 'figureId',
  NAME: 'name',
  GREEK_NAME: 'greekName',
  ROMAN_NAME: 'romanName',
  CATEGORY: 'category',
  DESCRIPTION: 'description',
  IMMORTAL: 'immortal',
  GENDER: 'gender',
  IMAGE_THUMBNAIL: 'imageThumbnail',
  IMAGE_REGULAR: 'imageRegular',
  FATHER: 'father',
  MOTHER: 'mother',
  CHILDREN: 'children',
  BOOKS: 'books',
  EVENTS: 'events',
};

class FigureFormContainer extends Component {

  constructor(props) {
    super(props);
    console.log(props);
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
        newData = data[key].replace(/(?:\r\n|\r|\n)/g, '<br />');
      }

      sanitizedForm[key] = DOMPurify.sanitize(newData);
    });

    if (err.error) {
      return err;
    }

    return sanitizedForm;
  }

  handleChange(event) {
    this.state.figure[event.target.name] = event.target.value;
    this.setState({ figure: this.state.figure });
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
