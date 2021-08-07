import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import EditLogModal from './components/logs/EditLogModal';
import AddLogModal from './components/logs/AddLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';
import Alerts from './components/layouts/Alerts';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <SearchBar />
      <div className='container'>
        <Alerts />
        <AddBtn />
        <AddLogModal />

        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Provider>
  );
}

export default App;
