import React from 'react';
import { TabsWrapper, TabButton } from '../StyledComponents';

const Tabs = ({ activeTab, handleTabChange }) => {
  return (
    <TabsWrapper>
      <TabButton
        onClick={() => handleTabChange('resources')}
        active={activeTab === 'resources'}
      >
        Resources
      </TabButton>
      <TabButton
        onClick={() => handleTabChange('requests')}
        active={activeTab === 'requests'}
      >
        Requests
      </TabButton>
      <TabButton onClick={() => handleTabChange('users')} active={activeTab === 'users'}>
        Users
      </TabButton>
    </TabsWrapper>
  );
};

export default Tabs;
