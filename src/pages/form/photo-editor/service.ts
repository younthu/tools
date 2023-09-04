import { request } from 'umi';

export async function fakeSubmitForm(params: any) {
  return request('/api/basicForm', {
    method: 'POST',
    data: params,
  });
}

export async function genIdPhoto(params: any) {
  return request('http://127.0.0.1:5000/api/id_photo', {
    method: 'POST',
    data: params,
  });
}
