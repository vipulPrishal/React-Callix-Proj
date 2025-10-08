import React from 'react';
import { ChevronDown, ChevronRight, GripVertical, Trash2 } from 'lucide-react';
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

const FlowSectionItem = ({
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
      className={`rounded-lg border border-border/80 bg-card/30 ${
        section.open ? 'ring-1 ring-primary/30' : ''
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between px-3 py-3 border-b border-border/30 ${
          muted ? 'opacity-60' : ''
        }`}
      >
        <div className="flex items-center gap-2">
          <button
            className="p-1 rounded hover:bg-muted/40 cursor-move"
            title="Drag to reorder"
          >
            <GripVertical className="w-4 h-4 text-muted-foreground" />
          </button>
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
          <span className="text-sm font-medium text-foreground select-none">
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
        <div className={`p-4 ${muted ? 'opacity-60' : ''}`}>
          <Textarea
            value={section.content}
            onChange={(e) => onChangeText(index, e.target.value)}
            placeholder="Write instructions for this step..."
            className="min-h-[120px] resize-none bg-muted/40 border border-border/40 text-foreground rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default FlowSectionItem;
