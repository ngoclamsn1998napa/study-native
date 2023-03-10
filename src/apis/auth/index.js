import axiosInstance from '../../axiosInterceptor';

class AuthService {
  login = async body => {
    const res = await axiosInstance.post('users/login', body);
    return res?.data;
  };

  register = async body => {
    const res = await axiosInstance.post('users/register', body);
    return res?.data;
  };

  getMe = async () => {
    const res = await axiosInstance.get('users/me');
    return res?.data;
  };
}
export default new AuthService();
