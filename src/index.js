import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from "material-ui";
import injectTapEventPlugin from 'react-tap-event-plugin';



injectTapEventPlugin();


const WithRouter =()=>(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
);

const Main = ()=>(
    <MuiThemeProvider>
        <WithRouter/>
    </MuiThemeProvider>
);


ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
