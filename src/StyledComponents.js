import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color:#f0f0f0;
`;

export const Heading = styled.h1`
  color: #333;
`;

export const ResourceListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 50px;
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  width:auto;
  max-width:125px;
  padding: 10px;
  background-color: ${(props) => (props.active ? '#007bff' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : 'black')};
  border: 2px solid yellow;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 0px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

export const SearchBarWrapper = styled.div`
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  width: 400px;
  border: 1px solid;
  border-radius:5px;
  // Add any additional styles you want for the search input
`;

export const ResourceCardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  background-color: #fff;

  img {
    max-width: 100%; /* Ensure images don't exceed the width of their container */
    height: auto; /* Maintain aspect ratio */
    border-radius: 4px; /* Optional: Add border-radius to images */
  }
`;
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff; /* Adjust background color as needed */
`;
export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Logo = styled.img`
  max-width: 100px;
  height: auto;
`;
export const GreenItemButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
`;

export const ProfilePicture = styled.img`
  max-width: 50px; /* Adjust the size as needed */
  border-radius: 50%; /* Make it circular */
  height: auto;
`;
