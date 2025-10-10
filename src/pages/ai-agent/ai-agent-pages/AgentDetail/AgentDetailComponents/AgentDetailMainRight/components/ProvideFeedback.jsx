import React from 'react';
import { Button } from '@/components/ui/button';

const ProvideFeedback = () => {
  return (
    <div className="flex justify-end fixed bottom-15 right-6">
      <Button
        variant="default"
        size="sm"
        className="bg-[#01a2a2] hover:bg-[#01a2a2]/80 text-black text-[14px] py-4 rounded-2xl"
      >
        Provide feedback
      </Button>
    </div>
  );
};

export default ProvideFeedback;
