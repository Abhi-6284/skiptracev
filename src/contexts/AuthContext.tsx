import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'REGISTER_START' }
  | { type: 'REGISTER_SUCCESS'; payload: User }
  | { type: 'REGISTER_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'RESET_ERROR' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
    case 'REGISTER_START':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case 'RESET_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType>({
  ...initialState,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  resetPassword: async () => {},
});

export const useAuth = () => useContext(AuthContext);

// Mock user for development purposes
const MOCK_USER: User = {
  id: '1',
  name: 'John Investor',
  email: 'john@example.com',
  role: 'user',
  createdAt: new Date().toISOString(),
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Simulate checking for existing session
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem('user');
      
      if (savedUser) {
        try {
          const user = JSON.parse(savedUser);
          dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        } catch (error) {
          localStorage.removeItem('user');
          dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid session' });
        }
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: '' });
      }
    };

    checkAuth();
  }, []);

  // Auth methods
  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // In a real app, we would make an API call here
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'demo@superskip.com' && password === 'password') {
        localStorage.setItem('user', JSON.stringify(MOCK_USER));
        dispatch({ type: 'LOGIN_SUCCESS', payload: MOCK_USER });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      dispatch({ 
        type: 'LOGIN_FAILURE', 
        payload: error instanceof Error ? error.message : 'An unknown error occurred' 
      });
    }
  };

  const register = async (name: string, email: string, password: string) => {
    dispatch({ type: 'REGISTER_START' });
    
    try {
      // In a real app, we would make an API call here
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        ...MOCK_USER,
        name,
        email,
      };
      
      localStorage.setItem('user', JSON.stringify(newUser));
      dispatch({ type: 'REGISTER_SUCCESS', payload: newUser });
    } catch (error) {
      dispatch({ 
        type: 'REGISTER_FAILURE', 
        payload: error instanceof Error ? error.message : 'An unknown error occurred' 
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  const resetPassword = async (email: string) => {
    // In a real app, we would make an API call here
    await new Promise(resolve => setTimeout(resolve, 1000));
    // This would send a password reset email
    return Promise.resolve();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};