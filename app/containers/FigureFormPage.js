// import React, { Component, PropTypes } from 'react';
// import DOMPurify from 'dompurify';
// import { connect } from 'react-redux';
// import SongForm from '../presentationals/SongForm/SongForm';
// import { updateSong } from '../../actions/formActions';
//
// const FIELDS = {
//   SONG_ID: 'songId',
//   TITlE: 'title',
//   WRITERS: 'writers',
//   RELEASE_DATE: 'release_date',
//   YOUTUBE_VIDEO_ID: 'youtube_video_id',
//   WORDS: 'words',
// };
//
// class SongFormContainer extends Component {
//
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//
//     this.state = {
//       song: this.songObj(props),
//       err: null,
//     };
//   }
//
//   componentWillReceiveProps(nextProps) {
//     this.state = {
//       song: this.songObj(nextProps),
//       err: null,
//     };
//   }
//
//   songObj(props) {
//     return {
//       songId: props.song._id,
//       title: props.song.title,
//       writers: props.song.writers,
//       release_date: props.song.release_date,
//       album_debut: props.song.album_debut,
//       youtube_video_id: props.song.youtube_video_id || '',
//       words: props.song.words || '',
//     };
//   }
//
//   validateForm(data) {
//     const err = {};
//     const sanitizedForm = {};
//
//     Object.keys(data).forEach((key) => {
//       let newData = data[key];
//       if (key === FIELDS.TITlE && data[key] === '') {
//         err.error = 'title field shoud not be empty';
//       }
//
//       if (key === FIELDS.WORDS) {
//         // replace line break with <br/>
//         newData = data[key].replace(/(?:\r\n|\r|\n)/g, '<br />');
//       }
//
//       sanitizedForm[key] = DOMPurify.sanitize(newData);
//     });
//
//     if (err.error) {
//       return err;
//     }
//
//     return sanitizedForm;
//   }
//
//   handleChange(event) {
//     this.state.song[event.target.name] = event.target.value;
//     this.setState({ song: this.state.song });
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//     const songData = this.state.song;
//     const result = this.validateForm(songData);
//
//     if (result.error) {
//       this.setState({ err: result.error });
//     } else {
//       this.setState({ err: null });
//       this.props.updateSong(result);
//     }
//   }
//
//   render() {
//     return (
//       <SongForm
//         handleSubmit={this.handleSubmit}
//         handleChange={this.handleChange}
//         song={this.state.song}
//         error={this.state.err}
//       />
//     );
//   }
// }
//
// SongFormContainer.propTypes = {
//   updateSong: PropTypes.func.isRequired,
//   song: PropTypes.object.isRequired,
// };
//
// const mapStateToProps = ({ songs: { song } }) => {
//   return {
//     song,
//   };
// };
//
// export default connect(mapStateToProps, { updateSong })(SongFormContainer);
