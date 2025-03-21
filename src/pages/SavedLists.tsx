import React from 'react';
import SavedListsTable from '../components/lists/SavedListsTable';
import { mockSavedLists } from '../data/mockData';

const SavedLists: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Saved Lists</h1>
      <SavedListsTable lists={mockSavedLists} />
    </div>
  );
};

export default SavedLists;