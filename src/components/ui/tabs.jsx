import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

// Root
function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      className={cn("flex flex-col items-center gap-4 my-3", className)}
      {...props}
    />
  );
}

// List of tabs
function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      className={cn(
        // Glass effect background
        "inline-flex items-center justify-center rounded-full bg-indigo-800 dark:bg-gray-800/70 backdrop-blur-sm p-1",
        className
      )}
      {...props}
    />
  );
}

// Individual tab
function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "relative rounded-full px-6 py-2 text-sm font-medium transition-all duration-200",
        "text-white dark:text-gray-400 dark:hover:text-white cursor-pointer",
        // Active tab styles
        "data-[state=active]:bg-white",
        "data-[state=active]:text-indigo-800 data-[state=active]:shadow-md",
        // Focus ring
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
        className
      )}
      {...props}
    />
  );
}

// Content panel
function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      className={cn(
        "w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm outline-none",
        "animate-fadeIn",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
