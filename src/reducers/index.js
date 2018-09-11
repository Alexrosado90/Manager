import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducers from './EmployeeFormReducers'

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducers
});