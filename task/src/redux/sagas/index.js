import { all } from "redux-saga/effects";
import AuthSaga from "./auth_saga";



export default function* RootSaga() {
  yield all([AuthSaga()]);
  
}
