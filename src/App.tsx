import { PageLayout, ContentSection, EmptyState } from '@/components';
import { Button } from '@/components/ui/button';
import { Plus } from '@phosphor-icons/react';

function App() {
  return (
    <PageLayout title="Blank Application Template">
      <div className="grid gap-6">
        <ContentSection 
          title="Welcome" 
          description="This is a clean, organized application template ready for your custom development."
        >
          <EmptyState
            title="Ready to Build"
            description="The application structure is in place. Start adding your features and components."
            icon={<Plus size={48} weight="light" />}
            action={
              <Button>
                Get Started
              </Button>
            }
          />
        </ContentSection>

        <div className="grid md:grid-cols-2 gap-6">
          <ContentSection 
            title="Components" 
            description="Pre-built system components for rapid development"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <span className="font-medium">Layout Components</span>
                <span className="text-sm text-muted-foreground">Ready</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <span className="font-medium">Common Components</span>
                <span className="text-sm text-muted-foreground">Ready</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <span className="font-medium">UI Components</span>
                <span className="text-sm text-muted-foreground">40+ Available</span>
              </div>
            </div>
          </ContentSection>

          <ContentSection 
            title="Structure" 
            description="Organized folder structure for scalable development"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <span className="font-medium">src/components</span>
                <span className="text-sm text-muted-foreground">System ready</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <span className="font-medium">src/pages</span>
                <span className="text-sm text-muted-foreground">Ready for content</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                <span className="font-medium">src/utils</span>
                <span className="text-sm text-muted-foreground">Utility functions</span>
              </div>
            </div>
          </ContentSection>
        </div>
      </div>
    </PageLayout>
  );
}

export default App;