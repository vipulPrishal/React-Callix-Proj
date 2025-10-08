import React from 'react';
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Globe,
  Headphones,
  Loader2,
  Menu,
  MessageCircle,
  Phone,
  Rocket,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Container } from '@/components/common/container';

const AgentDetailNavbar = ({
  agentName,
  setAgentName,
  isEditingName,
  setIsEditingName,
  callDirection,
  setCallDirection,
  showDirectionDropdown,
  setShowDirectionDropdown,
  showDeployDropdown,
  setShowDeployDropdown,
  activeTestMode,
  setActiveTestMode,
  hasChanges,
  lastSaved,
  setHasChanges,
}) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [originalName, setOriginalName] = React.useState(agentName);

  const handleNameChange = (e) => {
    setAgentName(e.target.value);
  };

  const handleNameSubmit = () => {
    setIsEditingName(false);
    // Only set hasChanges if the name actually changed
    if (agentName !== originalName) {
      setHasChanges(true);
      setOriginalName(agentName);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNameSubmit();
    }
  };

  const handleNameClick = () => {
    setOriginalName(agentName); // Store the original name when starting to edit
    setIsEditingName(true);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className=" border-b border-border/200 ml-[-20px] mt-[-25px] bg-background/100 backdrop-blur-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between w-full">
          {/* Left Side */}
          <div className="flex items-center gap-2 sm:gap-4 w-full llg:w-auto">
            {/* Back Arrow */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/ai-agent')}
              className="p-2 hover:bg-muted/50"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>

            {/* Agent Name Input */}
            <div className="flex items-center gap-2 flex-1 llg:flex-none">
              {isEditingName ? (
                <Input
                  value={agentName}
                  onChange={handleNameChange}
                  onBlur={handleNameSubmit}
                  onKeyPress={handleKeyPress}
                  className="w-full llg:w-48 bg-muted/50 border-border/50 text-foreground text-base"
                  autoFocus
                />
              ) : (
                <div
                  onClick={handleNameClick}
                  className="px-3 py-2 bg-muted/50 border border-border/50 rounded-md cursor-pointer hover:bg-muted/70 transition-colors w-full llg:w-auto llg:min-w-[200px]"
                >
                  <span className="text-foreground text-base truncate">
                    {agentName}
                  </span>
                </div>
              )}
            </div>

            {/* Mobile/Tablet Hamburger Menu (below llg) */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="llg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Desktop Right Side (lg and above) */}
          <div className="hidden llg:flex items-center gap-4">
            {/* Call Direction Dropdown */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDirectionDropdown(!showDirectionDropdown)}
                className="flex items-center gap-2"
              >
                <span className="text-foreground">{callDirection}</span>
                {callDirection === 'Outgoing' ? (
                  <ChevronUp className="w-4 h-4 text-orange-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-green-500" />
                )}
              </Button>

              {showDirectionDropdown && (
                <div className="absolute top-full right-0 mt-1 w-58 bg-card border border-border rounded-md shadow-lg z-50">
                  <div
                    onClick={() => {
                      setCallDirection('Outgoing');
                      setShowDirectionDropdown(false);
                      setHasChanges(true);
                    }}
                    className="flex items-center gap-1 px-1 py-1 hover:bg-primary/10 cursor-pointer rounded-md transition-colors"
                  >
                    <div className="text-foreground text-[16px]">
                      Outgoing<span className="ml-4">-</span>
                      <span className="text-muted-foreground text-[12px]">
                        Makes outgoing calls
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setCallDirection('Incoming');
                      setShowDirectionDropdown(false);
                      setHasChanges(true);
                    }}
                    className="flex items-center gap-1 px-1 pb-2 hover:bg-primary/10 cursor-pointer rounded-md transition-colors"
                  >
                    <div className="text-foreground text-[16px]">
                      Incoming<span className="ml-4">-</span>
                      <span className="text-muted-foreground text-[12px]">
                        Receives incoming calls
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cost Display */}
            <div className="flex items-center justify-between gap-8">
              <div className="px-3 py-2 bg-muted/50 border border-border/50 rounded-md">
                <span className="text-foreground">Cost/Minute: $0.1</span>
              </div>

              <div className="saved-time">
                {hasChanges && (
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                )}
                {lastSaved && !hasChanges && (
                  <span className="text-green-500 text-sm">
                    saved on {formatTime(lastSaved)}
                  </span>
                )}
              </div>
            </div>

            {/* Test with Section */}
            <div className="flex items-center gap-2">
              <span className="text-foreground text-sm">Test with</span>
              <div className="flex gap-1">
                {[
                  {
                    id: 'Chat',
                    icon: MessageCircle,
                    tooltip: 'Test your assistant with text-based chat',
                  },
                  {
                    id: 'Web Call',
                    icon: Headphones,
                    tooltip:
                      'Test your assistant with browser-based voice call',
                  },
                  {
                    id: 'Phone Call',
                    icon: Phone,
                    tooltip: 'Test your assistant with a phone call',
                  },
                ].map(({ id, icon: Icon, tooltip }) => (
                  <div key={id} className="relative group">
                    <Button
                      variant={activeTestMode === id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setActiveTestMode(id)}
                      className={`flex items-center gap-2 ${
                        activeTestMode === id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-teal-500/20 text-teal-500 border-teal-500/30 hover:bg-teal-500/30'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{id}</span>
                    </Button>
                    <div className="absolute top-[30px] bg-primary transform -translate-x-1/2 mb-2 px-3 py-2 border border-border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                      <span className="text-sm text-foreground whitespace-nowrap">
                        {tooltip}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deploy Button */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDeployDropdown(!showDeployDropdown)}
                className="flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                <span>Deploy</span>
                <ChevronDown className="w-4 h-4" />
              </Button>

              {showDeployDropdown && (
                <div className="absolute top-full right-0 mt-1 w-56 bg-card border border-border rounded-md shadow-lg z-50">
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-muted/50 cursor-pointer">
                    <Phone className="w-4 h-4 text-foreground" />
                    <span className="text-foreground text-[14px]">
                      Phone Numbers
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-muted/50 cursor-pointer">
                    <Globe className="w-4 h-4 text-foreground" />
                    <span className="text-foreground text-[14px]">
                      Integrate with your website
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu (below lg - 1170px) */}
        {isMobileMenuOpen && (
          <div className="llg:hidden border-t border-border/30 py-4 space-y-4">
            {/* Call Direction */}
            <div className="flex items-center justify-between">
              <span className="text-foreground text-sm">Call Direction:</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCallDirection(
                    callDirection === 'Outgoing' ? 'Incoming' : 'Outgoing',
                  )
                }
                className="flex items-center gap-2"
              >
                <span className="text-foreground">{callDirection}</span>
                {callDirection === 'Outgoing' ? (
                  <ChevronUp className="w-4 h-4 text-orange-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-green-500" />
                )}
              </Button>
            </div>

            {/* Cost Display */}
            <div className="flex items-center justify-between">
              <div className="px-3 py-2 bg-muted/50 border border-border/50 rounded-md">
                <span className="text-foreground text-sm">
                  Cost/Minute: $0.1
                </span>
              </div>
              {lastSaved && !hasChanges && (
                <span className="text-green-500 text-sm">
                  saved on {formatTime(lastSaved)}
                </span>
              )}
            </div>

            {/* Test with Section */}
            <div className="space-y-3">
              <span className="text-foreground text-sm">Test with:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'Chat', icon: MessageCircle },
                  { id: 'Web Call', icon: Headphones },
                  { id: 'Phone Call', icon: Phone },
                ].map(({ id, icon: Icon }) => (
                  <Button
                    key={id}
                    variant={activeTestMode === id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveTestMode(id)}
                    className={`flex items-center gap-2 justify-start ${
                      activeTestMode === id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-teal-500/20 text-teal-500 border-teal-500/30'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{id}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Deploy Button */}
            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDeployDropdown(!showDeployDropdown)}
                className="flex items-center gap-2 w-full justify-start"
              >
                <Rocket className="w-4 h-4" />
                <span>Deploy</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </Button>

              {showDeployDropdown && (
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-muted/50 cursor-pointer rounded-md">
                    <Phone className="w-4 h-4 text-foreground" />
                    <span className="text-foreground text-sm">
                      Phone Numbers
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-muted/50 cursor-pointer rounded-md">
                    <Globe className="w-4 h-4 text-foreground" />
                    <span className="text-foreground text-sm">
                      Integrate with your website
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>

      {/* Click outside to close dropdowns - ONLY for desktop dropdowns */}
      {(showDirectionDropdown || showDeployDropdown) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowDirectionDropdown(false);
            setShowDeployDropdown(false);
          }}
        />
      )}
    </div>
  );
};

export default AgentDetailNavbar;
