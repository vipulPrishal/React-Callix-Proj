import React from 'react';
import { Button } from '@/components/ui/button';

const ProvideFeedback = () => {
  return (
    <div className="flex-shrink-0 border-t border-border/80 px-6 py-4 bg-background">
      <div className="flex justify-end">
        <Button
          variant="default"
          size="sm"
          className="bg-primary hover:bg-primary/80  text-white"
        >
          Provide feedback
        </Button>
      </div>
    </div>
  );
};

export default ProvideFeedback;
