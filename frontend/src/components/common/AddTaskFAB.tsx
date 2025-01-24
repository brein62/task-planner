"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddTaskFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim()) {
      console.log("Adding task:", taskName);
      // Here you would typically add the task to your state or send it to an API
      setTaskName("");
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-8 right-8 shadow-lg rounded-full px-4 py-2 flex items-center space-x-0"
          size="lg"
        >
          <Plus className="h-5 w-5" />
          <span>Add Task</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-name" className="text-right">
              Task
            </Label>
            <Input
              id="task-name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="col-span-3"
              placeholder="Enter your task here"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleAddTask}>Add Task</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
