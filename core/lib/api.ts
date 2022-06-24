import axios from 'axios';

type TypeUserGet = {
  //date가 존재하지 않는 경우 당일의 값을 받아온다.
  date?: string;
};
type TypeUserPost = {
  name: string;
  count: number;
  weight: number;
  set: number;
};
type TypeUserPut = {
  //기본적으로 수정은 당일만 가능하다.
  id: string;
  count: number;
  weight: number;
  set: number;
};
type TypeUserDelete = {
  id: string;
};
const api = {
  user: {
    get: async (data: TypeUserGet) =>
      await axios.get('/api/user', { params: { ...data } }),
    post: async (data: TypeUserPost) => await axios.post('/api/user', data),
    put: async (data: TypeUserPut) => await axios.put('/api/user', data),
    delete: async (data: TypeUserDelete) =>
      await axios.delete('/api/user', { params: { ...data } }),
  },
};
export default api;
