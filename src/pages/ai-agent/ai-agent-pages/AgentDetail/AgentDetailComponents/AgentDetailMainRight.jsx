import React from 'react';

const AgentDetailMainRight = () => {
  return (
    <div className="flex-1 bg-background">
      <div className="h-full p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Right Column (60%)
        </h3>
        <p className="text-muted-foreground">
          This is the right column. Takes remaining space.
        </p>
      </div>
    </div>
  );
};

export default AgentDetailMainRight;
