// ResourceCard.js
import React from 'react';
import { ResourceCardWrapper } from '../StyledComponents';

const ResourceCard = ({ resource }) => {
  const { title, icon_url, link, description, category, tag, id } = resource;

  return (
    <ResourceCardWrapper>
      <h3>{title}</h3>
      <img src={icon_url} alt={title} />
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Tag: {tag}</p>
      <p>ID: {id}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visit Link
      </a>
    </ResourceCardWrapper>
  );
};

export default ResourceCard;
