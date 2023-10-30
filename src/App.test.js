import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './main-page'

it("renders without crashing", () => {
  const div = document.createElement("div");

  // Use createRoot to render your App
  const root = createRoot(div);
  root.render(<App />);
  root.unmount();
});