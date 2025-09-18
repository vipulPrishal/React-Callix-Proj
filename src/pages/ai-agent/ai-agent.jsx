// // version 1:-----

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
    <div
      id="ai-agent-page  "
      className="flex flex-col gap-4 pt-5  border-2 border-red-500"
    >
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
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* <TabsList className="flex flex-col md:flex-row items-start md:items-center gap-2 bg-transparent p-0 "> */}
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
                  <Card
                    key={idx}
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
    </div>
  );
};

export default AiAgent;

// // version 2:-- Improving the template categories now
// import React, { useEffect, useState } from 'react';
// import {
//   ArrowRight,
//   BrainCircuit,
//   Building,
//   Calendar,
//   ChartLine,
//   ChevronLeft,
//   ChevronRight,
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

// const AiAgent = () => {
//   const [prompt, setPrompt] = useState('');
//   const [activeTab, setActiveTab] = useState('popular');
//   const [typewriterText, setTypewriterText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   // const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
//       <Container>
//         <div className="max-w-6xl mx-auto">
//           <Tabs
//             value={activeTab}
//             onValueChange={setActiveTab}
//             className="w-full"
//           >
//             {/* <TabsList className="flex flex-col md:flex-row items-start md:items-center gap-2 bg-transparent p-0 "> */}
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
//               h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
//               hover:bg-muted/80
//               data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
//               data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
//             "
//                 >
//                   Popular
//                 </TabsTrigger>

//                 <TabsTrigger
//                   value="sales"
//                   className="
//               h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
//               hover:bg-muted/80
//               data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
//               data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
//             "
//                 >
//                   Sales
//                 </TabsTrigger>

//                 <TabsTrigger
//                   value="customer"
//                   className="
//               h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
//               hover:bg-muted/80
//               data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
//               data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
//             "
//                 >
//                   Customer Experience
//                 </TabsTrigger>

//                 <TabsTrigger
//                   value="business"
//                   className="
//               h-8 px-4 rounded-full border border-border bg-muted/60 text-muted-foreground
//               hover:bg-muted/80
//               data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary/40
//               data-[state=active]:shadow-[0_0_0_6px_rgba(64,139,255,0.15)]
//             "
//                 >
//                   Business
//                 </TabsTrigger>
//               </div>
//             </TabsList>

//             {/* Content */}
//             <TabsContent value={activeTab} className="mt-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {templates[activeTab]?.map((template, idx) => (
//                   <Card
//                     key={idx}
//                     className="hover:shadow-lg hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
//                   >
//                     <CardContent className="p-6">
//                       <div className="flex items-start gap-4">
//                         <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
//                           <template.icon className="w-6 h-6 text-primary" />
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-lg font-semibold text-foreground mb-2">
//                             {template.title}
//                           </h3>
//                           <p className="text-muted-foreground text-sm leading-relaxed">
//                             {template.description}
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
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
//             <Card className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md border-primary">
//               <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                 1
//               </div>
//               <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                 <PenLine className="h-6 w-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-2">Write</h3>
//               <p className="text-muted-foreground text-sm mb-2">
//                 Describe what type of Voice AI assistant you want
//               </p>
//             </Card>

//             <Card className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md border-border/50 hover:border-primary/70">
//               <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                 2
//               </div>
//               <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                 <FlaskConical className="h-6 w-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-2">Test</h3>
//               <p className="text-muted-foreground text-sm mb-2">
//                 Try out your assistant and see how it performs
//               </p>
//             </Card>

//             <Card className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md border-border/50 hover:border-primary/70">
//               <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                 3
//               </div>
//               <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                 <Puzzle className="h-6 w-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-2">
//                 Add Functionalities
//               </h3>
//               <p className="text-muted-foreground text-sm mb-2">
//                 Enhance through chat and drag-and-drop
//               </p>
//             </Card>

//             <Card className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md border-border/50 hover:border-primary/70">
//               <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                 4
//               </div>
//               <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                 <Rocket className="h-6 w-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-2">Deploy</h3>
//               <p className="text-muted-foreground text-sm mb-2">
//                 Make your assistant available to your users
//               </p>
//             </Card>

//             <Card className="rounded-xl border bg-card/80 p-6 hover:bg-card/60 flex flex-col items-center text-center cursor-pointer shadow-md border-border/50 hover:border-primary/70">
//               <div className="rounded-full bg-primary/20 w-10 h-10 flex items-center justify-center mb-2 text-primary font-bold">
//                 5
//               </div>
//               <div className="rounded-lg bg-muted/50 p-2 mb-4">
//                 <ChartLine className="h-6 w-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-2">
//                 Observe & Monitor
//               </h3>
//               <p className="text-muted-foreground text-sm mb-2">
//                 Track performance and make improvements
//               </p>
//             </Card>
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
