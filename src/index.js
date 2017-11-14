import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from "material-ui";
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import 'toastr/build/toastr.css';



injectTapEventPlugin();


const WithRouter =()=>(
  <BrowserRouter>
      <Main/>
  </BrowserRouter>
);

const Main = ()=>(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>
);


ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
