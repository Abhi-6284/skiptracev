import React from 'react';
import { Search, ListChecks, Clock } from 'lucide-react';
import { DashboardStats } from '../../types';

interface StatsPanelProps {
  stats: DashboardStats;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Total Searches</p>
            <h3 className="text-3xl font-bold text-gray-800">{stats.totalSearches}</h3>
          </div>
          <div className="bg-primary-100 p-3 rounded-full">
            <Search size={20} className="text-primary-600" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Including single and batch searches
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Saved Lists</p>
            <h3 className="text-3xl font-bold text-gray-800">{stats.savedLists}</h3>
          </div>
          <div className="bg-secondary-100 p-3 rounded-full">
            <ListChecks size={20} className="text-secondary-600" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Organized collections of contacts
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Recent Activity</p>
            <h3 className="text-3xl font-bold text-gray-800">{stats.recentActivity.length}</h3>
          </div>
          <div className="bg-accent-100 p-3 rounded-full">
            <Clock size={20} className="text-accent-600" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Actions from the past 7 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;