import { useState, useEffect } from "react";
import { Search, Terminal, Settings, Activity, HelpCircle, LogOut } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Command {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  shortcut?: string;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string) => void;
  onShowHelp: () => void;
  onSignOut: () => void;
}

export const CommandPalette = ({ 
  isOpen, 
  onClose, 
  onNavigate, 
  onShowHelp, 
  onSignOut 
}: CommandPaletteProps) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: Command[] = [
    {
      id: "overview",
      label: "Go to Overview",
      icon: Terminal,
      action: () => onNavigate("overview"),
      shortcut: "1"
    },
    {
      id: "settings",
      label: "Go to Settings",
      icon: Settings,
      action: () => onNavigate("settings"),
      shortcut: "2"
    },
    {
      id: "activity",
      label: "Go to Activity",
      icon: Activity,
      action: () => onNavigate("activity"),
      shortcut: "3"
    },
    {
      id: "help",
      label: "Show Help",
      icon: HelpCircle,
      action: onShowHelp,
      shortcut: "?"
    },
    {
      id: "signout",
      label: "Sign Out",
      icon: LogOut,
      action: onSignOut,
      shortcut: "Q"
    }
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, filteredCommands.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
        break;
      case "Escape":
        onClose();
        break;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="command-palette max-w-md p-0 overflow-hidden animate-fade-in">
        <div className="flex items-center border-b border-border px-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent border-0 p-3 text-sm placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
        <div className="max-h-64 overflow-y-auto">
          {filteredCommands.length === 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No commands found
            </div>
          ) : (
            filteredCommands.map((command, index) => {
              const Icon = command.icon;
              return (
                <div
                  key={command.id}
                  className={`flex items-center justify-between px-3 py-2 text-sm cursor-pointer transition-colors ${
                    index === selectedIndex
                      ? "bg-secondary text-secondary-foreground"
                      : "text-foreground hover:bg-secondary/50"
                  }`}
                  onClick={() => {
                    command.action();
                    onClose();
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {command.label}
                  </div>
                  {command.shortcut && (
                    <kbd className="pointer-events-none text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                      {command.shortcut}
                    </kbd>
                  )}
                </div>
              );
            })
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};