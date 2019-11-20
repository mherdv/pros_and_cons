import { combineReducers } from 'redux';

import cons from './reducers/consReducer';
import pros from './reducers/prosReducer';

export default combineReducers({
    cons,
    pros
})