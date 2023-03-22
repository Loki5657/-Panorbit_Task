import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { AuthTypes } from "../action_types/auth_types";



function* getUserdata({ payload, callback }) {
  try {
    const url = 'https://panorbit.in/api/users.json';
    const res = yield axios.get(url);
    yield put({ type: AuthTypes.GET_USERDATASUCCESS, data: res.data });
    console.log('error')

    callback(false);
  } catch (e) {
    console.log(e.message)
    callback(true);
  }
}



export default function* AuthSaga() {
  yield takeEvery(AuthTypes.GET_USERDATA, getUserdata);

}
