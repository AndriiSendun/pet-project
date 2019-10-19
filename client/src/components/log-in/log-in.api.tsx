import axios from 'axios';

import { AuthorizationData, User } from './log-in.models';

import { PROXY_SERVER } from '../../common/constants';
import { USERS_API } from './constants';

const logInAPI = async (data: AuthorizationData): Promise<User> => {
  const url: string = `${PROXY_SERVER}/${USERS_API}/log-in`;
  const response: any = await axios.post(url, data);

  return response && response.data;
};

export {
  logInAPI,
};
