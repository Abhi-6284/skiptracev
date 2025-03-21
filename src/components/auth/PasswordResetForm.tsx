import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, ArrowLeft } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const PasswordResetForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await resetPassword(email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Building size={48} className="text-primary-600" />
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Reset Password</h1>
            <p className="text-gray-500 mt-2">
              {isSubmitted 
                ? 'Check your email for reset instructions' 
                : 'Enter your email to receive reset instructions'}
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="text-center">
              <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
                We've sent a password reset link to <strong>{email}</strong>. Please check your email.
              </div>
              
              <Link to="/login" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                <ArrowLeft size={16} className="mr-2" />
                Back to login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 px-4 rounded-md shadow hover:bg-primary-700"
              >
                Send Reset Link
              </button>
              
              <div className="mt-6 text-center">
                <Link to="/login" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to login
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordResetForm;