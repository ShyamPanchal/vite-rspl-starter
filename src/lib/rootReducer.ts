import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import * as storages from "redux-persist/lib/storage";

/* Import your reducers here. */
import sampleReducer from "./ducks/sample/reducer";

const storage = storages.default;
// const storage = require("redux-persist/lib/storage").default;

const globalConfig = {
  storage: storage,
};

const config = {
  ...globalConfig,
  key: "root",
  blacklist: [],
};

const userProfilePersistConfig = {
  ...globalConfig,
  key: "userProfile",
};

const appReducer = combineReducers({
  //   userProfile: persistReducer(userProfilePersistConfig, userProfileRootReducer),
  sample: sampleReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default persistReducer(config, rootReducer);
