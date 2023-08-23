import request from './request';

export function login({ accountId, password }) {
  return request({
    endpoint: 'api/auth/authenticate',
    method: 'post',
    data: {
      accountId,
      password,
    },
  });
}

export default undefined;
