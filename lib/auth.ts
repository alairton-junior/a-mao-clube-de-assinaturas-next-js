import api from './api';

export async function login(username: string, password: string) {
  const response = await api.post('/auth/login/', { username, password });
  const { access, refresh, user } = response.data;
  localStorage.setItem('access', access);
  localStorage.setItem('refresh', refresh);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  return user;
}

export async function logout() {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  localStorage.removeItem('user');
}