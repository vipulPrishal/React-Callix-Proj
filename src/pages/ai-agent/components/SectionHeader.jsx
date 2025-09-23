import React from 'react';

const SectionHeader = ({
  badge,
  title,
  highlightedText,
  subtitle,
  className = 'text-center mb-12',
}) => {
  return (
    <div className={className}>
      {badge && (
        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
          {badge}
        </div>
      )}
      <h2 className="md:text-3xl font-bold tracking-tight mb-6">
        {title}
        {highlightedText && (
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text">
            {' '}
            {highlightedText}
          </span>
        )}
      </h2>
      {subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
