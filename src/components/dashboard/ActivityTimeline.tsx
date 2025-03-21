import React from 'react';
import { Search, FileDown, ListPlus, ListX, Clock } from 'lucide-react';
import { ActivityItem } from '../../types';

interface ActivityTimelineProps {
  activities: ActivityItem[];
}

const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activities }) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'search':
        return <Search size={16} className="text-primary-600" />;
      case 'export':
        return <FileDown size={16} className="text-green-600" />;
      case 'list_create':
        return <ListPlus size={16} className="text-secondary-600" />;
      case 'list_update':
        return <ListX size={16} className="text-accent-600" />;
      default:
        return <Clock size={16} className="text-gray-600" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
      
      <div className="flow-root">
        <ul className="-mb-8">
          {activities.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 ? (
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-white">
                      {getActivityIcon(activity.type)}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm text-gray-700">
                        {activity.description}
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {activities.length > 5 && (
        <div className="mt-4 text-center">
          <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View all activity
          </button>
        </div>
      )}
    </div>
  );
};

export default ActivityTimeline;