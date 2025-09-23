import React from 'react';

const SectionHeader = ({
  badge,
  title,
  highlightedText,
  subtitle,
  className = 'text-center mb-12',
}) => {
  // Function to find and highlight the specified text in title
  const renderTitle = () => {
    if (!highlightedText || !title) {
      return title;
    }

    // Find the index of highlighted text in title
    const index = title.toLowerCase().indexOf(highlightedText.toLowerCase());

    if (index === -1) {
      return title; // If not found, return original title
    }

    // Split title into parts: before, highlighted, after
    const beforeText = title.substring(0, index);
    const highlightedPart = title.substring(
      index,
      index + highlightedText.length,
    );
    const afterText = title.substring(index + highlightedText.length);

    return (
      <>
        {beforeText}
        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text">
          {highlightedPart}
        </span>
        {afterText}
      </>
    );
  };

  return (
    <div className={className}>
      {badge && (
        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
          {badge}
        </div>
      )}
      <h2 className="md:text-3xl font-bold tracking-tight mb-6">
        {renderTitle()}
      </h2>
      {subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
