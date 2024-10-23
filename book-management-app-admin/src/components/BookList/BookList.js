// import React, { useState, useEffect } from 'react';
// import axios from '../../axiosConfig';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import DeleteConfirmationModal from '../DeleteBook/DeleteConfirmationModal';

// const BookList = () => {
//   const [books, setBooks] = useState([]);
//   const [bookToDelete, setBookToDelete] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('/books');
//         setBooks(response.data);
//       } catch (err) {
//         setError('Failed to fetch books.');
//       }
//     };

//     fetchBooks();
//   }, []);

//   const handleDelete = async (bookId) => {
//     try {
//       await axios.delete(`/books/${bookId}`);
//       setBooks(books.filter((book) => book.id !== bookId)); // Remove deleted book from state
//     } catch (err) {
//       console.error('Failed to delete book', err);
//     }
//   };

//   const confirmDelete = (bookId) => {
//     setBookToDelete(bookId);
//     setShowModal(true);
//   };

//   const handleModalConfirm = () => {
//     handleDelete(bookToDelete);
//     setShowModal(false);
//   };

//   const handleModalCancel = () => {
//     setShowModal(false);
//   }

//   // const handleDelete = async (id) => {
//   //   try {
//   //     await axios.delete(`/books/${id}`);
//   //     toast.success('Book deleted successfully!');
//   //     setBooks(books.filter((book) => book.id !== id)); // Remove deleted book from state
//   //   } catch (err) {
//   //     toast.error('Failed to delete book.');
//   //   }
//   // };
//   // const [data, setData] = useState(null);
//   // const [error, setError] = useState('');

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get('/books'); // book API
//   //       setData(response.data);
//   //     } catch (err) {
//   //       setError('Failed to fetch data');
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   // if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Book List</h2>
//       <ol>
//         {books.map((book) => (
//           <li key={book.id}>
//             <p>
//               {/* display the cover image */}
//               {book.coverImage && (
//                 <img
//                   src={book.coverImage}
//                   alt={`${book.title} cover`}
//                   style={{ width: '100px', height: '150px' }} // adjust the size as needed
//                 />
//               )}
//               {book.title} by {book.author}</p>
//             <Link to={`/updatebook/${book.id}`}>Edit</Link>
//             <button onClick={() => confirmDelete(book.id)}>Delete</button>
//           </li>
//         ))}
//       </ol>

//       {/* Modal for delete confirmation */}
//       <DeleteConfirmationModal
//         show={showModal}
//         onConfirm={handleModalConfirm}
//         onCancel={handleModalCancel}
//       />

//       {/* <h2>Book List</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             <strong>{book.title}</strong> by {book.author}
//             <div>
//               <Link to={`/updatebook/${book.id}`}>Update</Link>
//               {' | '}
//               <button onClick={() => handleDelete(book.id)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul> */}

//       {/* Link to AddBook component */}
//       {/* <Link to="/addbook">Add a New Book</Link> */}

//       {/* <h2>Book List</h2>
//       {data ? (
//         <ol>
//           {data.map((book) => (
//             <li key={book.id}>{book.title} by {book.author}</li> 
//           ))}
//         </ol>
//       ) : (
//         <p>Loading...</p>
//       )} */}
//     </div>
//   );
// };

// export default BookList;

import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { toast } from 'react-toastify';
import DeleteConfirmationModal from '../DeleteBook/DeleteConfirmationModal';
import UpdateBookModal from '../UpdateBook/UpdateConfirmationModal'; // Import the modal component

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false); // For the UpdateBook modal
  const [selectedBookId, setSelectedBookId] = useState(null); // Store the ID of the book being updated

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/books');
        setBooks(response.data);
      } catch (err) {
        console.error('Failed to fetch books.');
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`/books/${bookId}`);
      setBooks(books.filter((book) => book.id !== bookId)); // Remove deleted book from state
    } catch (err) {
      console.error('Failed to delete book', err);
    }
  };

  const confirmDelete = (bookId) => {
    setBookToDelete(bookId);
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    handleDelete(bookToDelete);
    setShowModal(false);
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  // Function to handle opening the UpdateBook modal
  const handleEdit = (bookId) => {
    setSelectedBookId(bookId);
    setShowUpdateModal(true);
  };

  return (
    <div>
      <h2>Book List</h2>
      <ol>
        {books.map((book) => (
          <li key={book.id}>
            <p>
              {book.coverImage && (
                <img
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  style={{ width: '100px', height: '150px' }}
                />
              )}
              {book.title} by {book.author}
            </p>
            <button onClick={() => handleEdit(book.id)}>Edit</button>
            <button onClick={() => confirmDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ol>

      {/* Modal for delete confirmation */}
      <DeleteConfirmationModal
        show={showModal}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
      />

      {/* Modal for updating book */}
      {showUpdateModal && (
        <UpdateBookModal
          bookId={selectedBookId}
          onClose={() => setShowUpdateModal(false)}
          onBookUpdated={(updatedBook) => {
            setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
            setShowUpdateModal(false);
          }}
        />
      )}
    </div>
  );
};

export default BookList;
