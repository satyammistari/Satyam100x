
import React, { useState, useRef, useEffect } from 'react';
import TaskCard, { Task } from './TaskCard';

export interface Column {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

interface TaskColumnProps {
  column: Column;
  onDrop: (e: React.DragEvent, columnId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onTaskDragStart: (e: React.DragEvent, task: Task) => void;
  onTaskDragEnd: () => void;
  onStatusChange: (taskId: string, newStatus: string) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  column,
  onDrop,
  onDragOver,
  onDragLeave,
  onTaskDragStart,
  onTaskDragEnd,
  onStatusChange
}) => {
  const [isOver, setIsOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Alternate direction: even columns scroll up, odd scroll down
  const direction =
    column.id === 'todo' || column.id === 'completed' ? 'up' : 'down';

  useEffect(() => {
    if (!scrollRef.current || paused) return;
    const container = scrollRef.current;
    let frame: number;
    let scrollAmount = 0;
    const speed = 0.5; // px per frame
    function animate() {
      if (direction === 'up') {
        scrollAmount += speed;
        if (scrollAmount >= container.scrollHeight / 2) {
          scrollAmount = 0;
        }
      } else {
        scrollAmount -= speed;
        if (scrollAmount <= 0) {
          scrollAmount = container.scrollHeight / 2;
        }
      }
      container.scrollTop = scrollAmount;
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [paused, direction, column.tasks.length]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(true);
    onDragOver(e);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    setIsOver(false);
    onDragLeave(e);
  };
  const handleDrop = (e: React.DragEvent) => {
    setIsOver(false);
    onDrop(e, column.id);
  };

  return (
    <div 
      className={`flex flex-col w-72 min-w-72 rounded-lg border border-border backdrop-blur-sm transition-all duration-300 ${
        isOver ? 'column-highlight border-muted/50' : 'bg-card/50'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="p-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-muted"></span>
          <h4 className="font-medium text-sm text-foreground">{column.title}</h4>
          <span className="text-xs bg-muted/50 px-2 py-0.5 rounded-full text-muted-foreground">
            {column.tasks.length}
          </span>
        </div>
        <div className="text-muted-foreground">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12V12.01M8 12V12.01M16 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {/* JS-driven vertical scroll area */}
      <div
        ref={scrollRef}
        className="relative h-96 overflow-hidden group"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ scrollBehavior: 'auto' }}
      >
        <div className="flex flex-col space-y-2">
          {/* Repeat tasks for seamless loop */}
          {[...column.tasks, ...column.tasks].map((task, idx) => (
            <TaskCard
              key={task.id + '-' + idx}
              task={task}
              onDragStart={onTaskDragStart}
              onDragEnd={onTaskDragEnd}
              onStatusChange={onStatusChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskColumn;
