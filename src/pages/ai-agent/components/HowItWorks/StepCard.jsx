import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const StepCard = ({
  number,
  icon: Icon,
  title,
  description,
  isExpanded,
  onClick,
}) => {
  return (
    <Card
      className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
      onClick={onClick}
    >
      <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
        {number}
      </div>
      <div className="rounded-lg bg-muted/50 p-2 mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-2">{description}</p>
      <div className="text-primary mt-auto">
        {isExpanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </div>
    </Card>
  );
};

export default StepCard;
