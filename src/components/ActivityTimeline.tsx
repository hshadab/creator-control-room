import { Activity, CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  status: "success" | "warning" | "error" | "pending";
  type: "system" | "user" | "api";
}

const mockEvents: TimelineEvent[] = [
  {
    id: "1",
    title: "System Check Complete",
    description: "All systems operating normally",
    timestamp: "2 minutes ago",
    status: "success",
    type: "system"
  },
  {
    id: "2", 
    title: "User Login",
    description: "Terminal User logged in from 192.168.1.100",
    timestamp: "5 minutes ago",
    status: "success",
    type: "user"
  },
  {
    id: "3",
    title: "High Memory Usage",
    description: "Memory usage exceeded 85% threshold",
    timestamp: "12 minutes ago", 
    status: "warning",
    type: "system"
  },
  {
    id: "4",
    title: "API Request Failed",
    description: "Failed to connect to external service",
    timestamp: "18 minutes ago",
    status: "error",
    type: "api"
  },
  {
    id: "5",
    title: "Database Backup",
    description: "Scheduled backup in progress...",
    timestamp: "25 minutes ago",
    status: "pending",
    type: "system"
  },
  {
    id: "6",
    title: "Settings Updated",
    description: "User preferences have been modified",
    timestamp: "1 hour ago",
    status: "success",
    type: "user"
  }
];

const getStatusIcon = (status: TimelineEvent["status"]) => {
  switch (status) {
    case "success":
      return <CheckCircle className="h-4 w-4 text-success" />;
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-warning" />;
    case "error":
      return <XCircle className="h-4 w-4 text-destructive" />;
    case "pending":
      return <Clock className="h-4 w-4 text-muted-foreground" />;
  }
};

const getStatusColor = (status: TimelineEvent["status"]) => {
  switch (status) {
    case "success":
      return "status-online";
    case "warning":
      return "status-warning";
    case "error":
      return "status-error";
    case "pending":
      return "status-inactive";
  }
};

const getTypeColor = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "system":
      return "text-terminal-cyan";
    case "user":
      return "text-primary";
    case "api":
      return "text-terminal-amber";
  }
};

export const ActivityTimeline = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="terminal-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            System Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-6 bottom-0 w-px bg-border" />
            
            <div className="space-y-6">
              {mockEvents.map((event, index) => (
                <div key={event.id} className="relative flex items-start space-x-4">
                  {/* Status indicator */}
                  <div className={`
                    relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 border-background
                    ${getStatusColor(event.status)}
                  `}>
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>

                  {/* Event content */}
                  <div className="flex-1 min-w-0 pb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(event.status)}
                        <h4 className="text-sm font-medium">{event.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getTypeColor(event.type)} border-current/20`}>
                          {event.type}
                        </span>
                      </div>
                      <time className="text-xs text-muted-foreground">
                        {event.timestamp}
                      </time>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};