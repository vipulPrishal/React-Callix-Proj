import React, { useEffect, useState } from 'react';
import { ArrowLeft, Globe, MessageCircle, Phone, Settings } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/common/container';

const AgentDetail = () => {
  const { agentId } = useParams(); // This will get the ID from the URL
  const navigate = useNavigate();
  const [agentData, setAgentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading agent data based on ID
    const loadAgentData = async () => {
      setLoading(true);
      // In real app, you'd fetch data based on agentId
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock data - in real app, this would come from API
      setAgentData({
        id: agentId,
        name: 'Alex',
        prompt: 'Create a voice AI agent to schedule appointments...',
        status: 'Active',
        createdAt: new Date().toISOString(),
        costPerMinute: 0.1,
      });
      setLoading(false);
    };

    loadAgentData();
  }, [agentId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
          <p className="text-muted-foreground">Loading agent...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/30 bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/ai-agent')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Agents
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Agent #{agentId}
                </h1>
                <p className="text-muted-foreground">Created from template</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Test with Chat
              </Button>
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Test with Phone
              </Button>
              <Button size="sm">
                <Globe className="w-4 h-4 mr-2" />
                Deploy
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Agent Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    {agentData?.name}
                  </h2>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">
                      {agentData?.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Cost/Minute: ${agentData?.costPerMinute}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Agent ID
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      {agentData?.id}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Created
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {new Date(agentData?.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Welcome Message Section */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Welcome Message
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        Dynamic
                      </span>
                      <div className="w-10 h-5 bg-primary rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <p className="text-foreground">
                      Hi there, this is {agentData?.name} from customer support.
                      How can I help you today?
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Character limit: 300 (215 remaining)
                  </p>
                </CardContent>
              </Card>

              {/* Conversational Flow Section */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Conversational Flow
                    </h3>
                    <Button variant="outline" size="sm">
                      + Add Section
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Agent Role & Context',
                      'Introduction',
                      'Issue Identification',
                      'Troubleshooting',
                      'Resolution',
                      'Closing',
                    ].map((section, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                      >
                        <span className="text-foreground">
                          {index + 1}. {section}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-4 bg-primary rounded-full relative">
                            <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-600"
                          >
                            🗑️
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AgentDetail;
