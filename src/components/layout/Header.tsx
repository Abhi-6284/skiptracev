import React from 'react';
import { Bell, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">SuperSkip</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent-500 rounded-full"></span>
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
            <Avatar className="bg-secondary-100">
              <AvatarFallback className="text-secondary-700">
                <User size={20} />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;