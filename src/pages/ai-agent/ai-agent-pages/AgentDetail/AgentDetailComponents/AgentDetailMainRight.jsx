import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

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

const SectionItem = ({
  index,
  section,
  onToggleOpen,
  onToggleActive,
  onChangeText,
  onDelete,
}) => {
  const muted = !section.active;
  return (
    <div
      className={`rounded-md border border-border/60 ${
        section.open ? 'ring-1 ring-primary/40' : ''
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between px-3 py-2 ${
          muted ? 'opacity-60' : ''
        }`}
      >
        <div className="flex items-center gap-2">
          <button
            className="p-1 rounded hover:bg-muted/40"
            onClick={() => onToggleOpen(index)}
          >
            {section.open ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          <span className="text-sm text-foreground select-none">
            {index + 1}. {section.title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">
            {section.active ? 'ON' : 'OFF'}
          </span>
          <Toggle
            checked={section.active}
            onChange={(v) => onToggleActive(index, v)}
          />

          <button
            onClick={() => onDelete(index)}
            className="ml-2 p-2 rounded hover:bg-red-500/10 hover:text-red-500 text-muted-foreground transition-colors"
            title="Delete section"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Body */}
      {section.open && (
        <div className={`px-4 pb-4 ${muted ? 'opacity-60' : ''}`}>
          <Textarea
            value={section.content}
            onChange={(e) => onChangeText(index, e.target.value)}
            placeholder="Write instructions for this step..."
            className="min-h-[110px] resize-y bg-muted/30 border-border/50 text-foreground"
          />
        </div>
      )}
    </div>
  );
};

const AgentDetailMainRight = () => {
  const initialSections = useMemo(
    () => [
      {
        title: 'Agent Role & Context',
        content:
          'You are a courteous and organized virtual assistant who calls customers to schedule appointments with {business_name}. Your goal is to efficiently book appointments, ensure calendar accuracy, and make the process as smooth as possible for the customer.',
        open: true,
        active: true,
      },
      { title: 'Introduction', content: '', open: false, active: true },
      {
        title: 'Collecting Appointment Details',
        content: '',
        open: false,
        active: true,
      },
      {
        title: 'Suggesting Available Slots',
        content: '',
        open: false,
        active: true,
      },
      {
        title: 'Confirming Appointment',
        content: '',
        open: false,
        active: true,
      },
      { title: 'Friendly Closing', content: '', open: false, active: true },
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

  const handleToggleOpen = (idx) =>
    updateSection(idx, { open: !sections[idx].open });
  const handleToggleActive = (idx, v) => updateSection(idx, { active: v });
  const handleChangeText = (idx, text) => updateSection(idx, { content: text });
  const handleDelete = (idx) =>
    setSections((prev) => prev.filter((_, i) => i !== idx));

  const addSection = () =>
    setSections((prev) => [
      ...prev,
      { title: `New Section`, content: '', open: true, active: true },
    ]);

  return (
    <div className="flex-1 bg-background overflow-y-auto">
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
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground font-medium">
              Welcome Message
            </span>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Dynamic</span>
                <Toggle checked={isDynamic} onChange={setIsDynamic} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  Interruption
                </span>
                <Toggle checked={interruption} onChange={setInterruption} />
              </div>
            </div>
          </div>
          <Textarea
            value={welcomeMessage}
            onChange={(e) => setWelcomeMessage(e.target.value)}
            className="min-h-[64px] resize-y bg-muted/30 border-border/50 text-foreground"
            placeholder="Type the welcome message…"
          />
          <div className="text-right text-xs text-muted-foreground">
            Character limit: 300
          </div>
        </div>

        {/* Conversational Flow */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
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
              <SectionItem
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
      </div>
    </div>
  );
};

export default AgentDetailMainRight;
