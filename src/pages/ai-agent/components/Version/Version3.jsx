// ------- ⭐⭐⭐VERSION 3:--- AFTER I STARTED BREAKING INTO COMPONENTS:----👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼 (THIS VERSION HAS TESTIMONIAL WORKING)

// import React, { useEffect, useState } from 'react';
// import {
//   ArrowRight,
//   BrainCircuit,
//   Building,
//   Calendar,
//   ChartLine,
//   ChevronDown,
//   ChevronLeft,
//   ChevronRight,
//   ChevronUp,
//   FileText,
//   FlaskConical,
//   GraduationCap,
//   Layers,
//   MapPin,
//   MessageCircle,
//   MessageSquareText,
//   MousePointer,
//   PenLine,
//   Phone,
//   Puzzle,
//   Rocket,
//   Sparkles,
//   Star,
//   TrendingUp,
//   Users,
//   Workflow,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Textarea } from '@/components/ui/textarea';
// import { Container } from '@/components/common/container';
// import ExpandedContentCard from './components/ExpandedContentCard';
// import ExpandedContentWrapper from './components/ExpandedContentWrapper';
// import StepCard from './components/StepCard';
// import TemplateCard from './components/TemplateCard';

// const AiAgent = () => {
//   const [prompt, setPrompt] = useState('');
//   const [activeTab, setActiveTab] = useState('popular');
//   const [typewriterText, setTypewriterText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [expandedCards, setExpandedCards] = useState({});

//   useEffect(() => {
//     const interval = setInterval(continuousTypewriter, isDeleting ? 50 : 50);
//     return () => clearInterval(interval);
//   }, [typewriterText, isDeleting]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const continuousTypewriter = () => {
//     const phrases = [
//       'Create a Voice AI assistant that can answer customer queries...',
//       'Build an AI agent for sales calls to qualify leads...',
//       'Develop a voicebot for booking appointments...',
//       'Design an AI assistant to provide real-time support...',
//     ];

//     const currentPhrase = phrases[0];
//     if (isDeleting) {
//       if (typewriterText.length > 0) {
//         setTypewriterText(typewriterText.slice(0, -1));
//       } else {
//         setIsDeleting(false);
//       }
//     } else {
//       if (typewriterText.length < currentPhrase.length) {
//         setTypewriterText(currentPhrase.slice(0, typewriterText.length + 1));
//       } else {
//         setTimeout(() => setIsDeleting(true), 1500);
//       }
//     }
//   };

//   const toggleCard = (cardId) => {
//     setExpandedCards((prev) => {
//       if (prev[cardId]) {
//         return {};
//       }
//       return { [cardId]: true };
//     });
//   };

//   const templates = {
//     popular: [
//       {
//         icon: Calendar,
//         title: 'Appointment Scheduler',
//         description:
//           'Book and manage appointments seamlessly with a voice AI assistant.',
//       },
//       {
//         icon: TrendingUp,
//         title: 'Sales Representative',
//         description:
//           'Create a knowledgeable sales assistant that can provide product information, pricing details, and handle purchase...',
//       },
//       {
//         icon: Star,
//         title: 'Product Specialist',
//         description:
//           'Create a product expert that can provide detailed information about specific products, features, and...',
//       },
//       {
//         icon: Phone,
//         title: 'Feedback & Survey Assistant',
//         description:
//           'Conduct post-purchase surveys and service quality checks with multilingual support.',
//       },
//     ],
//     sales: [
//       {
//         icon: TrendingUp,
//         title: 'Sales Representative',
//         description:
//           'Create a knowledgeable sales assistant that can provide product information, pricing details, and handle purchase...',
//       },
//       {
//         icon: Star,
//         title: 'Product Specialist',
//         description:
//           'Create a product expert that can provide detailed information about specific products, features, and...',
//       },
//       {
//         icon: Users,
//         title: 'Lead Generation Specialist',
//         description:
//           'Conduct scaled outbound campaigns for property, IT services, education, finance, and B2B sectors.',
//       },
//     ],
//     customer: [
//       {
//         icon: Phone,
//         title: 'Feedback & Survey Assistant',
//         description:
//           'Conduct post-purchase surveys and service quality checks with multilingual support.',
//       },
//       {
//         icon: Calendar,
//         title: 'Booking Assistant',
//         description:
//           'Help customers book services, appointments, or reservations.',
//       },
//       {
//         icon: MapPin,
//         title: 'Location Finder',
//         description:
//           'Guide customers to your nearest stores or service points.',
//       },
//       {
//         icon: GraduationCap,
//         title: 'Educational Support',
//         description:
//           'Provide information and support for students or learners.',
//       },
//     ],
//     business: [
//       {
//         icon: Building,
//         title: 'HR Assistant',
//         description:
//           'Answer employee questions about HR policies, benefits, and payroll.',
//       },
//       {
//         icon: Workflow,
//         title: 'IT Support Bot',
//         description:
//           'Resolve common IT issues and guide users through troubleshooting.',
//       },
//       {
//         icon: Layers,
//         title: 'Onboarding Assistant',
//         description: 'Guide new employees through the onboarding process.',
//       },
//       {
//         icon: MessageSquareText,
//         title: 'Internal Communications',
//         description: 'Disseminate company news and announcements.',
//       },
//     ],
//   };

//   const testimonials = [
//     {
//       id: 1,
//       quote:
//         'This platform transformed our customer service! Our AI assistant handles 80% of inquiries, freeing up our team for complex tasks. The natural language understanding is exceptional.',
//       author: 'Sarah Chen',
//       title: 'Head of Customer Success, TechCorp',
//       avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
//     },
//     {
//       id: 2,
//       quote:
//         'Implementing the voice AI for sales has been a game-changer. Our lead qualification process is faster and more efficient, leading to a significant boost in conversion rates.',
//       author: 'David Lee',
//       title: 'VP of Sales, Global Innovations',
//       avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
//     },
//     {
//       id: 3,
//       quote:
//         'The ease of creating and deploying a custom AI assistant was surprising. We had a functional voicebot for our internal helpdesk within days, greatly improving employee support.',
//       author: 'Maria Garcia',
//       title: 'Operations Manager, Enterprise Solutions',
//       avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
//     },
//     {
//       id: 4,
//       quote:
//         "The analytics and monitoring tools are incredibly insightful. We can track performance, identify areas for improvement, and continuously refine our AI assistant's capabilities.",
//       author: 'James Wilson',
//       title: 'Product Lead, Digital Ventures',
//       avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
//     },
//   ];

//   return (
//     <div id="ai-agent-page" className="flex flex-col gap-4 pt-5">
//       {/* Hero + Prompt */}
//       <div className="bg-background">
//         <Container>
//           <div className="text-center pb-6">
//             <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//               Create your <span className="text-primary">Free</span> Voice{' '}
//               <span className="text-primary">AI</span> Assistant
//             </h1>
//             <p className="text-xl text-muted-foreground">
//               Build, test, and ship reliable voice AI assistants just by
//               prompting.
//             </p>
//           </div>

//           {/* Prompt box */}
//           <div className="max-w-6xl mx-auto mb-6">
//             <div className="relative rounded-lg min-h-[200px] shadow-[0_0_25px_rgba(59,130,246,0.5)] focus-within:border-2 focus-within:border-[#408bff]">
//               <Textarea
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//                 placeholder={typewriterText}
//                 className="min-h-[200px] text-lg px-6 resize-none border-none focus:!border-none focus:!ring-0"
//                 variant="lg"
//               />

//               <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="border-primary/30 text-primary hover:bg-primary/10"
//                 >
//                   <Sparkles className="w-4 h-4 mr-2" />
//                   Enhance Prompt
//                 </Button>
//                 <Button
//                   size="lg"
//                   disabled={!prompt.trim()}
//                   className={`px-6 py-3 rounded-lg shadow-lg ${
//                     prompt.trim()
//                       ? 'bg-primary hover:bg-primary/90 text-white'
//                       : 'bg-gray-400 text-gray-200 cursor-not-allowed'
//                   }`}
//                 >
//                   Create Agent
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* Template Categories + Cards */}
//       <Container>
//         <div className="max-w-6xl mx-auto">
//           <Tabs
//             value={activeTab}
//             onValueChange={setActiveTab}
//             className="w-full"
//           >
//             <TabsList className="flex flex-wrap items-center gap-3 lg:gap-2 bg-transparent p-0 px-2">
//               <span className="text-md font-semibold text-foreground/90 select-none">
//                 Template Categories:
//               </span>
//               <div className="flex flex-wrap items-center gap-2">
//                 <TabsTrigger
//                   value="popular"
//                   className="h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground hover:bg-muted/80 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40 data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]"
//                 >
//                   Popular
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="sales"
//                   className="h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground hover:bg-muted/80 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40 data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]"
//                 >
//                   Sales
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="customer"
//                   className="h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground hover:bg-muted/80 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40 data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]"
//                 >
//                   Customer Experience
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="business"
//                   className="h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground hover:bg-muted/80 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40 data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]"
//                 >
//                   Business
//                 </TabsTrigger>
//               </div>
//             </TabsList>

//             <TabsContent value={activeTab} className="mt-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {templates[activeTab]?.map((template, idx) => (
//                   <TemplateCard
//                     key={idx}
//                     icon={template.icon}
//                     title={template.title}
//                     description={template.description}
//                   />
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </Container>

//       {/* How it Works Section */}
//       <section className="py-10 border-t border-border/30">
//         <Container>
//           <div className="text-center mb-12">
//             <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
//               Simple Process
//             </div>
//             <h2 className="md:text-3xl font-bold tracking-tight mb-6">
//               How it Works
//             </h2>
//             <p className="text-muted-foreground text-sm">
//               Create and deploy your Voice AI assistant in five simple steps
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//             <StepCard
//               number="1"
//               icon={PenLine}
//               title="Write"
//               description="Describe what type of Voice AI assistant you want"
//               isExpanded={expandedCards.step1}
//               onClick={() => toggleCard('step1')}
//             />

//             <StepCard
//               number="2"
//               icon={FlaskConical}
//               title="Test"
//               description="Try out your assistant and see how it performs"
//               isExpanded={expandedCards.step2}
//               onClick={() => toggleCard('step2')}
//             />

//             <StepCard
//               number="3"
//               icon={Puzzle}
//               title="Add Functionalities"
//               description="Enhance through chat and drag-and-drop"
//               isExpanded={expandedCards.step3}
//               onClick={() => toggleCard('step3')}
//             />

//             <StepCard
//               number="4"
//               icon={Rocket}
//               title="Deploy"
//               description="Make your assistant available to your users"
//               isExpanded={expandedCards.step4}
//               onClick={() => toggleCard('step4')}
//             />

//             <StepCard
//               number="5"
//               icon={ChartLine}
//               title="Observe & Monitor"
//               description="Track performance and make improvements"
//               isExpanded={expandedCards.step5}
//               onClick={() => toggleCard('step5')}
//             />
//           </div>

//           {/* Expanded Content Area */}
//           {expandedCards.step1 && (
//             <ExpandedContentWrapper
//               title="Create Voice AI Assistants with Natural Language"
//               subtitle="Simply describe what you want your Voice AI assistant to do, and we'll build it for you."
//             >
//               <ExpandedContentCard
//                 icon={MessageCircle}
//                 title="Conversational Creation"
//                 description="Build your assistant through natural conversation – just chat with our platform about what you need."
//               />
//               <ExpandedContentCard
//                 icon={MousePointer}
//                 title="Drag-and-Drop Interface"
//                 description="Fine‑tune your assistant's capabilities with our intuitive drag‑and‑drop editor."
//               />
//               <ExpandedContentCard
//                 icon={Layers}
//                 title="Pre‑built Templates"
//                 description="Start with industry‑specific templates and customize to your needs."
//               />
//             </ExpandedContentWrapper>
//           )}

//           {expandedCards.step2 && (
//             <ExpandedContentWrapper
//               title="Test Your Assistant in Real Scenarios"
//               subtitle="Ensure your Voice AI assistant performs perfectly before deployment."
//             >
//               <ExpandedContentCard
//                 icon={MessageCircle}
//                 title="Test by chatting with the assistant"
//                 description="Interact directly to see how it handles conversations in real-time."
//               />
//               <ExpandedContentCard
//                 icon={Users}
//                 title="Simulate 1000+ scenarios"
//                 description="Automatically test against thousands of potential user interactions."
//               />
//               <ExpandedContentCard
//                 icon={ChartLine}
//                 title="Evaluate performance"
//                 description="Measure accuracy, response time, and user satisfaction."
//               />
//             </ExpandedContentWrapper>
//           )}

//           {expandedCards.step3 && (
//             <ExpandedContentWrapper
//               title="Extend Your Agent's Capabilities"
//               subtitle="Add powerful features to make your Voice AI assistant even more capable."
//               gridCols="md:grid-cols-4"
//             >
//               <ExpandedContentCard
//                 icon={Layers}
//                 title="Enhance via node library"
//                 description="Add pre‑built capabilities from our extensive library."
//               />
//               <ExpandedContentCard
//                 icon={MessageSquareText}
//                 title="Add Knowledgebase"
//                 description="Connect documentation, FAQs, and other sources."
//               />
//               <ExpandedContentCard
//                 icon={Puzzle}
//                 title="Integration marketplace"
//                 description="Connect to CRMs, calendars, and business tools."
//               />
//               <ExpandedContentCard
//                 icon={Workflow}
//                 title="Tooling through API calls"
//                 description="Extend capabilities by connecting to external APIs."
//               />
//             </ExpandedContentWrapper>
//           )}

//           {expandedCards.step4 && (
//             <ExpandedContentWrapper
//               title="Go Live with One Click"
//               subtitle="Deploy to production environments instantly."
//             >
//               <ExpandedContentCard
//                 icon={Rocket}
//                 title="Instant Deployment"
//                 description="Push live with a single click — no technical setup."
//               />
//               <ExpandedContentCard
//                 icon={Phone}
//                 title="Purchase phone numbers"
//                 description="Get dedicated numbers in multiple regions."
//               />
//               <ExpandedContentCard
//                 icon={Workflow}
//                 title="Scalable Infrastructure"
//                 description="Handle thousands of simultaneous conversations."
//               />
//             </ExpandedContentWrapper>
//           )}

//           {expandedCards.step5 && (
//             <ExpandedContentWrapper
//               title="Gain Insights and Continuously Improve"
//               subtitle="Monitor performance and optimize based on real data."
//             >
//               <ExpandedContentCard
//                 icon={ChartLine}
//                 title="Analytics Dashboard"
//                 description="Track call volume, resolution rate, and satisfaction."
//               />
//               <ExpandedContentCard
//                 icon={FileText}
//                 title="Logs and Traces"
//                 description="Get span-level visibility of real-time performance."
//               />
//               <ExpandedContentCard
//                 icon={Star}
//                 title="Conversation Quality Scores"
//                 description="Define custom metrics to evaluate and improve quality."
//               />
//             </ExpandedContentWrapper>
//           )}
//         </Container>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-10 border-t border-border/30">
//         <Container className="max-w-4xl text-center">
//           <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
//             Testimonials
//           </div>
//           <h2 className="md:text-3xl font-bold tracking-tight mb-8">
//             What Our Users Say
//           </h2>

//           <div className="relative w-full overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
//             >
//               {testimonials.map((testimonial) => (
//                 <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
//                   <Card className="p-8 bg-card/80 border border-border/50 shadow-lg flex flex-col items-center">
//                     <p className="text-lg italic text-muted-foreground mb-6 max-w-2xl">
//                       "{testimonial.quote}"
//                     </p>
//                     <div className="flex items-center gap-4">
//                       <img
//                         src={testimonial.avatar}
//                         alt={testimonial.author}
//                         className="w-12 h-12 rounded-full object-cover border-2 border-primary"
//                       />
//                       <div>
//                         <p className="font-semibold text-base">
//                           {testimonial.author}
//                         </p>
//                         <p className="text-sm text-muted-foreground">
//                           {testimonial.title}
//                         </p>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//               ))}
//             </div>

//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 rounded-full"
//               onClick={() =>
//                 setCurrentTestimonial((prev) =>
//                   prev === 0 ? testimonials.length - 1 : prev - 1,
//                 )
//               }
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/70 rounded-full"
//               onClick={() =>
//                 setCurrentTestimonial(
//                   (prev) => (prev + 1) % testimonials.length,
//                 )
//               }
//             >
//               <ChevronRight className="h-5 w-5" />
//             </Button>

//             <div className="flex justify-center mt-6 space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     index === currentTestimonial
//                       ? 'bg-primary w-4'
//                       : 'bg-muted-foreground/50 w-2'
//                   }`}
//                   onClick={() => setCurrentTestimonial(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Key Features Section */}
//       <section className="py-10 border-t border-border/30">
//         <Container>
//           <div className="text-center mb-12">
//             <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
//               Features
//             </div>
//             <h2 className="md:text-3xl font-bold tracking-tight mb-6">
//               Unlock Powerful AI Capabilities
//             </h2>
//             <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
//               Our platform provides a comprehensive suite of tools to build,
//               deploy, and manage your Voice AI assistants with ease.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="p-6 bg-card/80 border border-border/50 shadow-md text-center">
//               <BrainCircuit className="h-10 w-10 text-primary mx-auto mb-4" />
//               <h3 className="font-semibold text-xl mb-2">Advanced NLP</h3>
//               <p className="text-muted-foreground text-sm">
//                 Leverage cutting-edge Natural Language Processing for human-like
//                 conversations.
//               </p>
//             </Card>
//             <Card className="p-6 bg-card/80 border border-border/50 shadow-md text-center">
//               <Workflow className="h-10 w-10 text-primary mx-auto mb-4" />
//               <h3 className="font-semibold text-xl mb-2">
//                 Intuitive Workflow Builder
//               </h3>
//               <p className="text-muted-foreground text-sm">
//                 Design complex conversational flows with a simple drag-and-drop
//                 interface.
//               </p>
//             </Card>
//             <Card className="p-6 bg-card/80 border border-border/50 shadow-md text-center">
//               <Rocket className="h-10 w-10 text-primary mx-auto mb-4" />
//               <h3 className="font-semibold text-xl mb-2">
//                 Multi-Channel Deployment
//               </h3>
//               <p className="text-muted-foreground text-sm">
//                 Deploy your AI assistant across websites, messaging apps, and
//                 custom integrations.
//               </p>
//             </Card>
//           </div>
//         </Container>
//       </section>

//       {/* Statistics Section */}
//       <section className="py-10 relative overflow-hidden">
//         <Container>
//           <div className="text-center mb-12">
//             <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
//               Our Impact
//             </div>
//             <h2 className="md:text-3xl font-bold tracking-tight mb-6">
//               Driving Success for Businesses
//             </h2>
//             <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
//               See how our Voice AI solutions are making a difference for
//               companies worldwide.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <p className="text-4xl font-bold text-primary mb-2">95%</p>
//               <p className="text-muted-foreground text-sm">
//                 Customer Satisfaction
//               </p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-primary mb-2">3X</p>
//               <p className="text-muted-foreground text-sm">
//                 Faster Resolution Times
//               </p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-primary mb-2">70%</p>
//               <p className="text-muted-foreground text-sm">
//                 Reduction in Support Costs
//               </p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-primary mb-2">24/7</p>
//               <p className="text-muted-foreground text-sm">Availability</p>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-8 sm:py-10 px-4 w-full">
//         <Container className="text-center">
//           <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
//             Get Started
//           </div>
//           <h2 className="md:text-3xl font-bold tracking-tight mb-6">
//             Ready to Build Your Voice AI Assistant?
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
//             Join hundreds of businesses leveraging the power of AI to enhance
//             customer experience and streamline operations.
//           </p>
//           <Button size="lg">Start Building for Free</Button>
//         </Container>
//       </section>

//       {/* Footer Section */}
//       <footer className="py-10 border-t border-border/30 bg-background">
//         <Container className="text-center">
//           <p className="text-muted-foreground text-sm mb-4">
//             Trusted by leading companies worldwide
//           </p>
//           <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
//             <div className="text-muted-foreground font-semibold">Capgemini</div>
//             <div className="text-muted-foreground font-semibold">Exotel</div>
//             <div className="text-muted-foreground font-semibold">NVIDIA</div>
//             <div className="text-muted-foreground font-semibold">MG Motors</div>
//             <div className="text-muted-foreground font-semibold">
//               Heterize Infotech
//             </div>
//           </div>
//         </Container>
//       </footer>
//     </div>
//   );
// };

// export default AiAgent;
