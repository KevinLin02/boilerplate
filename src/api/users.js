import request from './request';

export function users() {
  return request({
    baseURL: 'https://reqres.in/api/users?per_page=12',
    method: 'get',
  });
}

export default undefined;
