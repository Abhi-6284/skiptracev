import { format, subDays } from 'date-fns';
import { SearchResult, SavedList, ActivityItem, DashboardStats } from '../types';

// Generate mock search results
export const mockSearchResults: SearchResult[] = Array.from({ length: 25 }, (_, i) => ({
  id: `result-${i + 1}`,
  name: `John Doe ${i + 1}`,
  address: `${1000 + i} Main Street, Springfield, IL ${60000 + i}`,
  phoneNumbers: [`(555) ${100 + i}-${1000 + i}`],
  email: `john.doe${i + 1}@example.com`,
  propertyInfo: {
    value: 250000 + i * 10000,
    sqFt: 1800 + i * 100,
    yearBuilt: 1990 + Math.floor(i / 5),
    bedrooms: 3 + (i % 3),
    bathrooms: 2 + (i % 2),
    propertyType: i % 3 === 0 ? 'Single Family' : i % 3 === 1 ? 'Townhouse' : 'Condo',
  },
  ownershipInfo: {
    purchaseDate: format(subDays(new Date(), 100 + i * 30), 'yyyy-MM-dd'),
    purchasePrice: 230000 + i * 8000,
    ownershipType: i % 2 === 0 ? 'Individual' : 'Joint',
  },
  score: 85 + (i % 15),
  dateFound: format(subDays(new Date(), i), 'yyyy-MM-dd'),
}));

// Generate mock saved lists
export const mockSavedLists: SavedList[] = [
  {
    id: 'list-1',
    name: 'High Value Properties',
    description: 'Properties valued over $300k',
    createdAt: format(subDays(new Date(), 30), 'yyyy-MM-dd'),
    updatedAt: format(subDays(new Date(), 5), 'yyyy-MM-dd'),
    resultCount: 12,
    tags: ['high-value', 'follow-up'],
  },
  {
    id: 'list-2',
    name: 'Potential Sellers',
    description: 'Owners who have held property for 10+ years',
    createdAt: format(subDays(new Date(), 15), 'yyyy-MM-dd'),
    updatedAt: format(subDays(new Date(), 2), 'yyyy-MM-dd'),
    resultCount: 8,
    tags: ['sellers', 'priority'],
  },
  {
    id: 'list-3',
    name: 'Springfield Area',
    description: 'Properties in Springfield metro area',
    createdAt: format(subDays(new Date(), 10), 'yyyy-MM-dd'),
    updatedAt: format(subDays(new Date(), 10), 'yyyy-MM-dd'),
    resultCount: 15,
    tags: ['location-based', 'springfield'],
  },
];

// Generate mock activity items
export const mockActivityItems: ActivityItem[] = [
  {
    id: 'activity-1',
    type: 'search',
    description: 'Searched for "Springfield properties"',
    timestamp: format(subDays(new Date(), 1), 'yyyy-MM-dd HH:mm'),
  },
  {
    id: 'activity-2',
    type: 'export',
    description: 'Exported "High Value Properties" list',
    timestamp: format(subDays(new Date(), 2), 'yyyy-MM-dd HH:mm'),
  },
  {
    id: 'activity-3',
    type: 'list_create',
    description: 'Created "Potential Sellers" list',
    timestamp: format(subDays(new Date(), 3), 'yyyy-MM-dd HH:mm'),
  },
  {
    id: 'activity-4',
    type: 'search',
    description: 'Searched for "John Smith"',
    timestamp: format(subDays(new Date(), 4), 'yyyy-MM-dd HH:mm'),
  },
  {
    id: 'activity-5',
    type: 'list_update',
    description: 'Added 3 properties to "Springfield Area" list',
    timestamp: format(subDays(new Date(), 5), 'yyyy-MM-dd HH:mm'),
  },
];

// Mock dashboard stats
export const mockDashboardStats: DashboardStats = {
  totalSearches: 42,
  savedLists: 3,
  recentActivity: mockActivityItems,
};