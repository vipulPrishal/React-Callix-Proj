// // // version 1:-----

import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Building,
  Calendar,
  FileText,
  GraduationCap,
  MapPin,
  Phone,
  Sparkles,
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
  const [prompt, setPrompt] = useState('');
  const [activeTab, setActiveTab] = useState('popular');
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(continuousTypewriter, isDeleting ? 50 : 50);
    return () => clearInterval(interval);
  }, [typewriterText, isDeleting]);

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
  const fullText =
    'Create a voice AI assistant that handles new membership applications at a gym.';

  const continuousTypewriter = () => {
    const currentText = fullText;

    if (!isDeleting) {
      // Typing forward
      if (typewriterText.length < currentText.length) {
        setTypewriterText(currentText.slice(0, typewriterText.length + 1));
      } else {
        // Start deleting after a pause
        setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      // Deleting backward
      if (typewriterText.length > 0) {
        setTypewriterText(typewriterText.slice(0, -1));
      } else {
        // Start typing again
        setIsDeleting(false);
      }
    }
  };

  return (
    <>
      {/* Hero + Prompt */}
      <div className="bg-background">
        <Container>
          <div className="text-center  pb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Create your <span className="text-primary">Free</span> Voice{' '}
              <span className="text-primary">AI</span> Assistant
            </h1>
            <p className="text-xl text-muted-foreground">
              Build, test, and ship reliable voice AI assistants just by
              prompting.
            </p>
          </div>

          {/* Prompt box */}
          <div className="max-w-6xl mx-auto mb-6 ">
            {/* I ADDED a custom shadow to the parent div only */}
            <div className="relative rounded-lg min-h-[200px] shadow-[0_0_25px_rgba(59,130,246,0.5)] focus-within:border-2 focus-within:border-[#408bff]">
              {/* <div className="relative rounded-lg min-h-[200px] shadow-2xl shadow-blue-500/50 mt-4 focus-within:border-2 focus-within:border-[#408bff]"> */}
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                // placeholder="Create a voice AI assistant that handles new membership applications at a gym."
                placeholder={typewriterText}
                // className=" min-h-[200px] text-lg px-6 resize-none  border-none  focus:!border-none focus:!ring-0"
                className=" min-h-[200px] text-lg px-6 resize-none  border-none  focus:!border-none focus:!ring-0"
                variant="lg"
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Enhance Prompt
                </Button>
                <Button
                  size="lg"
                  disabled={!prompt.trim()}
                  className={`px-6 py-3 rounded-lg shadow-lg ${
                    prompt.trim()
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                >
                  Create Agent
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Template Categories + Cards */}
      <Container>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">
            Template Categories
          </h2>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full grid grid-cols-4 bg-muted p-1 rounded-md">
              <TabsTrigger
                value="popular"
                className="h-10 w-full justify-center rounded-md
                           text-secondary-foreground
                           data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Popular
              </TabsTrigger>
              <TabsTrigger
                value="sales"
                className="h-10 w-full justify-center rounded-md
                           text-secondary-foreground
                           data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Sales
              </TabsTrigger>
              <TabsTrigger
                value="customer"
                className="h-10 w-full justify-center rounded-md
                           text-secondary-foreground
                           data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Customer Experience
              </TabsTrigger>
              <TabsTrigger
                value="business"
                className="h-10 w-full justify-center rounded-md
                           text-secondary-foreground
                           data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Business
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates[activeTab]?.map((template, idx) => (
                  <Card
                    key={idx}
                    // className="hover:shadow-lg transition-shadow cursor-pointer"
                    className="hover:shadow-lg hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
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

      {/* Footer */}
      <div className="text-center py-10 bg-background">
        <Container>
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
        </Container>
      </div>
    </>
  );
};

export default AiAgent;

// version 2:-- Improving the template categories now
