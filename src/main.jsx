import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from './App';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FirstApp title="Hola soy Vegeta" /> */}
    <CounterApp value={10} />
  </StrictMode>
);
