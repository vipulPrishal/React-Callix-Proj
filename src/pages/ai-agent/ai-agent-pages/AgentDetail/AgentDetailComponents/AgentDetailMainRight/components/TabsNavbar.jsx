import React from 'react';
import { Button } from '@/components/ui/button';

const TabsNavbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'details', label: 'Details' },
    { id: 'knowledge', label: 'Knowledge Base' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'configurations', label: 'Configurations' },
    { id: 'postcall', label: 'Post-Call' },
    { id: 'recentcalls', label: 'Recent Calls' },
  ];

  return (
    <div className="flex-shrink-0 border-b border-border/80 px-6 pt-2 pb-3 bg-background">
      <div className="flex gap-2 text-sm flex-wrap">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            size="sm"
            variant={activeTab === tab.id ? 'default' : 'ghost'}
            onClick={() => setActiveTab(tab.id)}
            className={
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TabsNavbar;
