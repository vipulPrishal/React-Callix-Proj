// version 1:- :--- AFTER I STARTED BREAKING INTO COMPONENTS:----👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼

import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  BrainCircuit,
  Building,
  Calendar,
  ChartLine,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  FileText,
  FlaskConical,
  GraduationCap,
  Layers,
  MapPin,
  MessageCircle,
  MessageSquareText,
  MousePointer,
  PenLine,
  Phone,
  Puzzle,
  Rocket,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Workflow,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Container } from '@/components/common/container';
// import Button from './components/Hero/Button/Button';
import TemplateCard from './components/Hero/TemplateCard/TemplateCard';
import ExpandedContentCard from './components/HowItWorks/ExpandedContentCard';
import ExpandedContentWrapper from './components/HowItWorks/ExpandedContentWrapper';
import StepCard from './components/HowItWorks/StepCard';
import CounterOnView from './components/KeyFeatures/CounterOnView';
import DemoCarousel from './components/KeyFeatures/DemoCarousel';
import FeaturesCard from './components/KeyFeatures/FeaturesCard';
import SectionHeader from './components/SectionHeader';
import CallixAiImage from '/src/assets/ai-agent-images/CallixAi.png';

const AiAgent = () => {
  const [prompt, setPrompt] = useState('');
  const [activeTab, setActiveTab] = useState('popular');
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});
  // Add these states after your existing useState declarations (around line 50)
  const [isCreating, setIsCreating] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleCreateAgent = async () => {
    if (!prompt.trim()) return;

    setIsCreating(true);
    setLoadingProgress(0);

    // Disable body scroll
    document.body.classList.add('loading-active');

    // Simulate API call with progress updates
    try {
      for (let i = 0; i <= 100; i += 5) {
        await new Promise((resolve) => setTimeout(resolve, 150));
        setLoadingProgress(i);
      }

      // Your actual API call here
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Handle success
      console.log('Agent created successfully!');
    } catch (error) {
      console.error('Error creating agent:', error);
    } finally {
      setIsCreating(false);
      setLoadingProgress(0);

      // Re-enable body scroll
      document.body.classList.remove('loading-active');
    }
  };
  useEffect(() => {
    const interval = setInterval(continuousTypewriter, isDeleting ? 50 : 50);
    return () => clearInterval(interval);
  }, [typewriterText, isDeleting]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
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

  // Add this after your templates object (around line 164)

  const templatePrompts = {
    'Appointment Scheduler': `Create a voice AI agent to schedule appointments.

Personality:
- Courteous, organized, and efficient.

Capabilities:
- Check calendars and find open times in real time.
- Offer the best and backup slots automatically.

Call Flow:
1. Professional greeting.
2. Collect caller's name, desired service, and preferred dates/times.
3. Suggest available slots and confirm selection.
4. Provide confirmation 
5. End with a friendly closing.

Error Handling:
- If availability changes mid-call, apologize and offer the next best slot.
- Clarify unclear dates/times (e.g., "Did you mean next Tuesday, June 10th?").

Goals:
- Make scheduling painless for customers.
- Reduce back-and-forth and no-shows.
- Keep staff calendars accurate.
- Free front-desk teams for personal interactions.`,

    'Sales Representative': `Create a voice AI agent for sales and lead generation.

Personality:
- Professional, persuasive, and knowledgeable.

Capabilities:
- Provide detailed product information and pricing.
- Qualify leads and gather contact information.
- Handle objections and answer questions.

Call Flow:
1. Warm greeting and introduction.
2. Qualify the prospect's needs and budget.
3. Present relevant products/services.
4. Address concerns and objections.
5. Close with next steps or appointment booking.

Error Handling:
- If unable to answer specific questions, offer to connect with a specialist.
- Handle price objections with value propositions.

Goals:
- Generate qualified leads.
- Increase conversion rates.
- Provide 24/7 sales support.
- Reduce sales team workload.`,

    'Product Specialist': `Create a voice AI agent for product support and information.

Personality:
- Expert, helpful, and patient.

Capabilities:
- Provide detailed product specifications.
- Troubleshoot common issues.
- Guide users through product features.

Call Flow:
1. Friendly greeting and identification.
2. Understand the customer's product inquiry.
3. Provide comprehensive product information.
4. Offer additional resources or support.
5. End with satisfaction check.

Error Handling:
- Escalate complex technical issues to human support.
- Provide alternative solutions when primary options aren't available.

Goals:
- Improve customer product knowledge.
- Reduce support ticket volume.
- Increase customer satisfaction.
- Drive product adoption.`,

    'Feedback & Survey Assistant': `Create a voice AI agent for collecting feedback and conducting surveys.

Personality:
- Neutral, professional, and encouraging.

Capabilities:
- Conduct structured surveys and feedback collection.
- Handle multiple languages and demographics.
- Analyze and categorize responses.

Call Flow:
1. Introduction and consent confirmation.
2. Explain survey purpose and duration.
3. Ask questions systematically.
4. Thank participant and explain next steps.
5. Offer additional support if needed.

Error Handling:
- Handle incomplete responses gracefully.
- Allow participants to skip questions.
- Provide clarification when needed.

Goals:
- Collect high-quality feedback data.
- Increase survey completion rates.
- Improve customer experience insights.
- Support data-driven decision making.`,

    'Lead Generation Specialist': `Create a voice AI agent for outbound lead generation.

Personality:
- Professional, persistent, and results-oriented.

Capabilities:
- Conduct cold outreach campaigns.
- Qualify prospects across multiple industries.
- Schedule follow-up appointments.

Call Flow:
1. Professional introduction and value proposition.
2. Qualify prospect's business needs.
3. Present relevant solutions.
4. Handle objections and concerns.
5. Schedule next steps or demos.

Error Handling:
- Respect do-not-call requests immediately.
- Handle gatekeepers professionally.
- Manage rejection gracefully.

Goals:
- Generate qualified business leads.
- Increase outbound campaign efficiency.
- Reduce manual prospecting time.
- Improve lead quality scores.`,

    'Collections & Payment Assistant': `Create a voice AI agent for collections and payment reminders.

Personality:
- Professional, empathetic, and solution-focused.

Capabilities:
- Handle payment reminders and collections.
- Process payment information securely.
- Negotiate payment plans.

Call Flow:
1. Professional greeting and account verification.
2. Explain the purpose of the call.
3. Discuss payment options and solutions.
4. Process payments or schedule arrangements.
5. Confirm next steps and follow-up.

Error Handling:
- Handle difficult conversations with empathy.
- Escalate to human agents when needed.
- Maintain compliance with regulations.

Goals:
- Improve collection rates.
- Reduce bad debt.
- Maintain positive customer relationships.
- Ensure regulatory compliance.`,

    'Recruitment Assistant': `Create a voice AI agent for recruitment and workforce management.

Personality:
- Professional, engaging, and efficient.

Capabilities:
- Screen candidates and conduct initial interviews.
- Schedule interviews and assessments.
- Provide information about positions.

Call Flow:
1. Professional greeting and introduction.
2. Verify candidate information and interest.
3. Conduct initial screening questions.
4. Explain next steps in the process.
5. Schedule follow-up interviews.

Error Handling:
- Handle candidate questions professionally.
- Escalate complex queries to HR team.
- Manage scheduling conflicts.

Goals:
- Streamline recruitment process.
- Improve candidate experience.
- Reduce time-to-hire.
- Increase hiring efficiency.`,

    'Travel Assistant': `Create a voice AI agent for travel booking and planning.

Personality:
- Helpful, knowledgeable, and enthusiastic.

Capabilities:
- Book hotels, flights, and transportation.
- Provide travel recommendations.
- Handle itinerary changes.

Call Flow:
1. Warm greeting and travel inquiry.
2. Understand travel requirements and preferences.
3. Present booking options and recommendations.
4. Process reservations and confirmations.
5. Provide travel tips and support.

Error Handling:
- Handle booking changes and cancellations.
- Provide alternatives when preferred options unavailable.
- Manage travel emergencies.

Goals:
- Simplify travel booking process.
- Increase booking conversion rates.
- Provide personalized travel experiences.
- Reduce customer service workload.`,

    'Education Counselor': `Create a voice AI agent for educational counseling and admissions.

Personality:
- Supportive, knowledgeable, and encouraging.

Capabilities:
- Provide information about programs and admissions.
- Schedule counseling sessions.
- Guide through application processes.

Call Flow:
1. Welcoming greeting and introduction.
2. Understand student's educational goals.
3. Provide relevant program information.
4. Explain admission requirements and timelines.
5. Schedule follow-up consultations.

Error Handling:
- Handle complex academic questions professionally.
- Escalate to human counselors when needed.
- Provide accurate and up-to-date information.

Goals:
- Improve student enrollment rates.
- Provide accessible educational guidance.
- Streamline admissions process.
- Support student success.`,
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

  //  Allthe testimonials quote stores as an array of object to loop :---

  const testimonials = [
    {
      quote: 'Love the platform!',
      author: 'Lead Designer',
      company: '',
    },
    {
      quote: 'It just works!!',
      author: 'CMO',
      company: 'Pizza Chain',
    },
    {
      quote: "I love this product, it's Bolt for Voice AI.",
      author: 'VP Engineering',
      company: 'Capgemini',
    },
    {
      quote:
        'This is the kind of tool that makes Voice AI usable for everyone, not just engineers.',
      author: 'Akhilender Kaukuntla',
      company: 'KAYA AI',
    },
    {
      quote:
        "This was different — this was compassion engineered into code. One of the most emotionally intelligent AI platforms I've ever touched.",
      author: 'Jarron Sorrell',
      company: 'Sorrell Holdings LLC',
    },
  ];

  const toggleCard = (cardId) => {
    setExpandedCards((prev) => {
      // If the clicked card is already open, close it
      if (prev[cardId]) {
        const newState = { ...prev };
        delete newState[cardId];
        return newState;
      }
      // Otherwise, close all others and open only the clicked one
      return { [cardId]: true };
    });
  };

  // Add this function after your existing functions (around line 234)

  const handleTemplateClick = (templateTitle) => {
    const prompt = templatePrompts[templateTitle];
    if (prompt) {
      setPrompt(prompt);
      // Optional: Scroll to the prompt box
      document.querySelector('textarea').scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <div id="ai-agent-page  " className="flex flex-col gap-4 pt-5  ">
      {/* Hero + Prompt */}
      <div className="bg-background">
        <Container>
          <div className="text-center pb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Create your <span className="text-primary">Free</span> Voice{' '}
              <span className="text-primary">AI</span> Assistant
            </h1>
            <p className="text-xl text-muted-foreground">
              Build, test, and ship reliable voice AI assistants just by
              prompting.
            </p>
          </div>
          {/* // Update the prompt box section (around line 518-540) */}
          {/* Prompt box */}
          <div className="max-w-6xl  mx-auto mb-6 ">
            <div className="relative min-h-[200px] rounded-lg shadow-[0_0_25px_rgba(59,130,246,0.5)] focus-within:border-2 focus-within:border-[#408bff]">
              {/* Text Content Area - Fixed height with scroll */}
              <div className="px-7 pt-2 pb-2 min-h-[150px] overflow-y-auto  ">
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={typewriterText}
                  className="min-h-[140px] text-lg resize-none border-none scrollbar-hide  focus:!border-none focus:!ring-0 bg-transparent p-0"
                  variant="lg"
                />
              </div>

              {/* Buttons Area - Fixed at bottom */}
              <div className="px-6 pb-2 min-h-[50px] flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/20"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Enhance Prompt
                </Button>

                <Button
                  size="lg"
                  disabled={!prompt.trim() || isCreating}
                  onClick={handleCreateAgent}
                  className={`px-6 py-3 rounded-lg shadow-lg ${
                    prompt.trim() && !isCreating
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                >
                  {isCreating ? 'Creating...' : 'Create Agent'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Template Categories + Cards */}
      {/* Template Categories + Cards */}
      <Container>
        <div className="max-w-6xl mx-auto">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="flex flex-wrap items-center gap-3 lg:gap-2 bg-transparent p-0 px-2">
              {/* Label stays on first line */}
              <span className="text-md font-semibold text-foreground/90 select-none">
                Template Categories:
              </span>

              {/* Tabs container - goes to second line on mobile */}
              <div className="flex flex-wrap items-center gap-2">
                <TabsTrigger
                  value="popular"
                  className="
            h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
            hover:bg-muted/80
            data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
            data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
          "
                >
                  Popular
                </TabsTrigger>

                <TabsTrigger
                  value="sales"
                  className="
            h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
            hover:bg-muted/80
            data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
            data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
          "
                >
                  Sales
                </TabsTrigger>

                <TabsTrigger
                  value="customer"
                  className="
            h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
            hover:bg-muted/80
            data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
            data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
          "
                >
                  Customer Experience
                </TabsTrigger>

                <TabsTrigger
                  value="business"
                  className="
            h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
            hover:bg-muted/80
            data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
            data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
          "
                >
                  Business
                </TabsTrigger>
              </div>
            </TabsList>

            {/* Content */}
            <TabsContent value={activeTab} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates[activeTab]?.map((template, idx) => (
                  <TemplateCard
                    key={idx}
                    icon={template.icon}
                    title={template.title}
                    description={template.description}
                    onClick={handleTemplateClick}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
      {/* End of Template Categories + Cards */}{' '}
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
      {/* How it Works Section */}
      <section className="px-20 py-10 border-t border-border/30">
        <Container>
          <SectionHeader
            badge="Simple Process"
            title="How it Works"
            subtitle="Create and deploy your Voice AI assistant in five simple steps"
          />
          {/* Desktop Layout - All cards in one row, expanded content at bottom */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-4">
              {/* Step 1: Write */}
              <StepCard
                number="1"
                icon={PenLine}
                title="Write"
                description="Describe what type of Voice AI assistant you want"
                isExpanded={expandedCards.step1}
                onClick={() => toggleCard('step1')}
              />

              {/* Step 2: Test */}
              <StepCard
                number="2"
                icon={FlaskConical}
                title="Test"
                description="Try out your assistant and see how it performs"
                isExpanded={expandedCards.step2}
                onClick={() => toggleCard('step2')}
              />

              {/* Step 3: Add Functionalities */}
              <StepCard
                number="3"
                icon={Puzzle}
                title="Add Functionalities"
                description="Enhance through chat and drag-and-drop"
                isExpanded={expandedCards.step3}
                onClick={() => toggleCard('step3')}
              />

              {/* Step 4: Deploy */}
              <StepCard
                number="4"
                icon={Rocket}
                title="Deploy"
                description="Make your assistant available to your users"
                isExpanded={expandedCards.step4}
                onClick={() => toggleCard('step4')}
              />

              {/* Step 5: Observe & Monitor */}
              <StepCard
                number="5"
                icon={ChartLine}
                title="Observe & Monitor"
                description="Track performance and make improvements"
                isExpanded={expandedCards.step5}
                onClick={() => toggleCard('step5')}
              />
            </div>

            {/* Desktop Expanded Content - All Steps */}
            {expandedCards.step1 && (
              <ExpandedContentWrapper
                title="Create Voice AI Assistants with Natural Language"
                subtitle="Simply describe what you want your Voice AI assistant to do, and we'll build it for you."
              >
                <ExpandedContentCard
                  icon={MessageCircle}
                  title="Conversational Creation"
                  description="Build your assistant through natural conversation – just chat with our platform about what you need."
                />
                <ExpandedContentCard
                  icon={MousePointer}
                  title="Drag-and-Drop Interface"
                  description="Fine‑tune your assistant's capabilities with our intuitive drag‑and‑drop editor."
                />
                <ExpandedContentCard
                  icon={Layers}
                  title="Pre‑built Templates"
                  description="Start with industry‑specific templates and customize to your needs."
                />
              </ExpandedContentWrapper>
            )}

            {expandedCards.step2 && (
              <ExpandedContentWrapper
                title="Test Your Assistant in Real Scenarios"
                subtitle="Ensure your Voice AI assistant performs perfectly before deployment."
              >
                <ExpandedContentCard
                  icon={MessageCircle}
                  title="Test by chatting with the assistant"
                  description="Interact directly to see how it handles conversations in real-time."
                />
                <ExpandedContentCard
                  icon={Users}
                  title="Simulate 1000+ scenarios"
                  description="Automatically test against thousands of potential user interactions."
                />
                <ExpandedContentCard
                  icon={ChartLine}
                  title="Evaluate performance"
                  description="Measure accuracy, response time, and user satisfaction."
                />
              </ExpandedContentWrapper>
            )}

            {expandedCards.step3 && (
              <ExpandedContentWrapper
                title="Extend Your Agent's Capabilities"
                subtitle="Add powerful features to make your Voice AI assistant even more capable."
                gridCols="md:grid-cols-4"
              >
                <ExpandedContentCard
                  icon={Layers}
                  title="Enhance via node library"
                  description="Add pre‑built capabilities from our extensive library."
                />
                <ExpandedContentCard
                  icon={MessageSquareText}
                  title="Add Knowledgebase"
                  description="Connect documentation, FAQs, and other sources."
                />
                <ExpandedContentCard
                  icon={Puzzle}
                  title="Integration marketplace"
                  description="Connect to CRMs, calendars, and business tools."
                />
                <ExpandedContentCard
                  icon={Workflow}
                  title="Tooling through API calls"
                  description="Extend capabilities by connecting to external APIs."
                />
              </ExpandedContentWrapper>
            )}

            {expandedCards.step4 && (
              <ExpandedContentWrapper
                title="Go Live with One Click"
                subtitle="Deploy to production environments instantly."
              >
                <ExpandedContentCard
                  icon={Rocket}
                  title="Instant Deployment"
                  description="Push live with a single click — no technical setup."
                />
                <ExpandedContentCard
                  icon={Phone}
                  title="Purchase phone numbers"
                  description="Get dedicated numbers in multiple regions."
                />
                <ExpandedContentCard
                  icon={Workflow}
                  title="Scalable Infrastructure"
                  description="Handle thousands of simultaneous conversations."
                />
              </ExpandedContentWrapper>
            )}

            {expandedCards.step5 && (
              <ExpandedContentWrapper
                title="Gain Insights and Continuously Improve"
                subtitle="Monitor performance and optimize based on real data."
              >
                <ExpandedContentCard
                  icon={ChartLine}
                  title="Analytics Dashboard"
                  description="Track call volume, resolution rate, and satisfaction."
                />
                <ExpandedContentCard
                  icon={FileText}
                  title="Logs and Traces"
                  description="Get span-level visibility of real-time performance."
                />
                <ExpandedContentCard
                  icon={Star}
                  title="Conversation Quality Scores"
                  description="Define custom metrics to evaluate and improve quality."
                />
              </ExpandedContentWrapper>
            )}
          </div>

          {/* Mobile Layout - Cards stacked vertically with expanded content below each */}
          <div className="block lg:hidden space-y-4">
            {/* Step 1: Write */}
            <div>
              <StepCard
                number="1"
                icon={PenLine}
                title="Write"
                description="Describe what type of Voice AI assistant you want"
                isExpanded={expandedCards.step1}
                onClick={() => toggleCard('step1')}
              />

              {/* Step 1 Expanded Content - Mobile */}
              {expandedCards.step1 && (
                <ExpandedContentWrapper
                  title="Create Voice AI Assistants with Natural Language"
                  subtitle="Simply describe what you want your Voice AI assistant to do, and we'll build it for you."
                  gridCols="grid-cols-1"
                >
                  <ExpandedContentCard
                    icon={MessageCircle}
                    title="Conversational Creation"
                    description="Build your assistant through natural conversation – just chat with our platform about what you need."
                  />
                  <ExpandedContentCard
                    icon={MousePointer}
                    title="Drag-and-Drop Interface"
                    description="Fine‑tune your assistant's capabilities with our intuitive drag‑and‑drop editor."
                  />
                  <ExpandedContentCard
                    icon={Layers}
                    title="Pre‑built Templates"
                    description="Start with industry‑specific templates and customize to your needs."
                  />
                </ExpandedContentWrapper>
              )}
            </div>

            {/* Step 2: Test */}
            <div>
              <StepCard
                number="2"
                icon={FlaskConical}
                title="Test"
                description="Try out your assistant and see how it performs"
                isExpanded={expandedCards.step2}
                onClick={() => toggleCard('step2')}
              />

              {/* Step 2 Expanded Content - Mobile */}
              {expandedCards.step2 && (
                <ExpandedContentWrapper
                  title="Test Your Assistant in Real Scenarios"
                  subtitle="Ensure your Voice AI assistant performs perfectly before deployment."
                  gridCols="grid-cols-1"
                >
                  <ExpandedContentCard
                    icon={MessageCircle}
                    title="Test by chatting with the assistant"
                    description="Interact directly to see how it handles conversations in real-time."
                  />
                  <ExpandedContentCard
                    icon={Users}
                    title="Simulate 1000+ scenarios"
                    description="Automatically test against thousands of potential user interactions."
                  />
                  <ExpandedContentCard
                    icon={ChartLine}
                    title="Evaluate performance"
                    description="Measure accuracy, response time, and user satisfaction."
                  />
                </ExpandedContentWrapper>
              )}
            </div>

            {/* Step 3: Add Functionalities */}
            <div>
              <StepCard
                number="3"
                icon={Puzzle}
                title="Add Functionalities"
                description="Enhance through chat and drag-and-drop"
                isExpanded={expandedCards.step3}
                onClick={() => toggleCard('step3')}
              />

              {/* Step 3 Expanded Content - Mobile */}
              {expandedCards.step3 && (
                <ExpandedContentWrapper
                  title="Extend Your Agent's Capabilities"
                  subtitle="Add powerful features to make your Voice AI assistant even more capable."
                  gridCols="grid-cols-1"
                >
                  <ExpandedContentCard
                    icon={Layers}
                    title="Enhance via node library"
                    description="Add pre‑built capabilities from our extensive library."
                  />
                  <ExpandedContentCard
                    icon={MessageSquareText}
                    title="Add Knowledgebase"
                    description="Connect documentation, FAQs, and other sources."
                  />
                  <ExpandedContentCard
                    icon={Puzzle}
                    title="Integration marketplace"
                    description="Connect to CRMs, calendars, and business tools."
                  />
                  <ExpandedContentCard
                    icon={Workflow}
                    title="Tooling through API calls"
                    description="Extend capabilities by connecting to external APIs."
                  />
                </ExpandedContentWrapper>
              )}
            </div>

            {/* Step 4: Deploy */}
            <div>
              <StepCard
                number="4"
                icon={Rocket}
                title="Deploy"
                description="Make your assistant available to your users"
                isExpanded={expandedCards.step4}
                onClick={() => toggleCard('step4')}
              />

              {/* Step 4 Expanded Content - Mobile */}
              {expandedCards.step4 && (
                <ExpandedContentWrapper
                  title="Go Live with One Click"
                  subtitle="Deploy to production environments instantly."
                  gridCols="grid-cols-1"
                >
                  <ExpandedContentCard
                    icon={Rocket}
                    title="Instant Deployment"
                    description="Push live with a single click — no technical setup."
                  />
                  <ExpandedContentCard
                    icon={Phone}
                    title="Purchase phone numbers"
                    description="Get dedicated numbers in multiple regions."
                  />
                  <ExpandedContentCard
                    icon={Workflow}
                    title="Scalable Infrastructure"
                    description="Handle thousands of simultaneous conversations."
                  />
                </ExpandedContentWrapper>
              )}
            </div>

            {/* Step 5: Observe & Monitor */}
            <div>
              <StepCard
                number="5"
                icon={ChartLine}
                title="Observe & Monitor"
                description="Track performance and make improvements"
                isExpanded={expandedCards.step5}
                onClick={() => toggleCard('step5')}
              />

              {/* Step 5 Expanded Content - Mobile */}
              {expandedCards.step5 && (
                <ExpandedContentWrapper
                  title="Gain Insights and Continuously Improve"
                  subtitle="Monitor performance and optimize based on real data."
                  gridCols="grid-cols-1"
                >
                  <ExpandedContentCard
                    icon={ChartLine}
                    title="Analytics Dashboard"
                    description="Track call volume, resolution rate, and satisfaction."
                  />
                  <ExpandedContentCard
                    icon={FileText}
                    title="Logs and Traces"
                    description="Get span-level visibility of real-time performance."
                  />
                  <ExpandedContentCard
                    icon={Star}
                    title="Conversation Quality Scores"
                    description="Define custom metrics to evaluate and improve quality."
                  />
                </ExpandedContentWrapper>
              )}
            </div>
          </div>
        </Container>
      </section>
      {/* Testimonials Section */}
      <section className="py-10 border-t border-border/30">
        <Container className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl 2xl:max-w-[1600px] text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
            What Our Users Say
          </h2>

          <div className="relative w-full">
            <div className="overflow-hidden">
              <div
                className="flex w-full transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((t) => (
                  <div key={t.id} className="w-full flex-shrink-0">
                    <div className="px-4 sm:px-6 md:px-8">
                      <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-transparent flex flex-col items-center">
                        <p className="text-base sm:text-lg md:text-xl italic text-muted-foreground mb-3 max-w-2xl leading-relaxed">
                          "{t.quote}"
                        </p>
                        <div className="flex flex-col items-center leading-tight">
                          <p className="text-xs sm:text-sm md:text-base text-foreground/90">
                            {t.author}
                          </p>
                          {t.title ? (
                            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                              {t.title}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center mt-4 sm:mt-5 gap-2 sm:gap-3">
              <button
                className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-background/60 hover:bg-background/80 grid place-items-center"
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1,
                  )
                }
                aria-label="Previous"
              >
                <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>

              <div className="flex items-center gap-1 sm:gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      idx === currentTestimonial
                        ? 'bg-primary w-3 sm:w-4'
                        : 'bg-muted-foreground/50 w-1.5 sm:w-2'
                    }`}
                    onClick={() => setCurrentTestimonial(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-background/60 hover:bg-background/80 grid place-items-center"
                onClick={() =>
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length,
                  )
                }
                aria-label="Next"
              >
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        </Container>
      </section>
      {/* Key Features Section */}
      <section className="px-20 py-10 border-t border-border/30">
        <Container>
          <SectionHeader
            badge="Key Features"
            title="Build high quality Voice AI assistants in minutes"
            highlightedText="Voice AI"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-16">
              <FeaturesCard
                icon={BrainCircuit}
                title="Think it. Refine it."
                description="Simply describe your voice AI assistant in plain text, then watch us do the rest. Building voice AI assistants is easier than ever before."
              />

              <FeaturesCard
                icon={MessageSquareText}
                title="Prompt to configure and edit."
                description="Just write in text what changes you want made to your voice AI assistant. Ask in text to configure 100s of voices, latest LLMs, capabilities like call transfers."
              />

              <FeaturesCard
                icon={Workflow}
                title="Workflow support"
                description="Build reliable voice AI assistants through rigorous simulated testing, real-time observability to track issues."
              />
            </div>

            {/* Demo Carousel */}
            <DemoCarousel autoPlay={true} interval={4000} />
          </div>
        </Container>
      </section>
      {/* Statistics Section */}
      <section className=" px-20 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border-none transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text mb-2">
                <CounterOnView end={150000} duration={1600} suffix="K+" />
              </h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                MINUTES
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm  transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text mb-2">
                <CounterOnView end={50000} duration={1600} suffix="K+" />
              </h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                MESSAGES SENT
              </p>
            </div>
          </div>
        </Container>
      </section>
      {/* Integrations & Partners + Call to Action (final) */}
      <section className="py-10 border-t border-border/30">
        <Container>
          {/* Header */}

          <SectionHeader
            badge="Integrations"
            title="     Build with Callix AI"
            highlightedText="Voice AI"
            subtitle="Seamless integrations. Fast setup. Production‑ready reliability."
          />

          {/* Brand / Preview Image */}
          <div className="group relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-border/50 bg-card/60 transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(64,139,255,0.45)]">
            {/* height reduced ~20% vs 16/9 → 16/7 */}
            <div className="aspect-[16/6] w-full bg-background/50">
              <img
                src={CallixAiImage}
                alt="Callix AI"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Learn More button */}

          <div className="flex justify-center mt-10 mb-24">
            <Button
              variant="outline"
              className="group h-11 min-w-[320px] px-5 rounded-lg border-primary/30  hover:bg-primary/10 inline-flex items-center justify-center"
              onClick={() => navigate('/ai-agent/integrations')}
            >
              <span className="mr-2">Learn More About Integrations</span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-400 ease-out group-hover:translate-x-1 group-hover:scale-110" />
            </Button>
          </div>
          {/* Call to action buttons */}
          {/* Call to action buttons */}
          <div className="text-center mt-2 mb-2">
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button
                onClick={scrollToTop}
                className="h-11 min-w-[220px] px-5 rounded-lg bg-primary hover:bg-primary/90 inline-flex items-center justify-center"
              >
                Get Started for Free
              </Button>

              <Button
                onClick={() => navigate('/ai-agent/contact-us')}
                variant="outline"
                className="h-11 min-w-[220px] px-5 rounded-lg border-primary/20 hover:bg-primary/10 inline-flex items-center justify-center"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
      {/* Original Footer */}
      {/* ------------------Loading Modal ------------------------ */}
      {isCreating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur - This will block all interactions */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={(e) => e.preventDefault()} // Prevent any clicks
            onScroll={(e) => e.preventDefault()} // Prevent scrolling
            style={{
              touchAction: 'none', // Disable touch gestures
              userSelect: 'none', // Disable text selection
              pointerEvents: 'auto', // Ensure it captures all pointer events
            }}
          ></div>

          {/* Loading content */}
          <div className="relative z-10 flex flex-col items-center justify-center p-8 rounded-lg shadow-lg ">
            {/* Animated Text */}
            <div className="text-white text-2xl font-bold mb-6 flex items-center">
              Creating
              <span className="animated-dots ml-1"></span>
            </div>

            {/* Loading Bar */}
            <div className="w-80 h-8 border-2 border-black rounded-md overflow-hidden relative bg-white">
              <div
                className="absolute top-0 left-0 h-full bg-primary/80"
                style={{
                  width: `${loadingProgress}%`,
                  clipPath: `polygon(0 0, ${loadingProgress}% 0, ${loadingProgress - 5}% 100%, 0 100%)`,
                  transition: 'width 0.1s linear, clip-path 0.1s linear',
                }}
              ></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-bold text-sm">
                {loadingProgress}%
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAgent;
