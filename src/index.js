import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from "material-ui";
import injectTapEventPlugin from 'react-tap-event-plugin';
//redux
import {configureStore} from "./redux/store/configureStore";
import {Provider} from 'react-redux';
import 'toastr/build/toastr.css';
import {getNotifications} from "./redux/actions/notificationActions";
injectTapEventPlugin();

const store = configureStore();
store.dispatch(getNotifications());



const WithRouter =()=>(
  <BrowserRouter>
      <Main/>
  </BrowserRouter>
);

const Main = ()=>(
    <MuiThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </MuiThemeProvider>
);


ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
