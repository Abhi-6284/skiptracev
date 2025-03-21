import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('demo@superskip.com');
  const [password, setPassword] = useState('password');
  const { login, error, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Building size={48} className="text-primary-600" />
        </div>
        
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">SuperSkip</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          
          {error && (
            <div className="px-6">
              <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
                {error}
              </div>
            </div>
          )}
          
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
                    Password
                  </label>
                  <Link to="/reset-password" className="text-sm text-primary-600 hover:text-primary-700">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex justify-center">
            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
                  Create account
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;