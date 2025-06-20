

import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {Provider} from 'react-redux';
import appStore from '../Store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={appStore}>
    <App />
  </Provider>
  
);
