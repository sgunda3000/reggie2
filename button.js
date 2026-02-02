import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function CustomLogin() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Get user info from Google
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );
      console.log(userInfo.data);
    },
    onError: () => console.log('Login Failed')
  });

  return (
    <button onClick={() => login()}>
      Sign in with Google
    </button>
  );
}