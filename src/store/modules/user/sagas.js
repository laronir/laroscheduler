import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const res = yield call(api.put, 'users', profile);
    Alert.alert('Sucesso!', 'O perfil foi atualizado com sucesso.');

    yield put(updateProfileSuccess(res.data));
  } catch (err) {
    Alert.alert('Erro na atualização', 'Houve um erro ao atualizar perfil');

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
