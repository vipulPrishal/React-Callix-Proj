import React, { useState } from 'react';
import ProvideFeedback from './components/ProvideFeedback';
import ConfigurationsTab from './components/tabs/ConfigurationsTab';
import DetailsTab from './components/tabs/DetailsTab';
import IntegrationsTab from './components/tabs/IntegrationsTab';
import KnowledgeBaseTab from './components/tabs/KnowledgeBaseTab';
import PostCallTab from './components/tabs/PostCallTab';
import RecentCallsTab from './components/tabs/RecentCallsTab';
import TabsNavbar from './components/TabsNavbar';

const AgentDetailMainRight = ({ setHasChanges }) => {
  const [activeTab, setActiveTab] = useState('details');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return <DetailsTab setHasChanges={setHasChanges} />;
      case 'knowledge':
        return <KnowledgeBaseTab />;
      case 'integrations':
        return <IntegrationsTab />;
      case 'configurations':
        return <ConfigurationsTab />;
      case 'postcall':
        return <PostCallTab />;
      case 'recentcalls':
        return <RecentCallsTab />;
      default:
        return <DetailsTab setHasChanges={setHasChanges} />;
    }
  };

  return (
    <div className="flex-1 bg-background flex flex-col">
      {/* Fixed Top - Tabs Navbar */}
      <TabsNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Scrollable Middle - Tab Content */}
      <div className="flex-1  overflow-y-auto min-h-0 ">
        {renderTabContent()}
      </div>

      {/* Fixed Bottom - Provide Feedback */}
      <ProvideFeedback />
    </div>
  );
};

export default AgentDetailMainRight;
