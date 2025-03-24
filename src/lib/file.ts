// Define the structure of a single search result
interface SearchResult {
    title: string | null;
    description: string | null;
    url: string | null;
    emails: string[];
    phones: string[];
  }
  
  // Define the structure of each JSON object in the input array
  interface JsonObject {
    knowledge_panel: string | null;
    search_results: SearchResult[];
    emails_found: string[];
    phones_found: string[];
  }
  
  // Define the structure of the merged output
  interface MergedJsonObject {
    knowledge_panel: string | null;
    search_results: SearchResult[];
    emails_found: string[];
    phones_found: string[];
  }
  
  /**
   * Merges an array of JSON objects into a single object, deduplicating emails and phones.
   * @param jsonArray Array of JSON objects to merge
   * @returns A single merged JSON object
   */
  export function mergeJsonObjects(jsonArray: JsonObject[]): MergedJsonObject {
    // Handle empty or invalid input
    if (!jsonArray || jsonArray.length === 0) {
      return {
        knowledge_panel: null,
        search_results: [],
        emails_found: [],
        phones_found: [],
      };
    }
  
    // Initialize the merged result
    const merged: MergedJsonObject = {
      knowledge_panel: jsonArray[0].knowledge_panel, // Take first object's knowledge_panel
      search_results: [],
      emails_found: [],
      phones_found: [],
    };
  
    // Use Sets for deduplication
    const emailSet = new Set<string>();
    const phoneSet = new Set<string>();
  
    // Iterate through each object in the array
    jsonArray.forEach((obj) => {
      // Combine search_results
      merged.search_results = merged.search_results.concat(obj.search_results);
  
      // Add emails to the Set (case-sensitive deduplication)
      obj.emails_found.forEach((email) => emailSet.add(email));
  
      // Add phones to the Set (basic deduplication, no normalization)
      obj.phones_found.forEach((phone) => phoneSet.add(phone));
    });
  
    // Convert Sets back to sorted arrays for the final output
    merged.emails_found = Array.from(emailSet).sort();
    merged.phones_found = Array.from(phoneSet).sort();
  
    return merged;
  }