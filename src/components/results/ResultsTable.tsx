import React, { useState } from 'react';
import { 
  ArrowUpDown, 
  Download, 
  Save, 
  Trash2, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { SearchResult } from '../../types';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

interface ResultsTableProps {
  results: SearchResult[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results }) => {
  const [selectedResults, setSelectedResults] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<keyof SearchResult>('score');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  const resultsPerPage = 10;
  const pageCount = Math.ceil(results.length / resultsPerPage);
  
  const sortedResults = [...results].sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
  
  const paginatedResults = sortedResults.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );
  
  const handleSort = (field: keyof SearchResult) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedResults(paginatedResults.map(result => result.id));
    } else {
      setSelectedResults([]);
    }
  };
  
  const handleSelect = (id: string) => {
    if (selectedResults.includes(id)) {
      setSelectedResults(selectedResults.filter(resultId => resultId !== id));
    } else {
      setSelectedResults([...selectedResults, id]);
    }
  };
  
  const isAllSelected = paginatedResults.length > 0 && selectedResults.length === paginatedResults.length;
  
  return (
    <Card>
      <CardHeader className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
          <h2 className="text-xl font-bold text-gray-800">Search Results</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Filter size={14} className="mr-1.5" />
              Filter
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              disabled={selectedResults.length === 0}
              className={selectedResults.length > 0 ? "text-secondary-700 border-secondary-300 bg-secondary-50 hover:bg-secondary-100" : ""}
            >
              <Save size={14} className="mr-1.5" />
              Save
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              disabled={selectedResults.length === 0}
              className={selectedResults.length > 0 ? "text-primary-700 border-primary-300 bg-primary-50 hover:bg-primary-100" : ""}
            >
              <Download size={14} className="mr-1.5" />
              Export
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              disabled={selectedResults.length === 0}
              className={selectedResults.length > 0 ? "text-red-700 border-red-300 bg-red-50 hover:bg-red-100" : ""}
            >
              <Trash2 size={14} className="mr-1.5" />
              Delete
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="pl-6 py-3 w-12">
                  <div className="flex items-center h-5">
                    <Checkbox
                      id="selectAll"
                      checked={isAllSelected}
                      onCheckedChange={handleSelectAll}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center">
                    Name
                    <ArrowUpDown 
                      size={14} 
                      className={`ml-1 ${sortField === 'name' ? 'text-primary-600' : 'text-gray-400'}`} 
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('address')}
                >
                  <div className="flex items-center">
                    Address
                    <ArrowUpDown 
                      size={14} 
                      className={`ml-1 ${sortField === 'address' ? 'text-primary-600' : 'text-gray-400'}`} 
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Contact Info
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('score')}
                >
                  <div className="flex items-center">
                    Match Score
                    <ArrowUpDown 
                      size={14} 
                      className={`ml-1 ${sortField === 'score' ? 'text-primary-600' : 'text-gray-400'}`} 
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('dateFound')}
                >
                  <div className="flex items-center">
                    Date Found
                    <ArrowUpDown 
                      size={14} 
                      className={`ml-1 ${sortField === 'dateFound' ? 'text-primary-600' : 'text-gray-400'}`} 
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedResults.map((result) => (
                <tr key={result.id} className="hover:bg-gray-50">
                  <td className="pl-6 py-4 whitespace-nowrap">
                    <div className="flex items-center h-5">
                      <Checkbox
                        checked={selectedResults.includes(result.id)}
                        onCheckedChange={() => handleSelect(result.id)}
                      />
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{result.name}</div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="flex items-start">
                      <MapPin size={14} className="text-gray-400 mt-1 mr-1 flex-shrink-0" />
                      <div className="text-sm text-gray-500">{result.address}</div>
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <div className="flex flex-col text-sm text-gray-500">
                      <div className="flex items-center mb-1">
                        <Phone size={14} className="text-gray-400 mr-1 flex-shrink-0" />
                        {result.phoneNumbers[0]}
                      </div>
                      {result.email && (
                        <div className="flex items-center">
                          <Mail size={14} className="text-gray-400 mr-1 flex-shrink-0" />
                          {result.email}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      result.score >= 90
                        ? 'bg-green-100 text-green-800'
                        : result.score >= 70
                          ? 'bg-primary-100 text-primary-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {result.score}%
                      {result.score >= 90 && <Check size={12} className="ml-1" />}
                    </span>
                  </td>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                    {result.dateFound}
                  </td>
                </tr>
              ))}
              
              {paginatedResults.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-500">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex-1 flex justify-between sm:hidden">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            size="sm"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(Math.min(pageCount, currentPage + 1))}
            disabled={currentPage === pageCount}
            size="sm"
          >
            Next
          </Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{(currentPage - 1) * resultsPerPage + 1}</span> to{' '}
              <span className="font-medium">
                {Math.min(currentPage * resultsPerPage, results.length)}
              </span>{' '}
              of <span className="font-medium">{results.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <Button
                variant="outline"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border text-sm font-medium"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                size="sm"
              >
                <ChevronLeft size={18} />
              </Button>
              
              {Array.from({ length: Math.min(5, pageCount) }).map((_, idx) => {
                let pageNum = 1;
                
                if (pageCount <= 5) {
                  pageNum = idx + 1;
                } else if (currentPage <= 3) {
                  pageNum = idx + 1;
                } else if (currentPage >= pageCount - 2) {
                  pageNum = pageCount - 4 + idx;
                } else {
                  pageNum = currentPage - 2 + idx;
                }
                
                return (
                  <Button
                    key={idx}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                      currentPage === pageNum
                        ? 'bg-primary-50 border-primary-500 text-primary-600'
                        : ''
                    }`}
                    onClick={() => setCurrentPage(pageNum)}
                    size="sm"
                  >
                    {pageNum}
                  </Button>
                );
              })}
              
              <Button
                variant="outline"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border text-sm font-medium"
                onClick={() => setCurrentPage(Math.min(pageCount, currentPage + 1))}
                disabled={currentPage === pageCount}
                size="sm"
              >
                <ChevronRight size={18} />
              </Button>
            </nav>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResultsTable;