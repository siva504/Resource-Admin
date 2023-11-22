
import React from 'react';
import { AddResourcePageWrapper,
  AddResourceFormWrapper,
  AddResourceImageWrapper,
  AddResourceImage, Form , BackButton} from '../styles/AddResourcePageStyles';
  import axios from 'axios';
  import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddResourcePage = ( ) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://media-content.ccbp.in/website/react-assignment/add_resource.json',
      );

      
      toast.success('Resource item created successfully!', {
        position: 'bottom-center',
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error('Failed to create resource item. Please try again.', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleBack = () => {
  };

  return (
    
    <AddResourcePageWrapper>
       <AddResourceFormWrapper>
       <BackButton onClick={handleBack}>Back</BackButton>
       <h2>Item Details</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="title">ITEM TITLE</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="link">LINK</label>
        <input type="text" id="link" name="link" required />


        <label htmlFor="icon_url">ICON URL</label>
        <input type="text" id="icon_url" name="icon_url" required />

        <label htmlFor="tag">TAG</label>
            <select id="tag" name="tag">
              <option value="request">Request</option>
              <option value="user">User</option>
        </select>

        <label htmlFor="category">CATEGORY</label>
        <input type="text" id="category" name="category" required />

        <label htmlFor="description">DESCRIPTION</label>
        <textarea id="description" name="description" required></textarea>

        <button type="submit">Create</button>
      </Form>
       <ToastContainer />
      </AddResourceFormWrapper>
      <AddResourceImageWrapper>
        <AddResourceImage src="/img/images.png" alt="Resource" />
      </AddResourceImageWrapper>
      
    </AddResourcePageWrapper>
  );
};

export default AddResourcePage;
