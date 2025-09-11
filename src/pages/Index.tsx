import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { MidnightDashboard } from "@/components/MidnightDashboard";
import { useToast } from "@/hooks/use-toast";

interface LoginCredentials {
  username: string;
  password: string;
}

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<LoginCredentials | null>(null);
  const { toast } = useToast();

  const handleLogin = (credentials: LoginCredentials) => {
    // Simple demo authentication - in production, this would be handled by backend
    if (credentials.username === "admin" && credentials.password === "password") {
      setUser(credentials);
      setIsAuthenticated(true);
      toast({
        title: "Welcome to Midnight Terminal",
        description: "Successfully signed in to your dashboard.",
      });
    } else {
      toast({
        title: "Authentication Failed",
        description: "Invalid credentials. Try admin/password for demo.",
        variant: "destructive",
      });
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUser(null);
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out.",
    });
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return <MidnightDashboard onSignOut={handleSignOut} />;
};

export default Index;