// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from '../../axiosConfig';
// import { toast } from 'react-toastify';

// const UpdateBook = () => {
//     const { id } = useParams(); // get the book ID from the URL
//     const navigate = useNavigate();

//     const [title, setTitle] = useState('');
//     const [author, setAuthor] = useState('');
//     const [description, setDescription] = useState('');
//     const [publicationDate, setPublicationDate] = useState('');
//     const [coverImage, setCoverImage] = useState('');

//     useEffect(() => {
//         // fetch the book's current details using its ID
//         const fetchBookDetails = async () => {
//             try {
//                 const response = await axios.get(`/books/${id}`);
//                 const { title, author, description, publicationDate, coverImage } = response.data;
//                 setTitle(title);
//                 setAuthor(author);
//                 setDescription(description);
//                 setPublicationDate(publicationDate);
//                 setCoverImage(coverImage);
//             } catch (err) {
//                 // toast.error('Failed to fetch book details.')
//                 console.log('Failed to fetch book details');
//             }
//         };

//         fetchBookDetails();
//     }, [id]);

//     const HandleUpdate = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.put(`/books/${id}`, {
//                 title,
//                 author,
//                 description,
//                 publicationDate,
//                 coverImage
//             });
//             toast.success('Book updated successfully!');
//             navigate('/booklist'); // redirect to booklist
//         } catch (err) {
//             toast.error('Failed to update book.');
//         }
//     };

//     return (
//         <div>
//             <h2>Update Book</h2>
//             <form onSubmit={HandleUpdate}>
//                 <div>
//                     <label>Title:</label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Author:</label>
//                     <input
//                         type="text"
//                         value={author}
//                         onChange={(e) => setAuthor(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Publication Date:</label>
//                     <input
//                         type="date"
//                         value={publicationDate}
//                         onChange={(e) => setPublicationDate(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Cover Image URL:</label>
//                     <input
//                         type="text"
//                         value={coverImage}
//                         onChange={(e) => setCoverImage(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Update Book</button>
//             </form>
//         </div>
//     )
// }

// export default UpdateBook

// import React, { useState, useEffect } from 'react';
// import axios from '../../axiosConfig';
// import { toast } from 'react-toastify';
// import './UpdateConfirmationModal.css'; // Ensure to create a CSS file to style the modal

// const UpdateConfirmationModal = ({ bookId, onClose, onBookUpdated }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [description, setDescription] = useState('');
//   const [publicationDate, setPublicationDate] = useState('');
//   const [coverImage, setCoverImage] = useState('');

//   useEffect(() => {
//     const fetchBookDetails = async () => {
//       try {
//         const response = await axios.get(`/books/${bookId}`);
//         const { title, author, description, publicationDate, coverImage } = response.data;
//         setTitle(title);
//         setAuthor(author);
//         setDescription(description);
//         setPublicationDate(publicationDate);
//         setCoverImage(coverImage);
//       } catch (err) {
//         console.error('Failed to fetch book details');
//       }
//     };

//     fetchBookDetails();
//   }, [bookId]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`/books/${bookId}`, {
//         title,
//         author,
//         description,
//         publicationDate,
//         coverImage,
//       });
//       toast.success('Book updated successfully!');
//       onBookUpdated(response.data); // Pass updated book data back to the parent component
//     } catch (err) {
//       toast.error('Failed to update book.');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>Update Book</h2>
//         <form onSubmit={handleUpdate}>
//           <div>
//             <label>Title:</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Author:</label>
//             <input
//               type="text"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Description:</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Publication Date:</label>
//             <input
//               type="date"
//               value={publicationDate}
//               onChange={(e) => setPublicationDate(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Cover Image URL:</label>
//             <input
//               type="text"
//               value={coverImage}
//               onChange={(e) => setCoverImage(e.target.value)}
//             />
//           </div>
//           <button type="submit">Update Book</button>
//           <button type="button" onClick={onClose}>Cancel</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateConfirmationModal;

import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { toast } from 'react-toastify';
import './UpdateConfirmationModal.css'; // Ensure to create a CSS file to style the modal

const UpdateConfirmationModal = ({ bookId, onClose, onBookUpdated }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`/books/${bookId}`);
        const { title, author, description, publicationDate, coverImage } = response.data;
        
        // Set the fetched book data into the respective state variables
        setTitle(title);
        setAuthor(author);
        setDescription(description);
        setPublicationDate(publicationDate);
        setCoverImage(coverImage);
        setLoading(false); // Data fetched successfully, stop loading
      } catch (err) {
        console.error('Failed to fetch book details:', err);
        toast.error('Failed to fetch book details.');
        setLoading(false); // Stop loading even if there's an error
      }
    };

    if (bookId) {
      fetchBookDetails();
    }
  }, [bookId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/books/${bookId}`, {
        title,
        author,
        description,
        publicationDate,
        coverImage,
      });
      toast.success('Book updated successfully!');
      onBookUpdated(response.data); // Pass updated book data back to the parent component
    } catch (err) {
      toast.error('Failed to update book.');
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Update Book</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Publication Date:</label>
            <input
              type="date"
              value={publicationDate}
              onChange={(e) => setPublicationDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Cover Image URL:</label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />
          </div>
          <button type="submit">Update Book</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateConfirmationModal;
