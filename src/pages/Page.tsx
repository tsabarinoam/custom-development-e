import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function Page({ children, title, description }: PageProps) {
  return (
    <div className="space-y-6">
      {(title || description) && (
        <div className="space-y-2">
          {title && <h1 className="text-3xl font-bold tracking-tight">{title}</h1>}
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
}