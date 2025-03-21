import React from 'react';
import { Eye, MoreVertical, Edit, Download, Trash2, Tag } from 'lucide-react';
import { SavedList } from '../../types';

interface SavedListsTableProps {
  lists: SavedList[];
}

const SavedListsTable: React.FC<SavedListsTableProps> = ({ lists }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Saved Lists</h2>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
            Create New List
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                List Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Records
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tags
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {lists.map((list) => (
              <tr key={list.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{list.name}</div>
                      {list.description && (
                        <div className="text-sm text-gray-500">{list.description}</div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{list.resultCount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {list.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {list.createdAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {list.updatedAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-2">
                    <button className="text-primary-600 hover:text-primary-900">
                      <Eye size={18} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Edit size={18} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Download size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            
            {lists.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                  No saved lists found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SavedListsTable;