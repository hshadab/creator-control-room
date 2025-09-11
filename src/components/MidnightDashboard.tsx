import { useState, useEffect } from "react";
import { Terminal, Settings, Activity, LogOut, Monitor, Cpu, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CommandPalette } from "./CommandPalette";
import { SettingsForm } from "./SettingsForm";
import { ActivityTimeline } from "./ActivityTimeline";
import { HelpOverlay } from "./HelpOverlay";
import { useToast } from "@/hooks/use-toast";

interface DashboardProps {
  onSignOut: () => void;
}

const systemStats = [
  {
    title: "CPU Usage",
    value: "45%",
    icon: Cpu,
    status: "normal" as const
  },
  {
    title: "Memory",
    value: "68%",
    icon: Monitor,
    status: "warning" as const
  },
  {
    title: "Storage",
    value: "82%",
    icon: HardDrive,
    status: "error" as const
  }
];

export const MidnightDashboard = ({ onSignOut }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [helpOverlayOpen, setHelpOverlayOpen] = useState(false);
  const { toast } = useToast();

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Command palette
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
      
      // Tab navigation
      if (e.key >= "1" && e.key <= "3") {
        const tabs = ["overview", "settings", "activity"];
        setActiveTab(tabs[parseInt(e.key) - 1]);
      }
      
      // Help overlay
      if (e.key === "?") {
        setHelpOverlayOpen(true);
      }
      
      // Sign out
      if ((e.ctrlKey || e.metaKey) && e.key === "q") {
        e.preventDefault();
        onSignOut();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onSignOut]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "text-success";
      case "warning":
        return "text-warning";
      case "error":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-primary terminal-pulse" />
              <h1 className="text-xl font-bold terminal-text">
                Midnight Terminal
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCommandPaletteOpen(true)}
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="text-xs">⌘K</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setHelpOverlayOpen(true)}
              className="text-muted-foreground hover:text-foreground"
            >
              ?
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onSignOut}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
            <TabsTrigger value="overview" className="gap-2">
              <Terminal className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="activity" className="gap-2">
              <Activity className="h-4 w-4" />
              Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <div className="grid gap-6 md:grid-cols-3">
              {systemStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="terminal-card">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.title}
                      </CardTitle>
                      <Icon className={`h-4 w-4 ${getStatusColor(stat.status)}`} />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="flex items-center mt-2">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          stat.status === "normal" ? "status-online" :
                          stat.status === "warning" ? "status-warning" :
                          "status-error"
                        }`} />
                        <span className="text-xs text-muted-foreground capitalize">
                          {stat.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="terminal-card">
              <CardHeader>
                <CardTitle>Welcome to Midnight Terminal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Your command center is ready. Use the keyboard shortcuts below to navigate efficiently:
                  </p>
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center justify-between p-2 rounded bg-secondary/30">
                      <span>Open command palette</span>
                      <kbd className="px-2 py-1 text-xs bg-muted rounded">⌘K</kbd>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-secondary/30">
                      <span>Navigate tabs</span>
                      <kbd className="px-2 py-1 text-xs bg-muted rounded">1, 2, 3</kbd>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-secondary/30">
                      <span>Show help</span>
                      <kbd className="px-2 py-1 text-xs bg-muted rounded">?</kbd>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <SettingsForm />
          </TabsContent>

          <TabsContent value="activity">
            <ActivityTimeline />
          </TabsContent>
        </Tabs>
      </main>

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigate={setActiveTab}
        onShowHelp={() => setHelpOverlayOpen(true)}
        onSignOut={onSignOut}
      />

      {/* Help Overlay */}
      <HelpOverlay
        isOpen={helpOverlayOpen}
        onClose={() => setHelpOverlayOpen(false)}
      />
    </div>
  );
};