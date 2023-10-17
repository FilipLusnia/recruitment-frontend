import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import './styles/main.scss';

const root = document.getElementById('root');
root && ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);