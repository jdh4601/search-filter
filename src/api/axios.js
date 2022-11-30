import axios from 'axios';
// axios 인스턴스 만들기 - custom
export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
// 단순 데이터(페이지 요청, 지정된 요청) 요청을 수행
export const getPosts = async () => {
  const res = await api.get('/posts');
  return res.data; // json data
};
