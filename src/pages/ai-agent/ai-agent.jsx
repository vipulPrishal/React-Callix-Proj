// version 1:- :--- fully correct version ...:----👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼

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
// import TemplateCard from './components/TemplateCard';

// const AiAgent = () => {
//   const [prompt, setPrompt] = useState('');
//   const [activeTab, setActiveTab] = useState('popular');
//   const [typewriterText, setTypewriterText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   // const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [expandedCards, setExpandedCards] = useState({});
//   useEffect(() => {
//     const interval = setInterval(continuousTypewriter, isDeleting ? 50 : 50);
//     return () => clearInterval(interval);
//   }, [typewriterText, isDeleting]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

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
//     ],
//     business: [
//       {
//         icon: Calendar,
//         title: 'Appointment Scheduler',
//         description:
//           'Book and manage appointments seamlessly with a voice AI assistant.',
//       },
//       {
//         icon: FileText,
//         title: 'Collections & Payment Assistant',
//         description:
//           'Handle collections, payment reminders, and follow-ups for loans, subscriptions, and policy renewals.',
//       },
//       {
//         icon: Building,
//         title: 'Recruitment Assistant',
//         description:
//           'Handle driver recruitment, workforce scheduling, and operational calling for fleet management.',
//       },
//       {
//         icon: MapPin,
//         title: 'Travel Assistant',
//         description:
//           'Handle hotel bookings, trip planning, and itinerary management with multilingual capabilities.',
//       },
//       {
//         icon: GraduationCap,
//         title: 'Education Counselor',
//         description:
//           'Handle admission timelines, and consultation scheduling for educational institutions.',
//       },
//     ],
//   };

//   const fullText =
//     'Create a voice AI assistant that handles new membership applications at a gym.';

//   const continuousTypewriter = () => {
//     const currentText = fullText;

//     if (!isDeleting) {
//       // Typing forward
//       if (typewriterText.length < currentText.length) {
//         setTypewriterText(currentText.slice(0, typewriterText.length + 1));
//       } else {
//         // Start deleting after a pause
//         setTimeout(() => setIsDeleting(true), 1000);
//       }
//     } else {
//       // Deleting backward
//       if (typewriterText.length > 0) {
//         setTypewriterText(typewriterText.slice(0, -1));
//       } else {
//         // Start typing again
//         setIsDeleting(false);
//       }
//     }
//   };

//   //  Allthe testimonials quote stores as an array of object to loop :---

//   const testimonials = [
//     {
//       quote: 'Love the platform!',
//       author: 'Lead Designer',
//       company: '',
//     },
//     {
//       quote: 'It just works!!',
//       author: 'CMO',
//       company: 'Pizza Chain',
//     },
//     {
//       quote: "I love this product, it's Bolt for Voice AI.",
//       author: 'VP Engineering',
//       company: 'Capgemini',
//     },
//     {
//       quote:
//         'This is the kind of tool that makes Voice AI usable for everyone, not just engineers.',
//       author: 'Akhilender Kaukuntla',
//       company: 'KAYA AI',
//     },
//     {
//       quote:
//         "This was different — this was compassion engineered into code. One of the most emotionally intelligent AI platforms I've ever touched.",
//       author: 'Jarron Sorrell',
//       company: 'Sorrell Holdings LLC',
//     },
//   ];

//   const toggleCard = (cardId) => {
//     setExpandedCards((prev) => {
//       // If the clicked card is already open, close it
//       if (prev[cardId]) {
//         const newState = { ...prev };
//         delete newState[cardId];
//         return newState;
//       }
//       // Otherwise, close all others and open only the clicked one
//       return { [cardId]: true };
//     });
//   };
//   return (
//     <div
//       id="ai-agent-page  "
//       className="flex flex-col gap-4 pt-5  border-2 border-red-500"
//     >
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
//       {/* Template Categories + Cards */}
//       <Container>
//         <div className="max-w-6xl mx-auto">
//           <Tabs
//             value={activeTab}
//             onValueChange={setActiveTab}
//             className="w-full"
//           >
//             <TabsList className="flex flex-wrap items-center gap-3 lg:gap-2 bg-transparent p-0 px-2">
//               {/* Label stays on first line */}
//               <span className="text-md font-semibold text-foreground/90 select-none">
//                 Template Categories:
//               </span>

//               {/* Tabs container - goes to second line on mobile */}
//               <div className="flex flex-wrap items-center gap-2">
//                 <TabsTrigger
//                   value="popular"
//                   className="
//             h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
//             hover:bg-muted/80
//             data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
//             data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
//           "
//                 >
//                   Popular
//                 </TabsTrigger>

//                 <TabsTrigger
//                   value="sales"
//                   className="
//             h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
//             hover:bg-muted/80
//             data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
//             data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
//           "
//                 >
//                   Sales
//                 </TabsTrigger>

//                 <TabsTrigger
//                   value="customer"
//                   className="
//             h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
//             hover:bg-muted/80
//             data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
//             data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
//           "
//                 >
//                   Customer Experience
//                 </TabsTrigger>

//                 <TabsTrigger
//                   value="business"
//                   className="
//             h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
//             hover:bg-muted/80
//             data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
//             data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
//           "
//                 >
//                   Business
//                 </TabsTrigger>
//               </div>
//             </TabsList>

//             {/* Content */}
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
//       {/* End of Template Categories + Cards */}{' '}
//       <div className="text-center py-10 bg-background">
//         <Container>
//           <p className="text-muted-foreground mb-8">
//             Trusted by leading companies
//           </p>
//           <div className="flex justify-center items-center gap-8 flex-wrap">
//             <div className="text-muted-foreground font-semibold">Capgemini</div>
//             <div className="text-muted-foreground font-semibold">Exotel</div>
//             <div className="text-muted-foreground font-semibold">NVIDIA</div>
//             <div className="text-muted-foreground font-semibold">MG Motors</div>
//             <div className="text-muted-foreground font-semibold">
//               Heterize Infotech
//             </div>
//           </div>
//         </Container>
//       </div>
//       {/* Testimonials Section */}
//       {/* <section className="py-10 border-t border-border/30 relative overflow-hidden">
// //         <Container>
// //           <div className="text-center mb-12">
// //             <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
// //               Testimonials
// //             </span>
// //             <h2 className="text-3xl font-bold tracking-tight">
// //               What Our Users Say
// //             </h2>
// //           </div>

// //           <div className="max-w-4xl mx-auto">
// //             <div className="relative min-h-[200px] flex items-center justify-center">
// //               <div className="text-center transition-all duration-500 ease-in-out">
// //                 <h3 className="md:text-2xl tracking-tight mb-6 text-muted-foreground">
// //                   "{testimonials[currentTestimonial].quote}"
// //                 </h3>
// //                 <p className="text-muted-foreground text-sm">
// //                   {testimonials[currentTestimonial].author}
// //                   {testimonials[currentTestimonial].company && (
// //                     <span>, {testimonials[currentTestimonial].company}</span>
// //                   )}
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="flex justify-center items-center mt-12 gap-2">
// //               <Button
// //                 variant="ghost"
// //                 size="sm"
// //                 className="h-9 w-9"
// //                 onClick={() =>
// //                   setCurrentTestimonial((prev) =>
// //                     prev === 0 ? testimonials.length - 1 : prev - 1,
// //                   )
// //                 }
// //               >
// //                 <ChevronLeft className="h-4 w-4" />
// //               </Button>

// //               <div className="flex gap-2">
// //                 {testimonials.map((_, index) => (
// //                   <button
// //                     key={index}
// //                     className={`w-2.5 h-2.5 rounded-full transition-all ${
// //                       index === currentTestimonial
// //                         ? 'bg-primary'
// //                         : 'bg-muted hover:bg-muted-foreground'
// //                     }`}
// //                     onClick={() => setCurrentTestimonial(index)}
// //                     aria-label={`Go to testimonial ${index + 1}`}
// //                   />
// //                 ))}
// //               </div>

// //               <Button
// //                 variant="ghost"
// //                 size="sm"
// //                 className="h-9 w-9"
// //                 onClick={() =>
// //                   setCurrentTestimonial(
// //                     (prev) => (prev + 1) % testimonials.length,
// //                   )
// //                 }
// //               >
// //                 <ChevronRight className="h-4 w-4" />
// //               </Button>
// //             </div>
// //           </div>
// //         </Container>
// //       </section> */}
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

//           {/* Desktop Layout - All cards in one row, expanded content at bottom */}
//           <div className="hidden md:block">
//             <div className="grid grid-cols-5 gap-4">
//               {/* Step 1: Write */}
//               <Card
//                 className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
//                 onClick={() => toggleCard('step1')}
//               >
//                 <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                   1
//                 </div>
//                 <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                   <PenLine className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   Write
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-2">
//                   Describe what type of Voice AI assistant you want
//                 </p>
//                 <div className="text-primary mt-auto">
//                   {expandedCards.step1 ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </div>
//               </Card>

//               {/* Step 2: Test */}
//               <Card
//                 className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
//                 onClick={() => toggleCard('step2')}
//               >
//                 <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                   2
//                 </div>
//                 <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                   <FlaskConical className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">Test</h3>
//                 <p className="text-muted-foreground text-sm mb-2">
//                   Try out your assistant and see how it performs
//                 </p>
//                 <div className="text-primary mt-auto">
//                   {expandedCards.step2 ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </div>
//               </Card>

//               {/* Step 3: Add Functionalities */}
//               <Card
//                 className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
//                 onClick={() => toggleCard('step3')}
//               >
//                 <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                   3
//                 </div>
//                 <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                   <Puzzle className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   Add Functionalities
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-2">
//                   Enhance through chat and drag-and-drop
//                 </p>
//                 <div className="text-primary mt-auto">
//                   {expandedCards.step3 ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </div>
//               </Card>

//               {/* Step 4: Deploy */}
//               <Card
//                 className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
//                 onClick={() => toggleCard('step4')}
//               >
//                 <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                   4
//                 </div>
//                 <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                   <Rocket className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   Deploy
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-2">
//                   Make your assistant available to your users
//                 </p>
//                 <div className="text-primary mt-auto">
//                   {expandedCards.step4 ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </div>
//               </Card>

//               {/* Step 5: Observe & Monitor */}
//               <Card
//                 className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
//                 onClick={() => toggleCard('step5')}
//               >
//                 <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                   5
//                 </div>
//                 <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                   <ChartLine className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   Observe & Monitor
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-2">
//                   Track performance and make improvements
//                 </p>
//                 <div className="text-primary mt-auto">
//                   {expandedCards.step5 ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </div>
//               </Card>
//             </div>

//             {/* Desktop Expanded Content - Fixed Layout */}
//             {expandedCards.step1 && (
//               <div className="mt-8">
//                 <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
//                   <div className="text-left mb-8">
//                     <h3 className="text-2xl font-bold text-foreground mb-3">
//                       Create Voice AI Assistants with Natural Language
//                     </h3>
//                     <p className="text-muted-foreground text-lg max-w-4xl ">
//                       Simply describe what you want your Voice AI assistant to
//                       do, and we'll build it for you.
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-3 gap-6">
//                     <Card className="p-6 bg-card/80 border border-border/50 rounded-xl">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <MessageCircle className="h-6 w-6 text-primary" />
//                         </div>
//                         <h4 className="font-semibold text-lg">
//                           Conversational Creation
//                         </h4>
//                       </div>
//                       <p className="text-muted-foreground text-sm leading-relaxed">
//                         Build your assistant through natural conversation – just
//                         chat with our platform about what you need.
//                       </p>
//                     </Card>

//                     <Card className="p-6 bg-card/80 border border-border/50 rounded-xl">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <MousePointer className="h-6 w-6 text-primary" />
//                         </div>
//                         <h4 className="font-semibold text-lg">
//                           Drag-and-Drop Interface
//                         </h4>
//                       </div>
//                       <p className="text-muted-foreground text-sm leading-relaxed">
//                         Fine‑tune your assistant's capabilities with our
//                         intuitive drag‑and‑drop editor.
//                       </p>
//                     </Card>

//                     <Card className="p-6 bg-card/80 border border-border/50 rounded-xl">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <Layers className="h-6 w-6 text-primary" />
//                         </div>
//                         <h4 className="font-semibold text-lg">
//                           Pre‑built Templates
//                         </h4>
//                       </div>
//                       <p className="text-muted-foreground text-sm leading-relaxed">
//                         Start with industry‑specific templates and customize to
//                         your needs.
//                       </p>
//                     </Card>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {expandedCards.step2 && (
//               <div className="mt-8">
//                 <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
//                   <div className="text-left mb-8">
//                     <h3 className="text-2xl font-bold text-foreground mb-3">
//                       Test Your Assistant in Real Scenarios
//                     </h3>
//                     <p className="text-muted-foreground text-lg max-w-4xl ">
//                       Ensure your Voice AI assistant performs perfectly before
//                       deployment.
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-3 gap-6">
//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <MessageCircle className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Test by chatting with the assistant
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Interact directly to see how it handles conversations in
//                         real-time.
//                       </p>
//                     </Card>

//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <Users className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Simulate 1000+ scenarios
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Automatically test against thousands of potential user
//                         interactions.
//                       </p>
//                     </Card>

//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <ChartLine className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Evaluate performance
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Measure accuracy, response time, and user satisfaction.
//                       </p>
//                     </Card>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {expandedCards.step3 && (
//               <div className="mt-8">
//                 <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
//                   <div className="text-left mb-8">
//                     <h3 className="text-2xl font-bold text-foreground mb-3">
//                       Extend Your Agent's Capabilities
//                     </h3>
//                     <p className="text-muted-foreground text-lg max-w-4xl ">
//                       Add powerful features to make your Voice AI assistant even
//                       more capable.
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-4 gap-6">
//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <Layers className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Enhance via node library
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Add pre‑built capabilities from our extensive library.
//                       </p>
//                     </Card>

//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <MessageSquareText className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Add Knowledgebase
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Connect documentation, FAQs, and other sources.
//                       </p>
//                     </Card>

//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <Puzzle className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Integration marketplace
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Connect to CRMs, calendars, and business tools.
//                       </p>
//                     </Card>

//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <Workflow className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Tooling through API calls
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Extend capabilities by connecting to external APIs.
//                       </p>
//                     </Card>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {expandedCards.step4 && (
//               <div className="mt-8">
//                 <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
//                   <div className="text-left mb-8">
//                     <h3 className="text-2xl font-bold text-foreground mb-3">
//                       Go Live with One Click
//                     </h3>
//                     <p className="text-muted-foreground text-lg max-w-4xl">
//                       Deploy to production environments instantly.
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-3 gap-6">
//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <Rocket className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Instant Deployment
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Push live with a single click — no technical setup.
//                       </p>
//                     </Card>

//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <Phone className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Purchase phone numbers
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Get dedicated numbers in multiple regions.
//                       </p>
//                     </Card>

//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <Workflow className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Scalable Infrastructure
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Handle thousands of simultaneous conversations.
//                       </p>
//                     </Card>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {expandedCards.step5 && (
//               <div className="mt-8">
//                 <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
//                   <div className="text-left mb-8">
//                     <h3 className="text-2xl font-bold text-foreground mb-3">
//                       Gain Insights and Continuously Improve
//                     </h3>
//                     <p className="text-muted-foreground text-lg max-w-4xl">
//                       Monitor performance and optimize based on real data.
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-3 gap-6">
//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <ChartLine className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Analytics Dashboard
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Track call volume, resolution rate, and satisfaction.
//                       </p>
//                     </Card>

//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <FileText className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Logs and Traces
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Get span-level visibility of real-time performance.
//                       </p>
//                     </Card>

//                     <Card className="p-6 border border-border/50">
//                       <div className="flex items-center gap-4 mb-3">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <Star className="h-6 w-6 text-primary" />
//                         </div>
//                         <h5 className="font-semibold text-lg">
//                           Conversation Quality Scores
//                         </h5>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         Define custom metrics to evaluate and improve quality.
//                       </p>
//                     </Card>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Mobile Layout - Cards stacked vertically with expanded content below each */}
//           <div className="block md:hidden space-y-4">
//             {/* Step 1: Write */}
//             <div>
//               <Card
//                 className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
//                 onClick={() => toggleCard('step1')}
//               >
//                 <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                   1
//                 </div>
//                 <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                   <PenLine className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   Write
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-2">
//                   Describe what type of Voice AI assistant you want
//                 </p>
//                 <div className="text-primary mt-auto">
//                   {expandedCards.step1 ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </div>
//               </Card>

//               {/* Step 1 Expanded Content - Mobile */}
//               {expandedCards.step1 && (
//                 <div className="mt-4">
//                   <div className="bg-card/50 border border-primary/30 rounded-xl p-4">
//                     <div className="text-left mb-6">
//                       <h3 className="text-xl font-bold text-foreground mb-2">
//                         Create Voice AI Assistants with Natural Language
//                       </h3>
//                       <p className="text-muted-foreground text-sm">
//                         Simply describe what you want your Voice AI assistant to
//                         do, and we'll build it for you.
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-1 gap-4">
//                       <Card className="p-4 bg-card/80 border border-border/50 rounded-xl">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <MessageCircle className="h-5 w-5 text-primary" />
//                           </div>
//                           <h4 className="font-semibold text-base">
//                             Conversational Creation
//                           </h4>
//                         </div>
//                         <p className="text-muted-foreground text-xs leading-relaxed">
//                           Build your assistant through natural conversation –
//                           just chat with our platform about what you need.
//                         </p>
//                       </Card>

//                       <Card className="p-4 bg-card/80 border border-border/50 rounded-xl">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <MousePointer className="h-5 w-5 text-primary" />
//                           </div>
//                           <h4 className="font-semibold text-base">
//                             Drag-and-Drop Interface
//                           </h4>
//                         </div>
//                         <p className="text-muted-foreground text-xs leading-relaxed">
//                           Fine‑tune your assistant's capabilities with our
//                           intuitive drag‑and‑drop editor.
//                         </p>
//                       </Card>

//                       <Card className="p-4 bg-card/80 border border-border/50 rounded-xl">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <Layers className="h-5 w-5 text-primary" />
//                           </div>
//                           <h4 className="font-semibold text-base">
//                             Pre‑built Templates
//                           </h4>
//                         </div>
//                         <p className="text-muted-foreground text-xs leading-relaxed">
//                           Start with industry‑specific templates and customize
//                           to your needs.
//                         </p>
//                       </Card>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Step 2: Test */}
//             <div>
//               <Card
//                 className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
//                 onClick={() => toggleCard('step2')}
//               >
//                 <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                   2
//                 </div>
//                 <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                   <FlaskConical className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">Test</h3>
//                 <p className="text-muted-foreground text-sm mb-2">
//                   Try out your assistant and see how it performs
//                 </p>
//                 <div className="text-primary mt-auto">
//                   {expandedCards.step2 ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </div>
//               </Card>

//               {/* Step 2 Expanded Content - Mobile */}
//               {expandedCards.step2 && (
//                 <div className="mt-4">
//                   <div className="bg-card/50 border border-primary/30 rounded-xl p-4">
//                     <div className="text-left mb-6">
//                       <h3 className="text-xl font-bold text-foreground mb-2">
//                         Test Your Assistant in Real Scenarios
//                       </h3>
//                       <p className="text-muted-foreground text-sm">
//                         Ensure your Voice AI assistant performs perfectly before
//                         deployment.
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-1 gap-4">
//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <MessageCircle className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Test by chatting with the assistant
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Interact directly to see how it handles conversations
//                           in real-time.
//                         </p>
//                       </Card>

//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <Users className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Simulate 1000+ scenarios
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Automatically test against thousands of potential user
//                           interactions.
//                         </p>
//                       </Card>

//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <ChartLine className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Evaluate performance
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Measure accuracy, response time, and user
//                           satisfaction.
//                         </p>
//                       </Card>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Step 3: Add Functionalities */}
//             <div>
//               <Card
//                 className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
//                 onClick={() => toggleCard('step3')}
//               >
//                 <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                   3
//                 </div>
//                 <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                   <Puzzle className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   Add Functionalities
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-2">
//                   Enhance through chat and drag-and-drop
//                 </p>
//                 <div className="text-primary mt-auto">
//                   {expandedCards.step3 ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </div>
//               </Card>

//               {/* Step 3 Expanded Content - Mobile */}
//               {expandedCards.step3 && (
//                 <div className="mt-4">
//                   <div className="bg-card/50 border border-primary/30 rounded-xl p-4">
//                     <div className="text-left mb-6">
//                       <h3 className="text-xl font-bold text-foreground mb-2">
//                         Extend Your Agent's Capabilities
//                       </h3>
//                       <p className="text-muted-foreground text-sm">
//                         Add powerful features to make your Voice AI assistant
//                         even more capable.
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-1 gap-4">
//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <Layers className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Enhance via node library
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Add pre‑built capabilities from our extensive library.
//                         </p>
//                       </Card>

//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <MessageSquareText className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Add Knowledgebase
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Connect documentation, FAQs, and other sources.
//                         </p>
//                       </Card>

//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <Puzzle className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Integration marketplace
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Connect to CRMs, calendars, and business tools.
//                         </p>
//                       </Card>

//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <Workflow className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Tooling through API calls
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Extend capabilities by connecting to external APIs.
//                         </p>
//                       </Card>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Step 4: Deploy */}
//             <div>
//               <Card
//                 className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
//                 onClick={() => toggleCard('step4')}
//               >
//                 <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                   4
//                 </div>
//                 <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                   <Rocket className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   Deploy
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-2">
//                   Make your assistant available to your users
//                 </p>
//                 <div className="text-primary mt-auto">
//                   {expandedCards.step4 ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </div>
//               </Card>

//               {/* Step 4 Expanded Content - Mobile */}
//               {expandedCards.step4 && (
//                 <div className="mt-4">
//                   <div className="bg-card/50 border border-primary/30 rounded-xl p-4">
//                     <div className="text-left mb-6">
//                       <h3 className="text-xl font-bold text-foreground mb-2">
//                         Go Live with One Click
//                       </h3>
//                       <p className="text-muted-foreground text-sm">
//                         Deploy to production environments instantly.
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-1 gap-4">
//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <Rocket className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Instant Deployment
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Push live with a single click — no technical setup.
//                         </p>
//                       </Card>

//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <Phone className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Purchase phone numbers
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Get dedicated numbers in multiple regions.
//                         </p>
//                       </Card>

//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <Workflow className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Scalable Infrastructure
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Handle thousands of simultaneous conversations.
//                         </p>
//                       </Card>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Step 5: Observe & Monitor */}
//             <div>
//               <Card
//                 className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
//                 onClick={() => toggleCard('step5')}
//               >
//                 <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                   5
//                 </div>
//                 <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                   <ChartLine className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">
//                   Observe & Monitor
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-2">
//                   Track performance and make improvements
//                 </p>
//                 <div className="text-primary mt-auto">
//                   {expandedCards.step5 ? (
//                     <ChevronUp className="h-4 w-4" />
//                   ) : (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </div>
//               </Card>

//               {/* Step 5 Expanded Content - Mobile */}
//               {expandedCards.step5 && (
//                 <div className="mt-4">
//                   <div className="bg-card/50 border border-primary/30 rounded-xl p-4">
//                     <div className="text-left mb-6">
//                       <h3 className="text-xl font-bold text-foreground mb-2">
//                         Gain Insights and Continuously Improve
//                       </h3>
//                       <p className="text-muted-foreground text-sm">
//                         Monitor performance and optimize based on real data.
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-1 gap-4">
//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <ChartLine className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Analytics Dashboard
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Track call volume, resolution rate, and satisfaction.
//                         </p>
//                       </Card>

//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <FileText className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Logs and Traces
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Get span-level visibility of real-time performance.
//                         </p>
//                       </Card>

//                       <Card className="p-4 border border-border/50">
//                         <div className="flex items-center gap-3 mb-3">
//                           <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
//                             <Star className="h-5 w-5 text-primary" />
//                           </div>
//                           <h5 className="font-semibold text-sm">
//                             Conversation Quality Scores
//                           </h5>
//                         </div>
//                         <p className="text-xs text-muted-foreground leading-relaxed">
//                           Define custom metrics to evaluate and improve quality.
//                         </p>
//                       </Card>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </Container>
//       </section>
//       {/* Key Features Section */}
//       <section className="py-10 border-t border-border/30">
//         <Container>
//           <div className="text-center mb-12">
//             <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
//               Key Features
//             </div>
//             <h2 className="md:text-3xl font-bold tracking-tight mb-6">
//               Build high quality{' '}
//               <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text">
//                 Voice AI
//               </span>{' '}
//               assistants in minutes
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-16">
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <div className="rounded-lg bg-primary/30 p-2 mt-1 border">
//                     <BrainCircuit className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-foreground">
//                       Think it. Refine it.
//                     </h3>
//                     <p className="text-muted-foreground text-sm">
//                       Simply describe your voice AI assistant in plain text,
//                       then watch us do the rest. Building voice AI assistants is
//                       easier than ever before.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <div className="rounded-lg bg-primary/30 p-2 mt-1 border">
//                     <MessageSquareText className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-foreground">
//                       Prompt to configure and edit.
//                     </h3>
//                     <p className="text-muted-foreground text-sm">
//                       Just write in text what changes you want made to your
//                       voice AI assistant. Ask in text to configure 100s of
//                       voices, latest LLMs, capabilities like call transfers.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <div className="rounded-lg bg-primary/30 p-2 mt-1 border">
//                     <Workflow className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-foreground">
//                       Workflow support
//                     </h3>
//                     <p className="text-muted-foreground text-sm">
//                       Build reliable voice AI assistants through rigorous
//                       simulated testing, real-time observability to track
//                       issues.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative rounded-xl overflow-hidden border border-border/70 shadow-xl shadow-primary/10 h-[400px]">
//               <div className="absolute inset-0 bg-gradient-to-tr from-background to-transparent opacity-20"></div>
//               <div className="flex items-center justify-center h-full">
//                 <div className="text-center text-muted-foreground">
//                   [Demo Interface Placeholder]
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </section>
//       {/* Statistics Section */}
//       <section className="py-10 relative overflow-hidden">
//         <Container>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
//               <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text mb-2">
//                 150K+
//               </h3>
//               <p className="text-sm text-muted-foreground uppercase tracking-wider">
//                 MINUTES
//               </p>
//             </div>
//             <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
//               <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text mb-2">
//                 50K+
//               </h3>
//               <p className="text-sm text-muted-foreground uppercase tracking-wider">
//                 MESSAGES SENT
//               </p>
//             </div>
//           </div>
//         </Container>
//       </section>
//       {/* Call to Action Section */}
//       <section className="py-8 sm:py-10 px-4 w-full">
//         <Container>
//           <div className="text-center">
//             <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
//               <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
//                 Get Started for Free
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-primary/20 hover:bg-primary/10 w-full sm:w-auto"
//               >
//                 Schedule a Demo
//               </Button>
//             </div>
//           </div>
//         </Container>
//       </section>
//       {/* Original Footer */}
//     </div>
//   );
// };

// export default AiAgent;

// version 2:- :--- AFTER I STARTED BREAKING INTO COMPONENTS:----👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼

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
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Container } from '@/components/common/container';
import TemplateCard from './components/TemplateCard';

const AiAgent = () => {
  const [prompt, setPrompt] = useState('');
  const [activeTab, setActiveTab] = useState('popular');
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});
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
  return (
    <div
      id="ai-agent-page  "
      className="flex flex-col gap-4 pt-5  border-2 border-red-500"
    >
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

          {/* Prompt box */}
          <div className="max-w-6xl mx-auto mb-6">
            <div className="relative rounded-lg min-h-[200px] shadow-[0_0_25px_rgba(59,130,246,0.5)] focus-within:border-2 focus-within:border-[#408bff]">
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={typewriterText}
                className="min-h-[200px] text-lg px-6 resize-none border-none focus:!border-none focus:!ring-0"
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
      {/* Testimonials Section */}
      {/* <section className="py-10 border-t border-border/30 relative overflow-hidden">
//         <Container>
//           <div className="text-center mb-12">
//             <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
//               Testimonials
//             </span>
//             <h2 className="text-3xl font-bold tracking-tight">
//               What Our Users Say
//             </h2>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="relative min-h-[200px] flex items-center justify-center">
//               <div className="text-center transition-all duration-500 ease-in-out">
//                 <h3 className="md:text-2xl tracking-tight mb-6 text-muted-foreground">
//                   "{testimonials[currentTestimonial].quote}"
//                 </h3>
//                 <p className="text-muted-foreground text-sm">
//                   {testimonials[currentTestimonial].author}
//                   {testimonials[currentTestimonial].company && (
//                     <span>, {testimonials[currentTestimonial].company}</span>
//                   )}
//                 </p>
//               </div>
//             </div>

//             <div className="flex justify-center items-center mt-12 gap-2">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="h-9 w-9"
//                 onClick={() =>
//                   setCurrentTestimonial((prev) =>
//                     prev === 0 ? testimonials.length - 1 : prev - 1,
//                   )
//                 }
//               >
//                 <ChevronLeft className="h-4 w-4" />
//               </Button>

//               <div className="flex gap-2">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`w-2.5 h-2.5 rounded-full transition-all ${
//                       index === currentTestimonial
//                         ? 'bg-primary'
//                         : 'bg-muted hover:bg-muted-foreground'
//                     }`}
//                     onClick={() => setCurrentTestimonial(index)}
//                     aria-label={`Go to testimonial ${index + 1}`}
//                   />
//                 ))}
//               </div>

//               <Button
//                 variant="ghost"
//                 size="sm"
//                 className="h-9 w-9"
//                 onClick={() =>
//                   setCurrentTestimonial(
//                     (prev) => (prev + 1) % testimonials.length,
//                   )
//                 }
//               >
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </Container>
//       </section> */}
      {/* How it Works Section */}
      <section className="py-10 border-t border-border/30">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Simple Process
            </div>
            <h2 className="md:text-3xl font-bold tracking-tight mb-6">
              How it Works
            </h2>
            <p className="text-muted-foreground text-sm">
              Create and deploy your Voice AI assistant in five simple steps
            </p>
          </div>

          {/* Desktop Layout - All cards in one row, expanded content at bottom */}
          <div className="hidden md:block">
            <div className="grid grid-cols-5 gap-4">
              {/* Step 1: Write */}
              <Card
                className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
                onClick={() => toggleCard('step1')}
              >
                <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
                  1
                </div>
                <div className="rounded-lg bg-muted/50 p-2 mb-4">
                  <PenLine className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Write
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Describe what type of Voice AI assistant you want
                </p>
                <div className="text-primary mt-auto">
                  {expandedCards.step1 ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </Card>

              {/* Step 2: Test */}
              <Card
                className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
                onClick={() => toggleCard('step2')}
              >
                <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
                  2
                </div>
                <div className="rounded-lg bg-muted/50 p-2 mb-4">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Test</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Try out your assistant and see how it performs
                </p>
                <div className="text-primary mt-auto">
                  {expandedCards.step2 ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </Card>

              {/* Step 3: Add Functionalities */}
              <Card
                className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
                onClick={() => toggleCard('step3')}
              >
                <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
                  3
                </div>
                <div className="rounded-lg bg-muted/50 p-2 mb-4">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Add Functionalities
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Enhance through chat and drag-and-drop
                </p>
                <div className="text-primary mt-auto">
                  {expandedCards.step3 ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </Card>

              {/* Step 4: Deploy */}
              <Card
                className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
                onClick={() => toggleCard('step4')}
              >
                <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
                  4
                </div>
                <div className="rounded-lg bg-muted/50 p-2 mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Deploy
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Make your assistant available to your users
                </p>
                <div className="text-primary mt-auto">
                  {expandedCards.step4 ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </Card>

              {/* Step 5: Observe & Monitor */}
              <Card
                className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
                onClick={() => toggleCard('step5')}
              >
                <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
                  5
                </div>
                <div className="rounded-lg bg-muted/50 p-2 mb-4">
                  <ChartLine className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Observe & Monitor
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Track performance and make improvements
                </p>
                <div className="text-primary mt-auto">
                  {expandedCards.step5 ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </Card>
            </div>

            {/* Desktop Expanded Content - Fixed Layout */}
            {expandedCards.step1 && (
              <div className="mt-8">
                <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
                  <div className="text-left mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Create Voice AI Assistants with Natural Language
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-4xl ">
                      Simply describe what you want your Voice AI assistant to
                      do, and we'll build it for you.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <Card className="p-6 bg-card/80 border border-border/50 rounded-xl">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MessageCircle className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">
                          Conversational Creation
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Build your assistant through natural conversation – just
                        chat with our platform about what you need.
                      </p>
                    </Card>

                    <Card className="p-6 bg-card/80 border border-border/50 rounded-xl">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MousePointer className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">
                          Drag-and-Drop Interface
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Fine‑tune your assistant's capabilities with our
                        intuitive drag‑and‑drop editor.
                      </p>
                    </Card>

                    <Card className="p-6 bg-card/80 border border-border/50 rounded-xl">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Layers className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg">
                          Pre‑built Templates
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Start with industry‑specific templates and customize to
                        your needs.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {expandedCards.step2 && (
              <div className="mt-8">
                <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
                  <div className="text-left mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Test Your Assistant in Real Scenarios
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-4xl ">
                      Ensure your Voice AI assistant performs perfectly before
                      deployment.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MessageCircle className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Test by chatting with the assistant
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Interact directly to see how it handles conversations in
                        real-time.
                      </p>
                    </Card>

                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Simulate 1000+ scenarios
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Automatically test against thousands of potential user
                        interactions.
                      </p>
                    </Card>

                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <ChartLine className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Evaluate performance
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Measure accuracy, response time, and user satisfaction.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {expandedCards.step3 && (
              <div className="mt-8">
                <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
                  <div className="text-left mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Extend Your Agent's Capabilities
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-4xl ">
                      Add powerful features to make your Voice AI assistant even
                      more capable.
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-6">
                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Layers className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Enhance via node library
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Add pre‑built capabilities from our extensive library.
                      </p>
                    </Card>

                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MessageSquareText className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Add Knowledgebase
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Connect documentation, FAQs, and other sources.
                      </p>
                    </Card>

                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Puzzle className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Integration marketplace
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Connect to CRMs, calendars, and business tools.
                      </p>
                    </Card>

                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Workflow className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Tooling through API calls
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Extend capabilities by connecting to external APIs.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {expandedCards.step4 && (
              <div className="mt-8">
                <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
                  <div className="text-left mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Go Live with One Click
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-4xl">
                      Deploy to production environments instantly.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Rocket className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Instant Deployment
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Push live with a single click — no technical setup.
                      </p>
                    </Card>

                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Purchase phone numbers
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Get dedicated numbers in multiple regions.
                      </p>
                    </Card>

                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Workflow className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Scalable Infrastructure
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Handle thousands of simultaneous conversations.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {expandedCards.step5 && (
              <div className="mt-8">
                <div className="bg-card/50 border border-primary/30 rounded-xl p-6">
                  <div className="text-left mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Gain Insights and Continuously Improve
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-4xl">
                      Monitor performance and optimize based on real data.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <ChartLine className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Analytics Dashboard
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Track call volume, resolution rate, and satisfaction.
                      </p>
                    </Card>

                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Logs and Traces
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Get span-level visibility of real-time performance.
                      </p>
                    </Card>

                    <Card className="p-6 border border-border/50">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Star className="h-6 w-6 text-primary" />
                        </div>
                        <h5 className="font-semibold text-lg">
                          Conversation Quality Scores
                        </h5>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Define custom metrics to evaluate and improve quality.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Layout - Cards stacked vertically with expanded content below each */}
          <div className="block md:hidden space-y-4">
            {/* Step 1: Write */}
            <div>
              <Card
                className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
                onClick={() => toggleCard('step1')}
              >
                <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
                  1
                </div>
                <div className="rounded-lg bg-muted/50 p-2 mb-4">
                  <PenLine className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Write
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Describe what type of Voice AI assistant you want
                </p>
                <div className="text-primary mt-auto">
                  {expandedCards.step1 ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </Card>

              {/* Step 1 Expanded Content - Mobile */}
              {expandedCards.step1 && (
                <div className="mt-4">
                  <div className="bg-card/50 border border-primary/30 rounded-xl p-4">
                    <div className="text-left mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Create Voice AI Assistants with Natural Language
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Simply describe what you want your Voice AI assistant to
                        do, and we'll build it for you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <Card className="p-4 bg-card/80 border border-border/50 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <MessageCircle className="h-5 w-5 text-primary" />
                          </div>
                          <h4 className="font-semibold text-base">
                            Conversational Creation
                          </h4>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Build your assistant through natural conversation –
                          just chat with our platform about what you need.
                        </p>
                      </Card>

                      <Card className="p-4 bg-card/80 border border-border/50 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <MousePointer className="h-5 w-5 text-primary" />
                          </div>
                          <h4 className="font-semibold text-base">
                            Drag-and-Drop Interface
                          </h4>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Fine‑tune your assistant's capabilities with our
                          intuitive drag‑and‑drop editor.
                        </p>
                      </Card>

                      <Card className="p-4 bg-card/80 border border-border/50 rounded-xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Layers className="h-5 w-5 text-primary" />
                          </div>
                          <h4 className="font-semibold text-base">
                            Pre‑built Templates
                          </h4>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Start with industry‑specific templates and customize
                          to your needs.
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Test */}
            <div>
              <Card
                className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
                onClick={() => toggleCard('step2')}
              >
                <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
                  2
                </div>
                <div className="rounded-lg bg-muted/50 p-2 mb-4">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Test</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Try out your assistant and see how it performs
                </p>
                <div className="text-primary mt-auto">
                  {expandedCards.step2 ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </Card>

              {/* Step 2 Expanded Content - Mobile */}
              {expandedCards.step2 && (
                <div className="mt-4">
                  <div className="bg-card/50 border border-primary/30 rounded-xl p-4">
                    <div className="text-left mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Test Your Assistant in Real Scenarios
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Ensure your Voice AI assistant performs perfectly before
                        deployment.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <MessageCircle className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Test by chatting with the assistant
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Interact directly to see how it handles conversations
                          in real-time.
                        </p>
                      </Card>

                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Simulate 1000+ scenarios
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Automatically test against thousands of potential user
                          interactions.
                        </p>
                      </Card>

                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <ChartLine className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Evaluate performance
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Measure accuracy, response time, and user
                          satisfaction.
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Add Functionalities */}
            <div>
              <Card
                className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
                onClick={() => toggleCard('step3')}
              >
                <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
                  3
                </div>
                <div className="rounded-lg bg-muted/50 p-2 mb-4">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Add Functionalities
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Enhance through chat and drag-and-drop
                </p>
                <div className="text-primary mt-auto">
                  {expandedCards.step3 ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </Card>

              {/* Step 3 Expanded Content - Mobile */}
              {expandedCards.step3 && (
                <div className="mt-4">
                  <div className="bg-card/50 border border-primary/30 rounded-xl p-4">
                    <div className="text-left mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Extend Your Agent's Capabilities
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Add powerful features to make your Voice AI assistant
                        even more capable.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Layers className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Enhance via node library
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Add pre‑built capabilities from our extensive library.
                        </p>
                      </Card>

                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <MessageSquareText className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Add Knowledgebase
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Connect documentation, FAQs, and other sources.
                        </p>
                      </Card>

                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Puzzle className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Integration marketplace
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Connect to CRMs, calendars, and business tools.
                        </p>
                      </Card>

                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Workflow className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Tooling through API calls
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Extend capabilities by connecting to external APIs.
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step 4: Deploy */}
            <div>
              <Card
                className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
                onClick={() => toggleCard('step4')}
              >
                <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
                  4
                </div>
                <div className="rounded-lg bg-muted/50 p-2 mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Deploy
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Make your assistant available to your users
                </p>
                <div className="text-primary mt-auto">
                  {expandedCards.step4 ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </Card>

              {/* Step 4 Expanded Content - Mobile */}
              {expandedCards.step4 && (
                <div className="mt-4">
                  <div className="bg-card/50 border border-primary/30 rounded-xl p-4">
                    <div className="text-left mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Go Live with One Click
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Deploy to production environments instantly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Rocket className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Instant Deployment
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Push live with a single click — no technical setup.
                        </p>
                      </Card>

                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Purchase phone numbers
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Get dedicated numbers in multiple regions.
                        </p>
                      </Card>

                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Workflow className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Scalable Infrastructure
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Handle thousands of simultaneous conversations.
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step 5: Observe & Monitor */}
            <div>
              <Card
                className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-primary/70"
                onClick={() => toggleCard('step5')}
              >
                <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
                  5
                </div>
                <div className="rounded-lg bg-muted/50 p-2 mb-4">
                  <ChartLine className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Observe & Monitor
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Track performance and make improvements
                </p>
                <div className="text-primary mt-auto">
                  {expandedCards.step5 ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </Card>

              {/* Step 5 Expanded Content - Mobile */}
              {expandedCards.step5 && (
                <div className="mt-4">
                  <div className="bg-card/50 border border-primary/30 rounded-xl p-4">
                    <div className="text-left mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Gain Insights and Continuously Improve
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Monitor performance and optimize based on real data.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <ChartLine className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Analytics Dashboard
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Track call volume, resolution rate, and satisfaction.
                        </p>
                      </Card>

                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Logs and Traces
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Get span-level visibility of real-time performance.
                        </p>
                      </Card>

                      <Card className="p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Star className="h-5 w-5 text-primary" />
                          </div>
                          <h5 className="font-semibold text-sm">
                            Conversation Quality Scores
                          </h5>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Define custom metrics to evaluate and improve quality.
                        </p>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      {/* Key Features Section */}
      <section className="py-10 border-t border-border/30">
        <Container>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Key Features
            </div>
            <h2 className="md:text-3xl font-bold tracking-tight mb-6">
              Build high quality{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text">
                Voice AI
              </span>{' '}
              assistants in minutes
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-16">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/30 p-2 mt-1 border">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Think it. Refine it.
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Simply describe your voice AI assistant in plain text,
                      then watch us do the rest. Building voice AI assistants is
                      easier than ever before.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/30 p-2 mt-1 border">
                    <MessageSquareText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Prompt to configure and edit.
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Just write in text what changes you want made to your
                      voice AI assistant. Ask in text to configure 100s of
                      voices, latest LLMs, capabilities like call transfers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/30 p-2 mt-1 border">
                    <Workflow className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Workflow support
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Build reliable voice AI assistants through rigorous
                      simulated testing, real-time observability to track
                      issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-border/70 shadow-xl shadow-primary/10 h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-background to-transparent opacity-20"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-muted-foreground">
                  [Demo Interface Placeholder]
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Statistics Section */}
      <section className="py-10 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text mb-2">
                150K+
              </h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                MINUTES
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text mb-2">
                50K+
              </h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                MESSAGES SENT
              </p>
            </div>
          </div>
        </Container>
      </section>
      {/* Call to Action Section */}
      <section className="py-8 sm:py-10 px-4 w-full">
        <Container>
          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                Get Started for Free
              </Button>
              <Button
                variant="outline"
                className="border-primary/20 hover:bg-primary/10 w-full sm:w-auto"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
      {/* Original Footer */}
    </div>
  );
};

export default AiAgent;
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
