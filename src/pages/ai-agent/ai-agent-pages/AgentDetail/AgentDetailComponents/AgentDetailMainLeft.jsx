import React from 'react';

const AgentDetailMainLeft = ({ width }) => {
  return (
    <div
      className="bg-background border-r border-border/30"
      style={{ width: `${width}%` }}
    >
      <div className="h-full p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Left Column ({width.toFixed(1)}%)
        </h3>
        <p className="text-muted-foreground">
          This is the left column. Width: {width.toFixed(1)}%
        </p>
      </div>
    </div>
  );
};

export default AgentDetailMainLeft;
