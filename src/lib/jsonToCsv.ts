import Papa from 'papaparse';

// Define the structure of a single search result
interface SearchResult {
  title: string | null;
  description: string | null;
  url: string | null;
  emails: string[];
  phones: string[];
}

// Define the structure of the input JSON object
interface JsonObject {
  knowledge_panel: string | null;
  search_results: SearchResult[];
  emails_found: string[];
  phones_found: string[];
}

/**
 * Converts a JSON object to a CSV string using Papa Parse.
 * @param jsonObj The JSON object to convert
 * @returns A CSV-formatted string
 */
export function jsonToCsv(jsonObj: JsonObject): string {
  // Handle empty or invalid input
  if (!jsonObj || !jsonObj.search_results || jsonObj.search_results.length === 0) {
    return "No data to convert to CSV";
  }

  // Prepare flat data for CSV
  const csvData = jsonObj.search_results.map((result) => ({
    knowledge_panel: jsonObj.knowledge_panel,
    title: result.title,
    description: result.description,
    url: result.url,
    emails: result.emails.join("; "), // Join emails with semicolon
    phones: result.phones.join("; "), // Join phones with semicolon
  }));

  // Use Papa Parse to convert the array of objects to CSV
  const csv = Papa.unparse(csvData, {
    quotes: true, // Wrap all fields in quotes for consistency
    delimiter: ",", // Use comma as the delimiter
    header: true, // Include headers
  });

  return csv;
}