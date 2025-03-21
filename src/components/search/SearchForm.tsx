import React, { useState } from 'react';
import { Search, Upload, Copy } from 'lucide-react';
import axios from 'axios'; // Import axios for making HTTP requests
import ResultsTable from './ResultsTable';

const searchTypes = [
  { id: 'name', label: 'Name' },
  { id: 'address', label: 'Address' },
  { id: 'phone', label: 'Phone' },
  { id: 'email', label: 'Email' },
  { id: 'property', label: 'Property' },
];

const SearchForm: React.FC = () => {
  const [searchType, setSearchType] = useState('name');
  const [query, setQuery] = useState('');
  const [searchMethod, setSearchMethod] = useState<'single' | 'batch' | 'paste'>('single');
  const [batchFile, setBatchFile] = useState<File | null>(null);
  const [batchText, setBatchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSearchPerformed(true);

    const payload = {
      querysearch: query,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/scrape', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
      setResults(response.data);
      alert('Search submitted successfully!');
    } catch (error) {
      console.error('Error submitting search:', error);
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setBatchFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          <button
            className={`pb-4 text-sm font-medium ${searchMethod === 'single'
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            onClick={() => setSearchMethod('single')}
          >
            Single Search
          </button>
          <button
            className={`pb-4 text-sm font-medium ${searchMethod === 'batch'
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            onClick={() => setSearchMethod('batch')}
          >
            Batch Upload
          </button>
          <button
            className={`pb-4 text-sm font-medium ${searchMethod === 'paste'
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            onClick={() => setSearchMethod('paste')}
          >
            Copy/Paste
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {searchMethod === 'single' && (
          <div className="mb-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Type
              </label>
              <div className="flex flex-wrap gap-3">
                {searchTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    className={`px-4 py-2 text-sm rounded-full ${searchType === type.id
                        ? 'bg-primary-100 text-primary-700 border border-primary-300'
                        : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                      }`}
                    onClick={() => setSearchType(type.id)}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-2">
                Search Query
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder={`Enter ${searchType} to search...`}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={() => setQuery('')}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {searchMethod === 'batch' && (
          <div className="mb-6">
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-primary-600 hover:text-primary-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".csv,.xlsx,.xls"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">CSV, Excel files up to 10MB</p>
                {batchFile && (
                  <p className="text-sm text-primary-600 mt-2">
                    Selected file: {batchFile.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {searchMethod === 'paste' && (
          <div className="mb-6">
            <label htmlFor="batchText" className="block text-sm font-medium text-gray-700 mb-2">
              Paste your list
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Copy size={16} className="text-gray-400" />
              </div>
              <textarea
                id="batchText"
                rows={6}
                value={batchText}
                onChange={(e) => setBatchText(e.target.value)}
                className="block w-full pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="Paste addresses, names, or other search data here. One item per line."
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Each line will be processed as a separate search query
            </p>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="save-search"
              name="save-search"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="save-search" className="ml-2 block text-sm text-gray-700">
              Save this search as a template
            </label>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Clear
            </button>
            <button
              type="submit"
              className="flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              <Search size={16} className="mr-2" />
              Search
            </button>
          </div>
        </div>
      </form>

      {loading ? (
        <div className="mt-4 p-4 text-center text-gray-500">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-primary-500 rounded-full border-t-transparent"></div>
          <p className="mt-2">Searching...</p>
        </div>
      ) : (
        searchPerformed && <ResultsTable data={results} />
      )}
    </div>
  );
};

export default SearchForm;