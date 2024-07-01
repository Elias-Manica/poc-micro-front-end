import React from 'react';
import ReactDOM from 'react-dom/client';

import Button from 'MFEComponents/Button';

const App: React.FC = () => {
  return (
    <>
      aplicação host
      <Button />
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
