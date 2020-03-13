import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Layout from './Layout'
import Home from './Home'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Home />, document.getElementById('root'));


serviceWorker.unregister();

// tugas
// layout yg sudah ada dirapihkan lagi pakai cara bootstrap
// tugas buat list menu yg isinya fakultas beserta jurusan pada bagian sidebar
