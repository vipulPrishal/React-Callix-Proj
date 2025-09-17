// import React from 'react';

// const AiAgent = () => {
//   return (
//     <>
//       <div>AI Agent Page</div>
//     </>
//   );
// };

// export default AiAgent;

// ----version 2----

import React, { useState } from 'react';
import {
  ArrowRight,
  Building,
  Calendar,
  FileText,
  GraduationCap,
  MapPin,
  Phone,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Container } from '@/components/common/container';

const AiAgent = () => {
  const [prompt, setPrompt] = useState(
    'Create a voice AI assistant that handles new membership applications at a gym.',
  );
  const [activeTab, setActiveTab] = useState('popular');

  // Template data
  const templates = {
    popular: [
      {
        icon: Calendar,
        title: 'Appointment Scheduler',
        description:
          'Book and manage appointments seamlessly with a voice AI assistant.',
      },
      {
        icon: TrendingUp,
        title: 'Sales Representative',
        description:
          'Create a knowledgeable sales assistant that can provide product information, pricing details, and handle purchase...',
      },
      {
        icon: Star,
        title: 'Product Specialist',
        description:
          'Create a product expert that can provide detailed information about specific products, features, and...',
      },
      {
        icon: Phone,
        title: 'Feedback & Survey Assistant',
        description:
          'Conduct post-purchase surveys and service quality checks with multilingual support.',
      },
    ],
    sales: [
      {
        icon: TrendingUp,
        title: 'Sales Representative',
        description:
          'Create a knowledgeable sales assistant that can provide product information, pricing details, and handle purchase...',
      },
      {
        icon: Star,
        title: 'Product Specialist',
        description:
          'Create a product expert that can provide detailed information about specific products, features, and...',
      },
      {
        icon: Users,
        title: 'Lead Generation Specialist',
        description:
          'Conduct scaled outbound campaigns for property, IT services, education, finance, and B2B sectors.',
      },
    ],
    customer: [
      {
        icon: Phone,
        title: 'Feedback & Survey Assistant',
        description:
          'Conduct post-purchase surveys and service quality checks with multilingual support.',
      },
    ],
    business: [
      {
        icon: Calendar,
        title: 'Appointment Scheduler',
        description:
          'Book and manage appointments seamlessly with a voice AI assistant.',
      },
      {
        icon: FileText,
        title: 'Collections & Payment Assistant',
        description:
          'Handle collections, payment reminders, and follow-ups for loans, subscriptions, and policy renewals.',
      },
      {
        icon: Building,
        title: 'Recruitment Assistant',
        description:
          'Handle driver recruitment, workforce scheduling, and operational calling for fleet management.',
      },
      {
        icon: MapPin,
        title: 'Travel Assistant',
        description:
          'Handle hotel bookings, trip planning, and itinerary management with multilingual capabilities.',
      },
      {
        icon: GraduationCap,
        title: 'Education Counselor',
        description:
          'Handle admission timelines, and consultation scheduling for educational institutions.',
      },
    ],
  };

  return (
    // <div className="min-h-screen bg-background ">
    <div className="min-h-screen bg-background mt-[-15px] ">
      {/* Header Section */}
      <div className="text-center ">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Create your <span className="text-primary">Free</span> Voice{' '}
          <span className="text-primary">AI</span> Assistant
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Build, test, and ship reliable voice AI assistants just by prompting.
        </p>

        {/* Input Section */}
        <Container>
          <div className="max-w-6xl mx-auto mb-2 ">
            <div className="relative">
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Create a voice AI assistant that handles new membership applications at a gym."
                className="min-h-[200px] text-lg p-6 border-2 border-primary/20 focus:border-[#408bff]  "
                variant="lg"
              />
              <Button
                className="absolute bottom-4 right-4 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg shadow-lg"
                size="lg"
              >
                Create Agent
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Template Categories */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-8">
              Template Categories
            </h2>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4 mb-8 ">
                <TabsTrigger
                  value="popular"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Popular
                </TabsTrigger>
                <TabsTrigger
                  value="sales"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Sales
                </TabsTrigger>
                <TabsTrigger
                  value="customer"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Customer Experience
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Business
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left ">
                  {templates[activeTab]?.map((template, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <template.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {template.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {template.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Container>
      </div>

      {/* Footer Section */}
      <div className="text-center py-16 ">
        <p className="text-muted-foreground mb-8">
          Trusted by leading companies
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="text-muted-foreground font-semibold">Capgemini</div>
          <div className="text-muted-foreground font-semibold">Exotel</div>
          <div className="text-muted-foreground font-semibold">NVIDIA</div>
          <div className="text-muted-foreground font-semibold">MG Motors</div>
          <div className="text-muted-foreground font-semibold">
            Heterize Infotech
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAgent;
