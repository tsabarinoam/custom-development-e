import { PageLayout, ContentSection } from '@/components';
import { Calculator } from '@/components/calculator';
import { CalculatorProvider } from './context/CalculatorContext';

function App() {
  return (
    <PageLayout title="Scientific Calculator">
      <div className="grid gap-6">
        <ContentSection 
          title="Scientific Calculator" 
          description="A powerful calculator with scientific functions, memory operations, and calculation history."
        >
          <CalculatorProvider>
            <Calculator />
          </CalculatorProvider>
        </ContentSection>
      </div>
    </PageLayout>
  );
}

export default App;