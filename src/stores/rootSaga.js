import {all} from 'redux-saga/effects';
import zombies from './modules/zombies/sagas';

export default function* rootSaga() {
  return yield all([zombies]);
}
