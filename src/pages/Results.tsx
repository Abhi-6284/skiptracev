import React from 'react';
import ResultsTable from '../components/results/ResultsTable';
import { mockSearchResults } from '../data/mockData';

const Results: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Search Results</h1>
      <ResultsTable results={mockSearchResults} />
    </div>
  );
};

export default Results;