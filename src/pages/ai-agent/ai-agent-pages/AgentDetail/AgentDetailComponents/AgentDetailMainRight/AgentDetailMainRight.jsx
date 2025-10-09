import React, { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import FlowSectionItem from '../FlowSectionItem';

const Toggle = ({ checked, onChange }) => (
  <button
    type="button"
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
      checked ? 'bg-primary' : 'bg-muted/50'
    }`}
  >
    <span
      className={`inline-block h-5 w-5 transform rounded-full bg-background transition-transform ${
        checked ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

// Moved inline accordion item to reusable component `FlowSectionItem`

const AgentDetailMainRight = ({ setHasChanges }) => {
  const initialSections = useMemo(
    () => [
      {
        title: 'Agent Role & Context',
        content:
          'You are a courteous and organized virtual assistant who calls customers to schedule appointments with {business_name}. Your goal is to efficiently book appointments, ensure calendar accuracy, and make the process as smooth as possible for the customer.',
        open: false,
        active: true,
      },
      {
        title: 'Introduction',
        content:
          "Start the call by introducing yourself and the purpose of the call. Use a friendly and engaging tone to make the customer feel valued and open to the conversation. Begin with a professional greeting: 'Hi, this is {agent_name} from {business_name}. I'm here to help you schedule an appointment. Can I start by confirming your name?'",
        open: false,
        active: true,
      },
      {
        title: 'Purpose Statement',
        content:
          "Clearly state the reason for the call: to discuss the customer's recent purchase and gather feedback to ensure they are satisfied with the product and service.",
        open: false,
        active: true,
      },
      {
        title: 'Information Gathering',
        content:
          'Ask open-ended questions about their experience with the product, any concerns they might have, or additional needs they might require assistance with. Listen actively to their responses.',
        open: false,
        active: true,
      },
      {
        title: 'Goal Achievements',
        content:
          'Based on their feedback, offer solutions or additional support if necessary. Emphasize any benefits or features of the products that align with their needs.',
        open: false,
        active: true,
      },
      {
        title: 'Closing',
        content:
          'Thank the customer for their time, reiterate your support, and provide your contact information for future assistance. Encourage them to reach out anytime for help.',
        open: false,
        active: true,
      },
    ],
    [],
  );

  const [sections, setSections] = useState(initialSections);
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hi, I'm calling to schedule an appointment for you at {business_name}.",
  );
  const [isDynamic, setIsDynamic] = useState(true);
  const [interruption, setInterruption] = useState(false);

  const updateSection = (idx, patch) =>
    setSections((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, ...patch } : s)),
    );

  const flagChange = () => setHasChanges && setHasChanges(true);
  const handleToggleOpen = (idx) =>
    updateSection(idx, { open: !sections[idx].open });
  const handleToggleActive = (idx, v) => {
    updateSection(idx, { active: v });
    flagChange();
  };
  const handleChangeText = (idx, text) => {
    updateSection(idx, { content: text });
    flagChange();
  };
  const handleDelete = (idx) => {
    setSections((prev) => prev.filter((_, i) => i !== idx));
    flagChange();
  };

  const addSection = () => {
    setSections((prev) => [
      ...prev,
      { title: `New Section`, content: '', open: true, active: true },
    ]);
    flagChange();
  };

  return (
    <div className="flex-1 bg-background overflow-y-auto  mb-5 scrollbar-thin">
      <div className="h-full p-6 space-y-6">
        {/* Tabs mimic (static for now) */}
        <div className="flex gap-2 text-sm">
          {[
            'Details',
            'Knowledge Base',
            'Integrations',
            'Configurations',
            'Post-Call',
            'Recent Calls',
          ].map((t, i) => (
            <Button
              key={t}
              size="sm"
              variant={i === 0 ? 'default' : 'ghost'}
              className={
                i === 0
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }
            >
              {t}
            </Button>
          ))}
        </div>

        {/* Welcome Message */}
        <div className="space-y-2 border border-border/80 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground font-medium">
              Welcome Message
            </span>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Dynamic</span>
                <Toggle
                  checked={isDynamic}
                  onChange={(v) => {
                    setIsDynamic(v);
                    flagChange();
                  }}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  Interruption
                </span>
                <Toggle
                  checked={interruption}
                  onChange={(v) => {
                    setInterruption(v);
                    flagChange();
                  }}
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <Textarea
              value={welcomeMessage}
              onChange={(e) => {
                setWelcomeMessage(e.target.value.slice(0, 300));
                flagChange();
              }}
              className="min-h-[64px] resize-none bg-muted/30 border-border/50 text-foreground pr-20"
              placeholder="Type the welcome message…"
            />
            <div className="flex items-center justify-between mt-1 text-xs opacity-70 px-1">
              <span>Character limit: 300</span>
              <span>{300 - welcomeMessage.length} remaining</span>
            </div>
          </div>
        </div>

        {/* Conversational Flow */}
        <div className="space-y-3  border border-border/80 p-4 rounded-lg">
          <div className="flex items-center justify-between ">
            <span className="text-sm text-foreground font-medium">
              Conversational Flow (Assistant's Instructions)
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={addSection}
              className="border-primary/40 text-primary hover:bg-primary/10"
            >
              + Add Section
            </Button>
          </div>

          <div className="space-y-3">
            {sections.map((section, index) => (
              <FlowSectionItem
                key={`${section.title}-${index}`}
                index={index}
                section={section}
                onToggleOpen={handleToggleOpen}
                onToggleActive={handleToggleActive}
                onChangeText={handleChangeText}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>

        {/* Provide Feedback Button */}
        {/* <div className="flex justify-end pt-5 "> */}
        <Button
          variant="default"
          size="sm"
          // className="bg-primary hover:bg-cyan-600 text-white"
          className={`bg-primary hover:bg-primary/80 text-white fixed justify-end bottom-15 right-10 px-5 py-4`}
        >
          Provide feedback
        </Button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default AgentDetailMainRight;
