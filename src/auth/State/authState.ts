interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export default AuthState;
