import { tesloApi } from '@/api/tesloApi';
import MockAdapter from 'axios-mock-adapter';

const mockTesloApi = new MockAdapter(tesloApi);

mockTesloApi.onGet('/test').reply(200, { data: 'test' });

describe('tesloApi axios instance', () => {
  test('should have baseURL set to VITE_TESLO_API_URL', () => {
    expect(tesloApi.defaults.baseURL).toEqual(import.meta.env.VITE_TESLO_API_URL);
  });

  test('should set Authorization header with token from localhost', async () => {
    const token = 'myAuthToken';
    localStorage.setItem('token', token);

    const resp = await tesloApi.get('/test');

    expect(resp.config.headers.Authorization).toBe(`Bearer ${token}`);
  });

  test('should not set Authorization header if token is not in LocalStorage', async () => {
    localStorage.clear();

    const resp = await tesloApi.get('/test');

    expect(resp.config.headers.Authorization).toBeUndefined();
  });
});
