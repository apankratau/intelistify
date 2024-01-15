import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import Home from 'pages/home';

import '@radix-ui/themes/styles.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Theme>
      <Home />
    </Theme>
  </React.StrictMode>
);
