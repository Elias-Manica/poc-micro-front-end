import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';

const App = () => {
  return (
    <>
      <div>Hello, world remote!</div>
      <Button />
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
