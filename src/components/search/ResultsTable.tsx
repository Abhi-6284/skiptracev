import React from 'react'

interface SearchResult {
  title: string;
  description: string;
  url: string;
  emails?: string[];
  phones?: string[];
}

interface ResultsData {
  search_results?: SearchResult[];
  emails_found?: string[];
  phones_found?: string[];
}

const ResultsTable: React.FC<{ data: ResultsData }> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Search Results</h2>
      
      {/* Search Results Table */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Web Results</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">URL</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Emails</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.search_results?.map((result: SearchResult, index: number) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">{result.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-md">{result.description}</td>
                  <td className="px-6 py-4 text-sm text-primary-600 hover:underline">
                    <a href={result.url} target="_blank" rel="noopener noreferrer">
                      {result.url}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {result.emails?.join(', ') || '-'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {result.phones?.join(', ') || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Emails Found Section */}
      {data.emails_found && data.emails_found.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Emails Found</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {data.emails_found.map((email: string, index: number) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-900">{email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Phones Found Section */}
      {data.phones_found && data.phones_found?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-3">Phone Numbers Found</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                {data.phones_found.map((phone: string, index: number) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-900">{phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};


export default ResultsTable