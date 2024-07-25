import React from 'react';
import ReactDOM from 'react-dom/client';

import Button from 'MFEComponents/Button';
import App from 'MFEComponents/App';

const HostApp: React.FC = () => {
  return (
    <>
      aplicação host
      <Button />
      <App />
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<HostApp />);
