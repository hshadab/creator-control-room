import { HelpCircle, Keyboard, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface HelpOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const shortcuts = [
  {
    key: "Ctrl/Cmd + K",
    description: "Open command palette"
  },
  {
    key: "1, 2, 3",
    description: "Navigate to Overview, Settings, Activity"
  },
  {
    key: "?",
    description: "Show this help dialog"
  },
  {
    key: "Ctrl/Cmd + Q", 
    description: "Sign out"
  },
  {
    key: "Escape",
    description: "Close dialogs/overlays"
  },
  {
    key: "Arrow Keys",
    description: "Navigate command palette"
  },
  {
    key: "Enter",
    description: "Execute selected command"
  },
  {
    key: "Tab",
    description: "Navigate form fields"
  }
];

export const HelpOverlay = ({ isOpen, onClose }: HelpOverlayProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md animate-fade-in">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            Keyboard Shortcuts
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Keyboard className="h-4 w-4" />
            Use these shortcuts to navigate quickly
          </div>
          
          <div className="space-y-3">
            {shortcuts.map((shortcut, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 rounded-md bg-secondary/30">
                <span className="text-sm text-foreground">
                  {shortcut.description}
                </span>
                <kbd className="inline-flex items-center px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded border border-border">
                  {shortcut.key}
                </kbd>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end pt-4">
            <Button variant="ghost" onClick={onClose} className="gap-2">
              <X className="h-4 w-4" />
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};