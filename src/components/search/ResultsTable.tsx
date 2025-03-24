import { jsonToCsv } from "@/lib/jsonToCsv";
import React from "react";

interface SearchResult {
  title: string;
  description: string;
  url: string;
  emails?: string[];
  phones?: string[];
}

interface JsonObject {
  knowledge_panel: string | null;
  search_results: SearchResult[];
  emails_found: string[];
  phones_found: string[];
}

const ResultsTable: React.FC<{ data: JsonObject }> = ({ data }) => {
  if (!data) return null;
  console.log(data);

  const handleConvtJSONtoCSV = (data: JsonObject) => {
    const sanitizedData = {
      ...data,
      search_results: data.search_results?.map((result) => ({
        ...result,
        emails: result.emails || [],
        phones: result.phones || [],
      })) || []
    };
    const csvOutput = jsonToCsv(sanitizedData);

    // Create a Blob from the CSV string
    const blob = new Blob([csvOutput], { type: "text/csv;charset=utf-8;" });

    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "data_export.csv"); // Set the file name
    document.body.appendChild(link); // Append to the DOM
    link.click(); // Trigger the download

    // Clean up: remove the link and revoke the URL
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <button
        onClick={() => handleConvtJSONtoCSV(data)}
        className="border px-4 py-2 hover:bg-black hover:text-white scale-100 hover:scale-95 my-5 rounded-md transition-all duration-300"
      >
        Download in CSV
      </button>
      <h2 className="text-xl font-semibold mb-4">Search Results</h2>

      {/* Search Results Table */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Web Results</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  URL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Emails
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Phones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.search_results?.map(
                (result: SearchResult, index: number) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                      {result.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-md">
                      {result.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-primary-600 hover:underline">
                      <a
                        href={result.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {result.url}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {result.emails?.join(", ") || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {result.phones?.join(", ") || "-"}
                    </td>
                  </tr>
                )
              )}
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

export default ResultsTable;
