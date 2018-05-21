import { createStore, applyMiddleware } from "redux";
import storeSynchronize from "redux-localstore";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";

const logger = createLogger({});
const store = createStore(rootReducer, applyMiddleware(logger));

storeSynchronize(store);

export default store;
