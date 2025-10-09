// ----- version 2:----- (making the left component)------------------
import React, { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const AgentDetailMainLeft = ({ width, agentId }) => {
  const location = useLocation();
  const promptText = location.state?.promptText || '';

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  // Typewriter placeholder state
  const prompts = [
    'Let me know how I can help you…',
    'Ask anything like: "How do I integrate with N8N?"',
    'Describe what you want your agent to do…',
  ];
  const [typewriterText, setTypewriterText] = useState('');
  const [twIdx, setTwIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Typewriter effect for placeholder (mirror AI Agent page pacing)
  useEffect(() => {
    const current = prompts[twIdx % prompts.length];
    const timer = setTimeout(() => {
      if (charIdx < current.length) {
        setTypewriterText(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else {
        setTimeout(() => {
          setCharIdx(0);
          setTwIdx((i) => i + 1);
          setTypewriterText('');
        }, 1200);
      }
    }, 40);
    return () => clearTimeout(timer);
  }, [charIdx, twIdx]);

  const getAgentCreatedAt = () => {
    const key = `agent_created_at_${agentId}`;
    const saved = localStorage.getItem(key);
    if (saved) return new Date(saved);
    const now = new Date();
    localStorage.setItem(key, now.toISOString());
    return now;
  };

  useEffect(() => {
    if (messages.length === 0 && agentId) {
      const createdAt = getAgentCreatedAt();

      const userMessage = {
        id: 1,
        type: 'user',
        content:
          promptText ||
          `Create a voice AI agent to schedule an appointments. Personality: - Courteous, organized, and efficient. Capabilities: - Check calendars and find open times in real time. - Offer the best and backup slots automatically. Call Flow: 1. Professional greeting. 2. Collect caller's name, desired service, and preferred dates/times. 3. Suggest available slots and confirm selection. 4. Provide confirmation 5. End with a friendly closing. Error Handling: - If availability changes mid-call, apologize and offer the next best slot. - Clarify unclear dates/times (e.g., "Did you mean next Tuesday, June 10th?"). Goals: - Make scheduling painless for customers. - Reduce back-and-forth and no-shows. - Keep staff calendars accurate. - Free front-desk teams for personal interactions.`,
        timestamp: createdAt, // use actual creation time
      };

      const systemMessage = {
        id: 2,
        type: 'system',
        content:
          'Your assistant is ready. This helper chat will guide you with your agent setup, integrations, and platform help. Ask anything, like: "How do I integrate with N8N?"',
        timestamp: new Date(),
      };

      setMessages([userMessage, systemMessage]);
    }
  }, [messages.length, agentId, promptText]);

  const addUserMessage = (content) => {
    const newMessage = {
      id: Date.now(),
      type: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addAssistantMessage = (content) => {
    const newMessage = {
      id: Date.now(),
      type: 'assistant',
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    addUserMessage(inputMessage);
    setInputMessage('');
    setIsTyping(true);

    // Simulate assistant response
    setTimeout(() => {
      const responses = [
        "It seems like there might have been a typo! Could you please tell me what you'd like to do or what you need help with regarding your agent? For example, are you looking to enhance its: * Voice quality? * Response accuracy? * Integration setup? * Call handling? Let me know how I can assist you!",
        "It looks like there might be a misunderstanding with the input. Could you please clarify what you'd like to do or what you need help with regarding your agent? I'm here to assist you with things like: * Optimizing its voice? * Improving response accuracy? * Setting up integrations? * Testing its performance? Let me know how I can best help!",
        "I understand you're looking for assistance. Could you please provide more details about what you'd like to accomplish with your agent? I can help you with: * Configuration settings * Integration setup * Performance optimization * Troubleshooting issues",
      ];

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      addAssistantMessage(randomResponse);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTimestamp = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div
      className="bg-background border-r border-border/30 flex flex-col h-full"
      style={{ width: `${width}%` }}
    >
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col">
            {message.type === 'user' ? (
              // User Message - Dark grey bubble with white text
              <div className="flex justify-end">
                <div className="max-w-[85%]">
                  <div className="bg-primary/20 border border-border/50 rounded-lg p-3">
                    <p className="text-foreground text-sm whitespace-pre-line">
                      {message.content}
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground text-right">
                      {formatTimestamp(message.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            ) : message.type === 'system' ? (
              // System Message - Primary color background, full width
              <div className="flex justify-start">
                <div className="w-full">
                  <div className="bg-primary/10 border border-primary/50 rounded-lg p-3 mb-1">
                    <p className="text-primary text-sm">{message.content}</p>
                  </div>
                </div>
              </div>
            ) : (
              // Assistant Message - Dark grey bubble
              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <div className="bg-muted/100 border border-border/50 rounded-lg p-3">
                    <p className="text-foreground text-sm whitespace-pre-line">
                      {message.content}
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground text-right">
                      {formatTimestamp(message.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[85%]">
              <div className="bg-muted/50 border border-border/50 rounded-lg p-3 mb-1">
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                  <span className="text-muted-foreground text-sm ml-2">
                    Assistant is typing...
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area - AI Agent prompt style */}
      <div className="border-t border-border/30 pt-4 px-4 pb-1">
        <div className="relative rounded-lg border border-border/100 focus-within:border-2 focus-within:border-[#408bff]">
          <div className="px-4 pt-2 pb-3 min-h-[120px] overflow-y-auto">
            <Textarea
              ref={textareaRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={typewriterText}
              rows={4}
              className="min-h-[100px] text-base resize-none border-none scrollbar-hide focus:!border-none focus:!ring-0 bg-transparent p-0 pr-14 text-foreground"
            />
          </div>
          <button
            type="button"
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="absolute bottom-2 right-2 h-9 w-9 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed grid place-items-center"
            aria-label="Send"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentDetailMainLeft;
