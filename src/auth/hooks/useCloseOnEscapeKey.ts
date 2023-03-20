import { useEffect } from 'react';

export const useOnEscapeKey = (callback: () => void) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') callback();
    };

    document.body.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', handleEscapeKey);
    };
  }, [callback]);
};
