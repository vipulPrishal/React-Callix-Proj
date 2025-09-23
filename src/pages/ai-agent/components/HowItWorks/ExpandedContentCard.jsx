import React from 'react';
import { Card } from '@/components/ui/card';

const ExpandedContentCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="p-6 bg-card/80 border border-border/50 rounded-xl">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

export default ExpandedContentCard;
