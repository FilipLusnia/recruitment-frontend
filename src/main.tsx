import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import store from './redux/store'
import { Provider } from 'react-redux'
import './styles/main.scss';

const root = document.getElementById('root');
root && ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);