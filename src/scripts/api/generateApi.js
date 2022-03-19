import api from './api';

export const generate = (data) => api
  .post('/Generate', data)
  .then((res) => res.data)
  .catch((e) => (typeof e.response !== 'undefined'
    ? e.response.data
    : { success: false, message: 'Network error.' }));
