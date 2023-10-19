import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import './styles/main.scss';
import store from './redux/store'
import { Provider } from 'react-redux'

const root = document.getElementById('root');
root && ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);