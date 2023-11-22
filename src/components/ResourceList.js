import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResourceCard from './ResourceCard';
import { ResourceListWrapper } from '../StyledComponents';

const ResourceList = ({ tab, searchQuery }) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json');
        setResources(response.data || []);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  const filteredResources = resources
    .filter((resource) => {
      const resourceLowerCase = resource.title.toLowerCase();
      const queryLowerCase = searchQuery.toLowerCase();
      return resourceLowerCase.includes(queryLowerCase);
    });

  const tabFilteredResources = filteredResources.filter(
    (resource) => {
      if (tab === 'resources') {
        return true;
      } else if (tab === 'requests') {
        return resource.tag.toLowerCase() === 'request';
      } else if (tab === 'users') {
        return resource.tag.toLowerCase() === 'user';
      }
      return false;
    }
  );

  return (
    <ResourceListWrapper>
      {tabFilteredResources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </ResourceListWrapper>
  );
};

export default ResourceList;
