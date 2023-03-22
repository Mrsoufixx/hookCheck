// import React, { useState } from 'react';
// import ReactModal  from 'react-modal';

// Modal.setAppElement('#root');

// function AddMovies(props) {
//   const { isOpen, onClose, onAddMovie } = props;
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [posterURL, setPosterURL] = useState('');
//   const [rating, setRating] = useState('');

//   function handleTitleChange(event) {
//     setTitle(event.target.value);
//   }

//   function handleDescriptionChange(event) {
//     setDescription(event.target.value);
//   }

//   function handlePosterURLChange(event) {
//     setPosterURL(event.target.value);
//   }

//   function handleRatingChange(event) {
//     setRating(event.target.value);
//   }

//   function handleAddMovie(event) {
//     event.preventDefault();
//     const newMovie = {
//       title: title,
//       description: description,
//       posterURL: posterURL,
//       rating: rating,
//     };
//     onAddMovie(newMovie);
//     setTitle('');
//     setDescription('');
//     setPosterURL('');
//     setRating('');
//     onClose();
//   }

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onClose}>
//       <h2>Add New Movie</h2>
//       <form onSubmit={handleAddMovie}>
//         <label>
//           Title:
//           <input type="text" value={title} onChange={handleTitleChange} required />
//         </label>
//         <label>
//           Description:
//           <textarea value={description} onChange={handleDescriptionChange} required />
//         </label>
//         <label>
//           Poster URL:
//           <input type="url" value={posterURL} onChange={handlePosterURLChange} required />
//         </label>
//         <label>
//           Rating:
//           <input type="number" min="1" max="5" value={rating} onChange={handleRatingChange} required />
//         </label>
//         <button type="submit">Add Movie</button>
//         <button type="button" onClick={onClose}>Cancel</button>
//       </form>
//     </Modal>
//   );
// }

// export default AddMovies;
