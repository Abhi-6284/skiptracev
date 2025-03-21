import React from 'react';
import SearchForm from '../components/search/SearchForm';

const Search: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">New Search</h1>
      <SearchForm />
    </div>
  );
};

export default Search;