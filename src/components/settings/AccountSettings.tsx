import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { User } from 'lucide-react';

const AccountSettings: React.FC = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    company: 'Real Estate Investments LLC',
    phone: '(555) 123-4567',
  });
  
  const [notifications, setNotifications] = useState({
    email: true,
    app: true,
    searchCompleted: true,
    newFeatures: false,
  });
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update the user profile
    console.log('Profile updated:', profileData);
  };
  
  const handleNotificationsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update notification settings
    console.log('Notifications updated:', notifications);
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Profile Information</h2>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mr-4">
              <User size={32} className="text-gray-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{user?.name}</h3>
              <p className="text-gray-500">Update your profile details</p>
            </div>
          </div>
          
          <form onSubmit={handleProfileSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleProfileChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={profileData.company}
                  onChange={handleProfileChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleProfileChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Notification Settings</h2>
        </div>
        
        <div className="p-6">
          <form onSubmit={handleNotificationsSubmit}>
            <fieldset>
              <legend className="text-sm font-medium text-gray-700 mb-4">
                Notification Methods
              </legend>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="email"
                      name="email"
                      type="checkbox"
                      checked={notifications.email}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="email" className="font-medium text-gray-700">
                      Email
                    </label>
                    <p className="text-gray-500">Get notified via email</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="app"
                      name="app"
                      type="checkbox"
                      checked={notifications.app}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="app" className="font-medium text-gray-700">
                      In-App Notifications
                    </label>
                    <p className="text-gray-500">Receive notifications within the application</p>
                  </div>
                </div>
              </div>
            </fieldset>
            
            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-gray-700 mb-4">
                Notification Types
              </legend>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="searchCompleted"
                      name="searchCompleted"
                      type="checkbox"
                      checked={notifications.searchCompleted}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="searchCompleted" className="font-medium text-gray-700">
                      Search Completed
                    </label>
                    <p className="text-gray-500">Get notified when your searches are completed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newFeatures"
                      name="newFeatures"
                      type="checkbox"
                      checked={notifications.newFeatures}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newFeatures" className="font-medium text-gray-700">
                      New Features & Updates
                    </label>
                    <p className="text-gray-500">Stay informed about new features and platform updates</p>
                  </div>
                </div>
              </div>
            </fieldset>
            
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Save Notification Settings
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Security</h2>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Update Password</h3>
            <p className="text-gray-500 text-sm mb-4">
              Ensure your account is using a strong password
            </p>
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Change Password
            </button>
          </div>
          
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Account Deletion</h3>
            <p className="text-gray-500 text-sm mb-4">
              Permanently delete your account and all of your data
            </p>
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;