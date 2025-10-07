// // ------- VRSION 3:------ Breaking files into components:--------
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Container } from '@/components/common/container';
// import AgentDetailNavbar from './AgentDetailComponents/AgentDetailNavbar';

// const AgentDetail = () => {
//   const { agentId } = useParams();

//   // State management
//   const [agentName, setAgentName] = useState(`Agent #${agentId}`);
//   const [isEditingName, setIsEditingName] = useState(false);
//   const [callDirection, setCallDirection] = useState('Outgoing');
//   const [showDirectionDropdown, setShowDirectionDropdown] = useState(false);
//   const [showDeployDropdown, setShowDeployDropdown] = useState(false);
//   const [activeTestMode, setActiveTestMode] = useState('Chat');
//   const [lastSaved, setLastSaved] = useState(null);
//   const [hasChanges, setHasChanges] = useState(false);
//   const [activeTab, setActiveTab] = useState('Details');
//   const [viewMode, setViewMode] = useState('UI');

//   // Mock data
//   const [agentData, setAgentData] = useState({
//     id: agentId,
//     name: 'Alex',
//     prompt: 'Create a voice AI agent to schedule appointments...',
//     status: 'Active',
//     costPerMinute: 0.1,
//     welcomeMessage:
//       'Hi there, this is Alex from customer support. How can I help you today?',
//     conversationalFlow: [
//       'Agent Role & Context',
//       'Introduction',
//       'Issue Identification',
//       'Troubleshooting',
//       'Resolution',
//       'Closing',
//     ],
//   });

//   // Auto-save functionality
//   useEffect(() => {
//     if (hasChanges) {
//       const timer = setTimeout(() => {
//         setLastSaved(new Date());
//         setHasChanges(false);
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [hasChanges]);

//   const tabs = [
//     'Details',
//     'Knowledge Base',
//     'Integrations',
//     'Configurations',
//     'Post-Call',
//     'Recent Calls',
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Navbar Component */}
//       <AgentDetailNavbar
//         agentName={agentName}
//         setAgentName={setAgentName}
//         isEditingName={isEditingName}
//         setIsEditingName={setIsEditingName}
//         callDirection={callDirection}
//         setCallDirection={setCallDirection}
//         showDirectionDropdown={showDirectionDropdown}
//         setShowDirectionDropdown={setShowDirectionDropdown}
//         showDeployDropdown={showDeployDropdown}
//         setShowDeployDropdown={setShowDeployDropdown}
//         activeTestMode={activeTestMode}
//         setActiveTestMode={setActiveTestMode}
//         hasChanges={hasChanges}
//         lastSaved={lastSaved}
//         setHasChanges={setHasChanges}
//       />

//       {/* Main Content */}
//       <Container className="py-8">
//         {/* Tabs */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex gap-1">
//             {tabs.map((tab) => (
//               <Button
//                 key={tab}
//                 variant={activeTab === tab ? 'default' : 'ghost'}
//                 size="sm"
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-4 py-2 ${
//                   activeTab === tab
//                     ? 'bg-primary text-primary-foreground'
//                     : 'text-muted-foreground hover:text-foreground'
//                 }`}
//               >
//                 {tab}
//               </Button>
//             ))}
//           </div>

//           {/* UI/Code Toggle */}
//           <div className="flex items-center gap-2">
//             <Button
//               variant={viewMode === 'UI' ? 'default' : 'outline'}
//               size="sm"
//               onClick={() => setViewMode('UI')}
//               className={
//                 viewMode === 'UI' ? 'bg-primary text-primary-foreground' : ''
//               }
//             >
//               UI
//             </Button>
//             <Button
//               variant={viewMode === 'Code' ? 'default' : 'outline'}
//               size="sm"
//               onClick={() => setViewMode('Code')}
//               className={
//                 viewMode === 'Code' ? 'bg-primary text-primary-foreground' : ''
//               }
//             >
//               Code
//             </Button>
//           </div>
//         </div>

//         {/* Content based on active tab */}
//         {activeTab === 'Details' && (
//           <div className="space-y-6">
//             {/* Welcome Message Section */}
//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-semibold text-foreground">
//                     Welcome Message
//                   </h3>
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm text-muted-foreground">
//                       Dynamic
//                     </span>
//                     <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
//                       <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5"></div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-3 mb-4">
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm text-foreground">Dynamic</span>
//                     <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer">
//                       <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5"></div>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-sm text-foreground">
//                       Interruption
//                     </span>
//                     <div className="w-10 h-5 bg-muted rounded-full relative cursor-pointer">
//                       <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5"></div>
//                     </div>
//                   </div>
//                 </div>

//                 <textarea
//                   value={agentData.welcomeMessage}
//                   onChange={(e) => {
//                     setAgentData({
//                       ...agentData,
//                       welcomeMessage: e.target.value,
//                     });
//                     setHasChanges(true);
//                   }}
//                   className="w-full h-24 p-3 bg-muted/50 border border-border/50 rounded-md text-foreground resize-none"
//                   placeholder="Enter welcome message..."
//                 />

//                 <p className="text-sm text-muted-foreground mt-2">
//                   Character limit: 300 ({300 - agentData.welcomeMessage.length}{' '}
//                   remaining)
//                 </p>
//               </CardContent>
//             </Card>

//             {/* Conversational Flow Section */}
//             <Card>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-semibold text-foreground">
//                     Conversational Flow (Assistant's Instructions)
//                   </h3>
//                   <Button variant="outline" size="sm">
//                     + Add Section
//                   </Button>
//                 </div>

//                 <div className="space-y-3">
//                   {agentData.conversationalFlow.map((section, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
//                     >
//                       <span className="text-foreground">
//                         {index + 1}. {section}
//                       </span>
//                       <div className="flex items-center gap-2">
//                         <div className="w-8 h-4 bg-primary rounded-full relative cursor-pointer">
//                           <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5"></div>
//                         </div>
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="text-red-500 hover:text-red-600"
//                         >
//                           🗑️
//                         </Button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}

//         {/* Other tabs content */}
//         {activeTab !== 'Details' && (
//           <Card>
//             <CardContent className="p-6">
//               <div className="text-center py-12">
//                 <h3 className="text-lg font-semibold text-foreground mb-2">
//                   {activeTab} Content
//                 </h3>
//                 <p className="text-muted-foreground">
//                   This section is under development.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         )}
//       </Container>

//       {/* Click outside to close dropdowns */}
//       {(showDirectionDropdown || showDeployDropdown) && (
//         <div
//           className="fixed inset-0 z-40"
//           onClick={() => {
//             setShowDirectionDropdown(false);
//             setShowDeployDropdown(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default AgentDetail;

// -----version 1: Till Navbar completed:----

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AgentDetailNavbar from './AgentDetailComponents/AgentDetailNavbar';

const AgentDetail = () => {
  const { agentId } = useParams();

  // State management
  const [agentName, setAgentName] = useState(`Agent #${agentId}`);
  const [isEditingName, setIsEditingName] = useState(false);
  const [callDirection, setCallDirection] = useState('Outgoing');
  const [showDirectionDropdown, setShowDirectionDropdown] = useState(false);
  const [showDeployDropdown, setShowDeployDropdown] = useState(false);
  const [activeTestMode, setActiveTestMode] = useState('Chat');
  const [lastSaved, setLastSaved] = useState(null);
  const [hasChanges, setHasChanges] = useState(false);

  // Auto-save functionality
  useEffect(() => {
    if (hasChanges) {
      const timer = setTimeout(() => {
        setLastSaved(new Date());
        setHasChanges(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasChanges]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar Component */}
      <AgentDetailNavbar
        agentName={agentName}
        setAgentName={setAgentName}
        isEditingName={isEditingName}
        setIsEditingName={setIsEditingName}
        callDirection={callDirection}
        setCallDirection={setCallDirection}
        showDirectionDropdown={showDirectionDropdown}
        setShowDirectionDropdown={setShowDirectionDropdown}
        showDeployDropdown={showDeployDropdown}
        setShowDeployDropdown={setShowDeployDropdown}
        activeTestMode={activeTestMode}
        setActiveTestMode={setActiveTestMode}
        hasChanges={hasChanges}
        lastSaved={lastSaved}
        setHasChanges={setHasChanges}
      />
    </div>
  );
};

export default AgentDetail;
