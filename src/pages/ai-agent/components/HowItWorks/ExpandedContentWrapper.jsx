import React from 'react';

const ExpandedContentWrapper = ({
  title,
  subtitle,
  children,
  gridCols = 'md:grid-cols-3',
}) => {
  return (
    <div className="mt-8">
      <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
        <div className="text-left mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>
        <div className={`grid grid-cols-1 ${gridCols} gap-6`}>{children}</div>
      </div>
    </div>
  );
};

export default ExpandedContentWrapper;
