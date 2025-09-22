import React from 'react';
import { Card } from '@/components/ui/card';

const ExpandedContentCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="p-6 border border-border/50">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h5 className="font-semibold mb-2">{title}</h5>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default ExpandedContentCard;
