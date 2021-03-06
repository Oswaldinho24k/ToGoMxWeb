import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from "material-ui";
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {configureStore} from "./redux/store/configureStore";
import {Provider} from 'react-redux';
import 'toastr/build/toastr.css';
import {getNotifications} from "./redux/actions/notificationActions";
import '../node_modules/sweetalert2/dist/sweetalert2.min.css';
import '../node_modules/alertify.js/src/css/alertify.css';
import {getTiendas} from "./redux/actions/tiendasActions";
import {comprobarUsuario} from "./redux/actions/userActions";
import {getAllProducts, getProducts} from "./redux/actions/productsActions";
injectTapEventPlugin();

export const store = configureStore();
store.dispatch(comprobarUsuario());
store.dispatch(getTiendas());
store.dispatch(getProducts());


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
