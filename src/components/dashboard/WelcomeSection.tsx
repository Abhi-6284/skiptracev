import React from 'react';
import { Search, List, Calendar } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WelcomeSection: React.FC = () => {
  const { user } = useAuth();
  
  const getCurrentTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };
  
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {getCurrentTimeGreeting()}, {user?.name.split(' ')[0]}!
        </h2>
        <p className="text-gray-500 mt-2">Welcome to your SuperSkip dashboard</p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="flex items-center justify-start gap-3 bg-primary-50 hover:bg-primary-100 text-primary-700 p-4 h-auto">
            <div className="bg-primary-100 p-2 rounded-full">
              <Search size={20} className="text-primary-600" />
            </div>
            <div className="text-left">
              <h3 className="font-medium">New Search</h3>
              <p className="text-sm text-primary-600">Start finding property owners</p>
            </div>
          </Button>
          
          <Button variant="outline" className="flex items-center justify-start gap-3 bg-secondary-50 hover:bg-secondary-100 text-secondary-700 p-4 h-auto">
            <div className="bg-secondary-100 p-2 rounded-full">
              <List size={20} className="text-secondary-600" />
            </div>
            <div className="text-left">
              <h3 className="font-medium">My Lists</h3>
              <p className="text-sm text-secondary-600">View your saved lists</p>
            </div>
          </Button>
          
          <Button variant="outline" className="flex items-center justify-start gap-3 bg-accent-50 hover:bg-accent-100 text-accent-700 p-4 h-auto">
            <div className="bg-accent-100 p-2 rounded-full">
              <Calendar size={20} className="text-accent-600" />
            </div>
            <div className="text-left">
              <h3 className="font-medium">Recent Activity</h3>
              <p className="text-sm text-accent-600">Review your recent searches</p>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeSection;