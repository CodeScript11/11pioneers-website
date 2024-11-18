import React from 'react';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export function Card({ title, description, children, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}
