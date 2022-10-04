import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IApiUser } from '../../models/IUser';
import {
  IApiLoginSuccessResponse,
  IApiRegisterSuccessResponse,
} from '../../services/api/apiResponse.types';
import { ILoginUserActionPayload, IRegisterUserActionPayload } from '../types';

interface IUserState {
  user: IApiUser | null;
  token: string;
}

export const INITIAL_STATE: IUserState = {
  user: null,
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loginUser(_state, _action: ILoginUserActionPayload) {},
    loginUserSuccess(
      state,
      { payload: { user, token } }: PayloadAction<IApiLoginSuccessResponse>,
    ) {
      state.user = user;
      state.token = token;
    },
    loginUserError(_state, _action: PayloadAction<string>) {},

    registerUser(_state, _action: IRegisterUserActionPayload) {},
    registerUserSuccess(
      state,
      { payload: { user, token } }: PayloadAction<IApiRegisterSuccessResponse>,
    ) {
      state.user = user;
      state.token = token;
    },
    registerUserError(_state, _action: PayloadAction<string>) {},
  },
});
