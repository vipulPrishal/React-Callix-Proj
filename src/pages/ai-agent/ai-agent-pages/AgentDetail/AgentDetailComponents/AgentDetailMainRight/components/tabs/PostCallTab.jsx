import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Reusable checkbox card component
const CheckboxCard = ({ id, checked, onChange, title, description }) => (
  <div
    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
      checked
        ? 'border-primary bg-primary/5'
        : 'border-border/60 hover:border-border'
    }`}
    onClick={() => onChange(id)}
  >
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(id)}
        onClick={(e) => e.stopPropagation()}
        className="mt-1 w-4 h-4 accent-primary cursor-pointer rounded-sm"
      />
      <div>
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const PostCallTab = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [including, setIncluding] = useState({
    callSummary: true,
    fullConversation: true,
    sentimentAnalysis: true,
    extractedInformation: true,
  });

  // Including options configuration
  const includingOptions = [
    {
      id: 'callSummary',
      title: 'Call Summary',
      description:
        'A brief overview of the conversation including key points and outcomes',
    },
    {
      id: 'fullConversation',
      title: 'Full Conversation',
      description: 'Complete transcript of the conversation with timestamps',
    },
    {
      id: 'sentimentAnalysis',
      title: 'Sentiment Analysis',
      description:
        'Analysis of customer mood and emotional responses throughout the call',
    },
    {
      id: 'extractedInformation',
      title: 'Extracted Information',
      description: 'Key data points extracted from the conversation',
    },
  ];
  const [variables, setVariables] = useState([
    {
      id: 1,
      name: 'customer_name',
      description: 'The first and last name of the customer being called.',
    },
    {
      id: 2,
      name: 'purchase_feedback',
      description: "Customer's feedback about the recent purchase.",
    },
    {
      id: 3,
      name: 'additional_support_needed',
      description:
        'Any specific additional support or information the customer may require.',
    },
  ]);

  const deliveryMethods = [
    'Email',
    'Salesforce',
    'HubSpot',
    'Slack',
    'Webhook',
    'Google Sheets',
    'SMS (Available for Paid users)',
  ];

  const handleCheckboxChange = (key) =>
    setIncluding((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleDeleteVariable = (id) =>
    setVariables((prev) => prev.filter((v) => v.id !== id));

  const handleAddVariable = () => {
    const newVariable = {
      id: Date.now(),
      name: '',
      description: '',
    };
    setVariables((prev) => [...prev, newVariable]);
  };

  const handleVariableChange = (id, field, value) => {
    setVariables((prev) =>
      prev.map((v) => (v.id === id ? { ...v, [field]: value } : v)),
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Post-Call Delivery Settings</h2>
        <Button variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Configuration
        </Button>
      </div>

      {/* Main Configuration Card */}
      <div className="border border-border/80 rounded-lg p-6 space-y-6">
        {/* Delivery Method */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-medium mb-2">Delivery Method</h3>
            <Select value={deliveryMethod} onValueChange={setDeliveryMethod}>
              <SelectTrigger className="w-full max-w-xs bg-muted/30">
                <SelectValue placeholder="Select delivery method" />
              </SelectTrigger>
              <SelectContent>
                {deliveryMethods.map((method) => (
                  <SelectItem key={method} value={method.toLowerCase()}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-destructive hover:text-destructive hover:bg-destructive/20 bg-muted/80"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Remove
          </Button>
        </div>

        {/* Including Section */}
        <div>
          <h3 className="text-sm font-medium mb-3">Including</h3>
          <div className="grid grid-cols-2 gap-4">
            {includingOptions.map((option) => (
              <CheckboxCard
                key={option.id}
                id={option.id}
                checked={including[option.id]}
                onChange={handleCheckboxChange}
                title={option.title}
                description={option.description}
              />
            ))}
          </div>
        </div>

        {/* Extracted Variables */}
        <div>
          <h3 className="text-sm font-medium mb-2">Extracted Variables</h3>
          <p className="text-xs text-muted-foreground mb-4">
            Specify what variables you want to extract from the conversation.
            For each variable, provide a name and a description of how to
            extract it.
          </p>

          <div className="space-y-3 ">
            {variables.map((variable) => (
              <div
                key={variable.id}
                className="grid grid-cols-[1fr_1fr_auto] gap-3 items-center "
              >
                <Input
                  value={variable.name}
                  onChange={(e) =>
                    handleVariableChange(variable.id, 'name', e.target.value)
                  }
                  placeholder="variable_name"
                  className=" bg-muted/10 border-border/60 hover:bg-muted/100 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                <Input
                  value={variable.description}
                  onChange={(e) =>
                    handleVariableChange(
                      variable.id,
                      'description',
                      e.target.value,
                    )
                  }
                  placeholder="Description of how to extract this variable"
                  className="bg-muted/10 border-border/60 hover:bg-muted/100  focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteVariable(variable.id)}
                  className="text-destructive hover:text-destructive hover:bg-destructive/20 bg-muted/80"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleAddVariable}
            className="mt-4 border-primary/40 text-primary hover:bg-primary/20 "
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Variable
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCallTab;
