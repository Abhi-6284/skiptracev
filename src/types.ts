// Authentication types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Search types
export interface SearchParams {
  query: string;
  type: 'name' | 'address' | 'phone' | 'email' | 'property';
  filters?: Record<string, any>;
}

export interface SearchResult {
  id: string;
  name: string;
  address: string;
  phoneNumbers: string[];
  email?: string;
  propertyInfo?: {
    value?: number;
    sqFt?: number;
    yearBuilt?: number;
    bedrooms?: number;
    bathrooms?: number;
    propertyType?: string;
  };
  ownershipInfo?: {
    purchaseDate?: string;
    purchasePrice?: number;
    ownershipType?: string;
  };
  score: number;
  dateFound: string;
}

export interface SavedList {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  resultCount: number;
  tags: string[];
}

export interface ActivityItem {
  id: string;
  type: 'search' | 'export' | 'list_create' | 'list_update';
  description: string;
  timestamp: string;
}

export interface DashboardStats {
  totalSearches: number;
  savedLists: number;
  recentActivity: ActivityItem[];
}