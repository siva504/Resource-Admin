
import styled from 'styled-components';



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-weight: bold;
  }
  select{
    padding: 10px;
  }

  input {
    padding: 8px;
  }

  textarea {
    padding: 8px;
    resize: vertical;
  }

  button {
    padding: 8px;
    background-color: blue;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    width:75px;
    align-items: center;
    gap:10px;
    display: inline-flex;
  }
`;

export const AddResourcePageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width:100%;
  height:100%;
  
`;

export const AddResourceFormWrapper = styled.div`
  padding: 20px;
  background-color: #ddd;
  border-radius: 0px;
`;

export const AddResourceImageWrapper = styled.div`
  display: flex;
  width:100vh;
`;

export const AddResourceImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #ddd;
  border-radius: 0px;
`;
export const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;