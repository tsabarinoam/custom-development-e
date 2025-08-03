import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ContentSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function ContentSection({ title, description, children, className = '' }: ContentSectionProps) {
  return (
    <Card className={`w-full ${className}`}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle className="text-xl font-semibold">{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}