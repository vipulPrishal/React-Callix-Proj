import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TemplateCard = ({ icon: Icon, title, description, onClick }) => {
  return (
    <Card
      className="hover:shadow-lg hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
      onClick={() => onClick && onClick(title)}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
