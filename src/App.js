import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './state/store';
import './App.css';
import Router from './Router';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
