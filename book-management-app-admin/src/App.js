// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Login from './components/LoginLogin';
// // import Logout from './components/Logout'
// // import Protected from './Protected';
// // import ProtectedRoute from './ProtectedRoute'; // Import your ProtectedRoute component


// // function App() {
// //   return (
// //     // <div className="App">
// //     //   <Login />
// //     // </div>

// //     // new App.js code

// //     <Router>
// //       <div className="App">
// //         <Logout />
// //         <Routes>
// //           <Route path="/" element={<Login />} />
// //           <Route path="/protected" element={<ProtectedRoute component={Protected} />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// // new code
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage/LandingPage';
// import Login from './components/Login/Login';
// import Logout from './components/Login/Logout';
// import BookList from './components/BookList/BookList';
// import ProtectedRoute from './ProtectedRoute'; // Import your ProtectedRoute component
// import AddBook from './components/AddBook/AddBook';
// import Sidebar from './components/Sidebar/Sidebar';
// import UpdateBook from './components/UpdateBook/UpdateBook';
// import Dashboard from './components/Dashboard/Dashboard';
// import './App.css'

// function App() {
//   // const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

//   // useEffect(() => {
//   //   const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
//   //   setIsAdminLoggedIn(isLoggedIn);
//   // }, []);


//   // return (
//   //   <Router>
//   //     <div className="App">
//   //       {/* <Sidebar /> */}
//   //       <Logout />
//   //       <Routes>
//   //         <Route path="/" element={<Login />} />
//   //         <Route path="/dashboard" element={<Dashboard />} />
//   //         <Route path="/booklist" element={<ProtectedRoute component={BookList} />} />
//   //         <Route path="/addbook" element={<AddBook />} />
//   //         <Route path="/updatebook/:id" element={<UpdateBook />} />
//   //       </Routes>
//   //     </div>
//   //   </Router>
//   // );

//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
//     setIsAdminLoggedIn(isLoggedIn);
//   }, []);

//   return (
//     // <Router>
//     //   <div className="App">
//     //   {isAdminLoggedIn && <Sidebar />}
//     //     {isAdminLoggedIn && <Logout setIsAdminLoggedIn={setIsAdminLoggedIn} />}

//     //     <Routes>
//     //       <Route path="/" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
//     //       <Route path="/dashboard" element={<Dashboard />} />
//     //       <Route path="/booklist" element={<ProtectedRoute component={BookList} />} />
//     //       <Route path="/addbook" element={<AddBook />} />
//     //       <Route path="/updatebook/:id" element={<UpdateBook />} />
//     //     </Routes>
//     //   </div>
//     // </Router>

//     // <Router>
//     //   <div className="App">
//     //     {/* Wrap sidebar and content in a flexbox container */}
//     //     {isAdminLoggedIn ? (
//     //       <div className="layout-container">
//     //         <Sidebar />
//     //         <div className="main-content">
//     //           <Logout setIsAdminLoggedIn={setIsAdminLoggedIn} />
//     //           <Routes>
//     //             <Route path="/" element={<LandingPage />} />
//     //             <Route path="/login" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
//     //             <Route path="/dashboard" element={<Dashboard />} />
//     //             <Route path="/booklist" element={<ProtectedRoute component={BookList} />} />
//     //             <Route path="/addbook" element={<AddBook />} />
//     //             <Route path="/updatebook/:id" element={<UpdateBook />} />
//     //           </Routes>
//     //         </div>
//     //       </div>
//     //     ) : (
//     //       <Routes>
//     //         <Route path="/" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
//     //       </Routes>
//     //     )}
//     //   </div>
//     // </Router>

//     <Router>
//       <div className="App">
//         {isAdminLoggedIn ? (
//           <div className="layout-container">
//             <Sidebar />
//             <div className="main-content">
//               <Logout setIsAdminLoggedIn={setIsAdminLoggedIn} />
//               <Routes>
//                 {/* LandingPage will now be the home route */}
//                 <Route path="/" element={<LandingPage />} />
//                 {/* Login route moved to /login */}
//                 <Route path="/login" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/booklist" element={<ProtectedRoute component={BookList} />} />
//                 <Route path="/addbook" element={<AddBook />} />
//                 <Route path="/updatebook/:id" element={<UpdateBook />} />
//               </Routes>
//             </div>
//           </div>
//         ) : (
//           <Routes>
//             {/* When the user is not logged in, redirect them to /login */}
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/login" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
//           </Routes>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Logout from './components/Login/Logout';
import BookList from './components/BookList/BookList';
import ProtectedRoute from './ProtectedRoute'; // Import your ProtectedRoute component
import AddBook from './components/AddBook/AddBook';
import Sidebar from './components/Sidebar/Sidebar';
import UpdateBook from './components/UpdateBook/UpdateConfirmationModal';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css'

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsAdminLoggedIn(isLoggedIn);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Only show Sidebar and Logout if admin is logged in */}
        {isAdminLoggedIn ? (
          <div className="layout-container">
            <Sidebar />
            <div className="main-content">
              <Logout setIsAdminLoggedIn={setIsAdminLoggedIn} />
              <Routes>
                {/* LandingPage should not be shown if the user is logged in */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/booklist" element={<ProtectedRoute component={BookList} />} />
                <Route path="/addbook" element={<AddBook />} />
                <Route path="/updatebook/:id" element={<UpdateBook />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Routes>
            {/* When not logged in, show LandingPage */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;