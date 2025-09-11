import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { MidnightDashboard } from "@/components/MidnightDashboard";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const handleLogin = () => {
    setIsAuthenticated(true);
    toast({
      title: "Welcome to Midnight Terminal",
      description: "Successfully accessed your dashboard.",
    });
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
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