import React from 'react';
import ReactDOM from 'react-dom';
import InstagramLayout from './instagram/InstagramLayout'
import { BrowserRouter} from 'react-router-dom';
import 'bulma/css/bulma.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <InstagramLayout/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

