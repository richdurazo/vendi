import React from 'react';

import './App.scss';
import Login from './pages/Login';
import { MaterialThemeProvider } from './themes/MaterialThemeProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/Landing';
import SignUp from './pages/SignUp';
import { CreateProduct } from './pages/CreateProduct';

const router = createBrowserRouter([
  { path: '/', element: <Landing />},
  { path: '/login', element: <Login />},
  { path: '/sign-up', element: <SignUp />},
  { path: '/create-product', element: <CreateProduct />},

])

function App() {
  return (
    <MaterialThemeProvider themeMode={'light'}>

    <div className="App">
      {/* <SignInSide /> */}
      <RouterProvider router={router} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </MaterialThemeProvider>
  );
}

export default App;
