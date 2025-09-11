import { useState } from "react";
import { Terminal, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginFormProps {
  onLogin: () => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleMockSignIn = async () => {
    setIsLoading(true);
    
    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    onLogin();
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6 animate-fade-in">
        {/* Logo/Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
              <Terminal className="h-8 w-8 text-primary terminal-pulse" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold terminal-text">Midnight Terminal</h1>
            <p className="text-muted-foreground text-sm">
              Access your command center
            </p>
          </div>
        </div>

        {/* Mock Sign In */}
        <Card className="terminal-card">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Demo Access</CardTitle>
            <CardDescription>
              Click below to access the dashboard (no credentials required)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleMockSignIn}
              className="w-full terminal-glow" 
              disabled={isLoading}
            >
              <LogIn className="mr-2 h-4 w-4" />
              {isLoading ? "Accessing..." : "Enter Dashboard"}
            </Button>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-muted-foreground">
          Press <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">?</kbd> for keyboard shortcuts
        </div>
      </div>
    </div>
  );
};