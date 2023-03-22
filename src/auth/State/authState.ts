import { Error } from '../../common/Error';
import User from '../Auth.d';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: Error | null;
}

export default AuthState;
