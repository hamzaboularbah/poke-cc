import { combineReducers } from "redux";

export const testReducer = () => {
  return {
    ok: "ok",
  };
};
const rootReducer = combineReducers({
  testReducer,
});

export default rootReducer;
