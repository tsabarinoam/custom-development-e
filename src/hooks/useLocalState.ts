import { useState, useEffect } from 'react';
import { useKV } from '@github/spark/hooks';

export function useLocalState<T>(key: string, defaultValue: T) {
  const [value, setValue, deleteValue] = useKV(key, defaultValue);
  
  return [value, setValue, deleteValue] as const;
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}