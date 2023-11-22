import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  HomePageWrapper,
  ActionButtons,
  TabsWrapper,
  SearchBarWrapper,
  SearchInput,
  TopSection,
  Logo,
  GreenItemButton,
  ProfilePicture,
} from '../StyledComponents';
import ResourceList from '../components/ResourceList';
import Tabs from '../components/Tabs';
import AddResourcePage from '../pages/AddResourcePage';

const HomePage = () => {
  const [resources, setResources] = useState([]);
  const [activeTab, setActiveTab] = useState('resources');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddResource, setShowAddResource] = useState(false);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json');
        setResources(response.data.resources || []);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, [activeTab, searchQuery]);

  const filteredResources = resources
    .filter((resource) => {
      if (activeTab === 'resources') {
        return true;
      } else {
        return resource.tag.toLowerCase() === activeTab;
      }
    })
    .filter((resource) => {
      const resourceLowerCase = resource.title.toLowerCase();
      const queryLowerCase = searchQuery.toLowerCase();
      return resourceLowerCase.includes(queryLowerCase);
    });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddResource = () => {
    setShowAddResource(true);
  };

  const handleCancelAddResource = () => {
    setShowAddResource(false);
  };

  return (
    <>
      <TopSection>
        <Logo src="/img/nxtwave.jpg" alt="Logo" />
        <ActionButtons>
          {!showAddResource && <GreenItemButton onClick={handleAddResource}>Add Item</GreenItemButton>}
          <ProfilePicture src="/img/image.png" alt="Profile" />
        </ActionButtons>
      </TopSection>
      <HomePageWrapper>
        {!showAddResource && (
          <>
            <TabsWrapper>
              <Tabs activeTab={activeTab} handleTabChange={handleTabChange} />
            </TabsWrapper>
            <SearchBarWrapper>
              <SearchInput
                type="text"
                placeholder="Search by resource name"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </SearchBarWrapper>
          </>
        )}
        {showAddResource ? (
          <AddResourcePage handleCancel={handleCancelAddResource} />
        ) : (
          <ResourceList tab={activeTab} searchQuery={searchQuery} resources={filteredResources} />
        )}
      </HomePageWrapper>
    </>
  );
};

export default HomePage;
