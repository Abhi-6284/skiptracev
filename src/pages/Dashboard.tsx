import React from 'react';
import WelcomeSection from '../components/dashboard/WelcomeSection';
import StatsPanel from '../components/dashboard/StatsPanel';
import ActivityTimeline from '../components/dashboard/ActivityTimeline';
import { mockDashboardStats } from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div>
      <WelcomeSection />
      
      <div className="mt-8">
        <StatsPanel stats={mockDashboardStats} />
      </div>
      
      <div className="mt-8">
        <ActivityTimeline activities={mockDashboardStats.recentActivity} />
      </div>
    </div>
  );
};

export default Dashboard;