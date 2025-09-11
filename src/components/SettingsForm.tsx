import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Save, User, Mail, Bell, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const settingsSchema = z.object({
  displayName: z.string().min(2, "Display name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  notifications: z.boolean(),
  darkMode: z.boolean(),
  autoSave: z.boolean(),
});

type SettingsFormData = z.infer<typeof settingsSchema>;

export const SettingsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      displayName: "Terminal User",
      email: "user@midnight.dev",
      notifications: true,
      darkMode: true,
      autoSave: true,
    },
  });

  const onSubmit = async (data: SettingsFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Settings saved:", data);
    
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
    
    setIsLoading(false);
  };

  const watchedValues = watch();

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="terminal-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Profile Settings
          </CardTitle>
          <CardDescription>
            Update your profile information and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Display Name
              </Label>
              <Input
                id="displayName"
                {...register("displayName")}
                className={`bg-input border-border ${
                  errors.displayName ? "border-destructive" : ""
                }`}
                placeholder="Enter your display name"
              />
              {errors.displayName && (
                <p className="text-sm text-destructive flex items-center gap-1 animate-slide-down">
                  <span className="w-1 h-1 bg-destructive rounded-full" />
                  {errors.displayName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={`bg-input border-border ${
                  errors.email ? "border-destructive" : ""
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-destructive flex items-center gap-1 animate-slide-down">
                  <span className="w-1 h-1 bg-destructive rounded-full" />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Bell className="h-4 w-4 text-primary" />
                Preferences
              </h4>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-normal">Push Notifications</Label>
                  <p className="text-xs text-muted-foreground">
                    Receive notifications about important updates
                  </p>
                </div>
                <Switch
                  checked={watchedValues.notifications}
                  onCheckedChange={(checked) => setValue("notifications", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-normal">Auto-save</Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically save changes as you type
                  </p>
                </div>
                <Switch
                  checked={watchedValues.autoSave}
                  onCheckedChange={(checked) => setValue("autoSave", checked)}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full terminal-glow" 
              disabled={isLoading}
            >
              <Save className="mr-2 h-4 w-4" />
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};