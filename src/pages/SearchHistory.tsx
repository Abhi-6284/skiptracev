import React from 'react';
import { Calendar, Clock, Filter } from 'lucide-react';

const SearchHistory: React.FC = () => {
  // In a real app, this would fetch search history from an API
  const searchHistory = [
    {
      id: 'search-1',
      query: 'John Smith',
      type: 'name',
      date: '2023-04-15',
      time: '14:30',
      resultsCount: 12,
    },
    {
      id: 'search-2',
      query: '123 Main St, Springfield',
      type: 'address',
      date: '2023-04-14',
      time: '10:15',
      resultsCount: 3,
    },
    {
      id: 'search-3',
      query: 'Springfield Properties',
      type: 'batch',
      date: '2023-04-12',
      time: '16:45',
      resultsCount: 45,
    },
    {
      id: 'search-4',
      query: 'jane.doe@example.com',
      type: 'email',
      date: '2023-04-10',
      time: '09:20',
      resultsCount: 1,
    },
    {
      id: 'search-5',
      query: '(555) 123-4567',
      type: 'phone',
      date: '2023-04-08',
      time: '11:05',
      resultsCount: 2,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Search History</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
            <h2 className="text-lg font-medium text-gray-800">Recent Searches</h2>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar size={16} className="text-gray-400" />
                </div>
                <input
                  type="date"
                  className="pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Filter by date"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter size={16} className="text-gray-400" />
                </div>
                <select className="pl-10 pr-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                  <option value="">All Search Types</option>
                  <option value="name">Name</option>
                  <option value="address">Address</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="batch">Batch</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Search Query
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Results
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {searchHistory.map((search) => (
                <tr key={search.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{search.query}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      search.type === 'name' ? 'bg-blue-100 text-blue-800' :
                      search.type === 'address' ? 'bg-green-100 text-green-800' :
                      search.type === 'phone' ? 'bg-purple-100 text-purple-800' :
                      search.type === 'email' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {search.type.charAt(0).toUpperCase() + search.type.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1.5" />
                      {search.date}
                      <Clock size={14} className="ml-3 mr-1.5" />
                      {search.time}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{search.resultsCount} results</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">
                      View Results
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      Repeat Search
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {searchHistory.length} of {searchHistory.length} searches
            </div>
            
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHistory;