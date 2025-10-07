import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import AgentDetailMainLeft from './AgentDetailComponents/AgentDetailMainLeft';
import AgentDetailMainRight from './AgentDetailComponents/AgentDetailMainRight';
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

  // Column width state
  const [leftColumnWidth, setLeftColumnWidth] = useState(40); // 40% default
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef(null);

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

  // Handle mouse down for resizing
  const handleMouseDown = (e) => {
    console.log('Mouse down on divider');
    setIsResizing(true);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
  };

  // Handle mouse move for resizing
  const handleMouseMove = (e) => {
    if (!isResizing) return;

    console.log('Mouse moving, clientX:', e.clientX);

    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;

      // Constrain between 20% and 40%
      const constrainedWidth = Math.min(Math.max(newWidth, 25), 40);
      console.log('New width:', constrainedWidth);
      setLeftColumnWidth(constrainedWidth);
    }
  };

  // Handle mouse up for resizing
  const handleMouseUp = () => {
    console.log('Mouse up');
    setIsResizing(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  };

  // Add global event listeners when resizing
  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
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

      {/* Main Content - Two Column Layout */}
      <div
        ref={containerRef}
        className="flex-1 flex overflow-hidden border-b border-border/80 "
      >
        {/* Left Column - 40% (resizable 20%-40%) */}
        <AgentDetailMainLeft width={leftColumnWidth} agentId={agentId} />

        {/* Draggable Divider - Made it wider and more visible */}

        <div
          className="w-1 bg-primary/40 hover:bg-primary/60 cursor-col-resize transition-colors relative z-10 flex items-center justify-center"
          onMouseDown={handleMouseDown}
        >
          {/* Visual indicator */}
          <div className="w-1 h-8 bg-white rounded-full"></div>
        </div>

        {/* Right Column - Remaining space (60%) */}
        <AgentDetailMainRight setHasChanges={setHasChanges} />
      </div>
    </div>
  );
};

export default AgentDetail;
