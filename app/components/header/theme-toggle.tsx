"use client";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun
        aria-hidden="true"
        className={cn(
          "size-3.5 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isDark
            ? "scale-90 text-muted-foreground/45"
            : "scale-100 text-muted-foreground"
        )}
      />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label={
          mounted
            ? isDark
              ? "Switch to light mode"
              : "Switch to dark mode"
            : "Toggle theme"
        }
      />
      <Moon
        aria-hidden="true"
        className={cn(
          "size-3.5 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isDark
            ? "scale-100 text-muted-foreground"
            : "scale-90 text-muted-foreground/45"
        )}
      />
    </div>
  );
}
