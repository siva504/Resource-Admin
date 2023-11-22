
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddResourcePage from './pages/AddResourcePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>}  />
        <Route path="/add-resource" element={<AddResourcePage/>} />
      </Routes>
      <ToastContainer position="bottom-center" />
    </Router>
  );
};

export default App;
