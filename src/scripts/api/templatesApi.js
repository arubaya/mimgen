import api from './api';

export const getMemeTemplates = (data) => api
  .post('/Templates', data)
  .then((res) => res.data)
  .catch((e) => (typeof e.response !== 'undefined'
    ? e.response.data
    : { success: false, message: 'Network error.' }));
