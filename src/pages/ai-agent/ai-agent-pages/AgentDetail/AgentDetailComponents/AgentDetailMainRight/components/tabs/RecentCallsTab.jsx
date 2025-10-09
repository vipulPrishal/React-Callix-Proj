import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { useParams } from 'react-router-dom';

const RecentCallsTab = () => {
  const { agentId } = useParams();
  const [callHistory, setCallHistory] = useState([]);

  // Load call history from localStorage or API
  useEffect(() => {
    const loadCallHistory = () => {
      // MOCK DATA FOR DEMO - Comment out when not needed
      // const mockCalls = [
      //   {
      //     id: 1,
      //     phoneNumber: '+1 (555) 123-4567',
      //     duration: '3m 45s',
      //     status: 'Completed',
      //     timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      //   },
      //   {
      //     id: 2,
      //     phoneNumber: '+1 (555) 987-6543',
      //     duration: '1m 20s',
      //     status: 'Completed',
      //     timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
      //   },
      //   {
      //     id: 3,
      //     phoneNumber: '+1 (555) 456-7890',
      //     duration: '0m 15s',
      //     status: 'Missed',
      //     timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      //   },
      //   {
      //     id: 4,
      //     phoneNumber: '+1 (555) 321-0987',
      //     duration: '5m 12s',
      //     status: 'Completed',
      //     timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
      //   },
      // ];
      // setCallHistory(mockCalls);
      // END MOCK DATA

      // Try to get from localStorage first
      const savedHistory = localStorage.getItem(
        `agent_${agentId}_call_history`,
      );
      if (savedHistory) {
        setCallHistory(JSON.parse(savedHistory));
      }
      // In production, you'd fetch from API:
      // const response = await fetch(`/api/agents/${agentId}/calls`);
      // setCallHistory(response.data);
    };

    loadCallHistory();
  }, [agentId]);

  // Empty state when no calls
  if (callHistory.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
        <div className="w-20 h-20 rounded-full bg-muted/20 flex items-center justify-center mb-6">
          <Phone
            className="w-10 h-10 text-muted-foreground"
            strokeWidth={1.5}
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">No call history</h2>
        <p className="text-muted-foreground text-center max-w-md">
          You haven't made any calls with this assistant yet.
        </p>
        <p className="text-muted-foreground text-center max-w-md">
          Start a call to see your history here.
        </p>
      </div>
    );
  }

  // When there are calls, show the list
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Calls</h2>
      <div className="space-y-3">
        {callHistory.map((call) => (
          <div
            key={call.id}
            className="border border-border/80 rounded-lg p-4 hover:bg-muted/20 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{call.phoneNumber || 'Unknown'}</p>
                  <p className="text-sm text-muted-foreground">
                    {call.duration} • {call.status}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">
                  {new Date(call.timestamp).toLocaleDateString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  {new Date(call.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCallsTab;
