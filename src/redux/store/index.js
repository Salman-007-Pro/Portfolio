import { createStore, applyMiddleware } from "redux";
import rootReducer from "redux/reducers";
import ReduxThunk from "redux-thunk";
export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
