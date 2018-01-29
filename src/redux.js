import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import uuid from 'uuid-random';

import createHistory from 'history/createBrowserHistory'
import { records as initRecords } from './data/records';

// actions
export function addRecord(firstName, lastName, points, date) {
	return {
		type: "ADD_RECORD",
		firstName,
		lastName,
		points, 
		date
	}
} 

export function removeRecord(id) {
	return {
		type: "REMOVE_RECORD",
		id
	}
}

export function editRecord(id, field, value) {
	return {
		type: "EDIT_RECORD",
		id,
		field,
		value
	}
}
// eslint-disable-next-line
Array.prototype.remove = function(index){
  this.splice(index,1);
}
// reducers
function records(store = { records: initRecords }, action) {
	switch(action.type) {
		case "ADD_RECORD":
			let id = uuid();
			store.records.push({
				id,
				firstName: action.firstName,
				lastName: action.lastName,
				date: action.date,
				points: action.points
			})
			return store;
		case "EDIT_RECORD":
			let i = store.records.findIndex((el) => {
				return el.id === action.id;
			});
			store.records[i][action.field] = action.value;
			return store;
		case "REMOVE_RECORD":
			store.records.remove(i);
			return store;
		default:
			return store;
	}
}
const reducers = [
	records
]

// store
export const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(middleware)
)
export default store;