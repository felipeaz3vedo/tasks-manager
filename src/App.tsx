import { useEffect } from 'react';

export function App() {
  const a = 2;
  useEffect(() => {
    a;
  }, []);
  return <></>;
}
