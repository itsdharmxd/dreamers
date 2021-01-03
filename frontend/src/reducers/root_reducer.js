import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import dream from './dream_reducer';
import comment from './comment_reducer';
import user from './user_reducer';
import tag from './tag_reducers';
import search from './search_reducers';
import modalInfo from './modal_info_reducer';

const RootReducer = combineReducers({
    session, 
    errors,
    ui,
    dream, 
    comment,
    user,
    tag,
    search,
    modalInfo,
});

export default RootReducer;