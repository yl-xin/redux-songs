import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; // a component from react-redux library
import {createStore} from 'redux'; // when import a named export, we need curly braces {}
import App from './components/App';
import reducers from './reducers';



ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App/>
	</Provider>,
	document.querySelector('#root')
	);