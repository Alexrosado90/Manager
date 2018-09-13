import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducers from './EmployeeFormReducers';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducers,
    employees: EmployeeReducer
});