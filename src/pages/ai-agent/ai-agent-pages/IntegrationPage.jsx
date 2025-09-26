// ----version 1-----
import React, { useState } from 'react';
import hubspotIcon from '@/assets/ai-agent-images/integrationPage/500px-HubSpot_Logo.webp';
import slackIcon from '@/assets/ai-agent-images/integrationPage/1200px-Slack_icon_2019.webp';
import anthropicIcon from '@/assets/ai-agent-images/integrationPage/anthropic-1.webp';
import calIcon from '@/assets/ai-agent-images/integrationPage/cal.webp';
import cloverIcon from '@/assets/ai-agent-images/integrationPage/clover-new.webp';
import geminiIcon from '@/assets/ai-agent-images/integrationPage/gemini.webp';
import ghlIcon from '@/assets/ai-agent-images/integrationPage/ghl.webp';
import googleCalendarIcon from '@/assets/ai-agent-images/integrationPage/GoogleCalendar.webp';
import groqIcon from '@/assets/ai-agent-images/integrationPage/groq.webp';
import makeIcon from '@/assets/ai-agent-images/integrationPage/make.webp';
// Import all integration images
import n8nIcon from '@/assets/ai-agent-images/integrationPage/n8n.webp';
import openaiIcon from '@/assets/ai-agent-images/integrationPage/openai.webp';
import salesforceIcon from '@/assets/ai-agent-images/integrationPage/Salesforce.com_logo.svg';
import squareIcon from '@/assets/ai-agent-images/integrationPage/square.webp';
import twilioIcon from '@/assets/ai-agent-images/integrationPage/twilio.webp';
import zapierIcon from '@/assets/ai-agent-images/integrationPage/zapier.webp';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Container } from '@/components/common/container';

const integrations = [
  {
    id: 1,
    name: 'n8n',
    description: 'Workflow automation for connecting services and more',
    icon: n8nIcon,
    category: 'automation',
  },
  {
    id: 2,
    name: 'Make',
    description:
      'Visual platform to design, build, and automate workflows and more',
    icon: makeIcon,
    category: 'automation',
  },
  {
    id: 3,
    name: 'Zapier',
    description: 'Connect apps and automate workflows',
    icon: zapierIcon,
    category: 'automation',
  },
  {
    id: 4,
    name: 'Go High Level',
    description: 'All-in-one marketing platform integration and more',
    icon: ghlIcon,
    category: 'marketing',
  },
  {
    id: 5,
    name: 'Cal.com',
    description:
      'Scheduling infrastructure for seamless calendar integration and appointment booking',
    icon: calIcon,
    category: 'scheduling',
  },
  {
    id: 6,
    name: 'Google Calendar',
    description:
      'Sync with Google Calendar for automated scheduling and appointment booking',
    icon: googleCalendarIcon,
    category: 'scheduling',
  },
  {
    id: 7,
    name: 'Salesforce',
    description: 'CRM integration for customer data, sales management and more',
    icon: salesforceIcon,
    category: 'crm',
  },
  {
    id: 8,
    name: 'HubSpot',
    description: 'CRM integration for customer data, sales management and more',
    icon: hubspotIcon,
    category: 'crm',
  },
  {
    id: 9,
    name: 'OpenAI',
    description:
      'Connect to GPT-4o-mini, GPT-4o, GPT-3.5-turbo for advanced AI capabilities',
    icon: openaiIcon,
    category: 'ai',
  },
  {
    id: 10,
    name: 'Anthropic',
    description:
      'Leverage Claude 3.5 Haiku, Claude 3.5 Sonnet, Claude 3.7 Sonnet for advanced AI capabilities',
    icon: anthropicIcon,
    category: 'ai',
  },
  {
    id: 11,
    name: 'Google Gemini',
    description:
      'Leverage Gemini 2.0 Flash, Gemini 1.5 Pro, Gemini 2.5 Flash preview for advanced AI capabilities',
    icon: geminiIcon,
    category: 'ai',
  },
  {
    id: 12,
    name: 'Groq',
    description:
      'Ultra-fast inference for LLMs to power real-time applications',
    icon: groqIcon,
    category: 'ai',
  },
  {
    id: 13,
    name: 'Slack',
    description: 'Team communication and collaboration',
    icon: slackIcon,
    category: 'communication',
  },
  {
    id: 14,
    name: 'Twilio',
    description: 'SMS, voice, and communication APIs',
    icon: twilioIcon,
    category: 'communication',
  },
  {
    id: 15,
    name: 'Square',
    description: 'Payment processing and point-of-sale integration',
    icon: squareIcon,
    category: 'payment',
  },
  {
    id: 16,
    name: 'Clover',
    description: 'POS and payment processing system',
    icon: cloverIcon,
    category: 'payment',
  },
];

const IntegrationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'ai', label: 'AI Models' },
    { value: 'automation', label: 'Automation' },
    { value: 'crm', label: 'CRM' },
    { value: 'communication', label: 'Communication' },
    { value: 'payment', label: 'Payment' },
    { value: 'scheduling', label: 'Scheduling' },
    { value: 'marketing', label: 'Marketing' },
  ];

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch =
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background py-10">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Connect With Your <span className="text-primary">Tech Stack</span>
          </h1>
          <p className="text-md text-muted-foreground max-w-4xl mx-auto mb-8">
            Connect your voice AI assistants with the tools and platforms you
            already use. From AI models to CRM systems, automation tools to
            communication platforms.
          </p>

          {/* Search Bar */}
          <div className="max-w-md md:max-w-lg mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search integrations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-10 text-base"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Integrations Grid - 50% 50% split */}
        <div className="flex flex-wrap gap-8 justify-center">
          {filteredIntegrations.map((integration) => (
            <div
              key={integration.id}
              className="bg-card border border-white/10 rounded-lg overflow-hidden hover:border-primary/30 hover:scale-105 transition-all duration-300 cursor-pointer w-62 h-60 flex flex-col"
            >
              {/* Div A: Logo and Title Section - 50% height */}
              <div className="h-[65%] flex flex-col items-center justify-center text-center p-4">
                {/* Icon Container - White background */}
                <div className="bg-white rounded-lg p-1 mb-3 w-fit">
                  <img
                    src={integration.icon}
                    alt={`${integration.name} logo`}
                    className="h-13 w-13 object-contain"
                  />
                </div>

                {/* Name - Bold white text, centered */}
                <h3 className="text-lg font-bold text-white">
                  {integration.name}
                </h3>
              </div>

              {/* Div B: Description Section - 50% height with #121212 background */}
              <div
                className="h-[35%] w-full p-4 text-center flex items-center justify-center"
                style={{ backgroundColor: '#121212' }}
              >
                <p className="text-sm text-gray-400 leading-relaxed">
                  {integration.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No integrations found matching your search criteria.
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Showing {filteredIntegrations.length} of {integrations.length}{' '}
            integrations
          </p>
        </div>
      </Container>
    </div>
  );
};

export default IntegrationPage;
