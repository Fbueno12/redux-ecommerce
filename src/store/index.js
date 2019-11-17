import { createStore } from 'redux';

import rootReducer from './modules/RootReducer';

const store = createStore(rootReducer);

export default store;
