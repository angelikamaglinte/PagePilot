import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setIsAdminLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError('');

  //   try {
  //     const response = await axios.post('/login', {
  //       username,
  //       password,
  //     });

  //     localStorage.setItem('token', response.data.token);


  //     navigate('/booklist'); // Navigate to booklist route on successful login
  //     console.log('Login successful', response.data.token);
  //   } catch (err) {
  //     setError('Invalid username or password');
      
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await axios.post('/login', {
        username,
        password,
      });
  
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isAdminLoggedIn', 'true');
      setIsAdminLoggedIn(true);
  
      navigate('/dashboard'); 
      console.log('Login successful', response.data.token);
    } catch (err) {
      setError('Invalid username or password');
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;


// OLD CODE
// import axios from '../axiosConfig';
// import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

// const Login = () => {

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');


//         try {
//             const response = await axios.post('http://localhost:7000/login', {
//                 username,
//                 password
//             });

//             localStorage.setItem('token', response.data.token);
//             history.push('/protected'); // redirect to protected route
//             console.log('Login successful', response.data.token);
//         } catch (err) {
//             setError('Invalid username or password');
//         }
//     }

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//             {error && <p>{error}</p>}
//         </div>
//     )
// }

// export default Login