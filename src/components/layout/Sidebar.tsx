import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Search, 
  History, 
  List, 
  Settings, 
  HelpCircle, 
  LogOut,
  Building,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  
  return (
    <div className="h-screen w-64 bg-primary-950 text-white flex flex-col">
      <div className="p-5 flex items-center gap-2 border-b border-primary-800">
        <Building size={28} className="text-secondary-400" />
        <h1 className="text-xl font-bold">SuperSkip</h1>
      </div>
      
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center px-4 py-3 gap-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary-800 text-white' 
                    : 'text-primary-100 hover:bg-primary-900 hover:text-white'
                }`
              }
              end
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/search" 
              className={({ isActive }) => 
                `flex items-center px-4 py-3 gap-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary-800 text-white' 
                    : 'text-primary-100 hover:bg-primary-900 hover:text-white'
                }`
              }
            >
              <Search size={18} />
              <span>New Search</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/history" 
              className={({ isActive }) => 
                `flex items-center px-4 py-3 gap-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary-800 text-white' 
                    : 'text-primary-100 hover:bg-primary-900 hover:text-white'
                }`
              }
            >
              <History size={18} />
              <span>Search History</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/lists" 
              className={({ isActive }) => 
                `flex items-center px-4 py-3 gap-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary-800 text-white' 
                    : 'text-primary-100 hover:bg-primary-900 hover:text-white'
                }`
              }
            >
              <List size={18} />
              <span>Saved Lists</span>
            </NavLink>
          </li>
        </ul>
        
        <div className="pt-8 mt-8 border-t border-primary-800">
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="/settings" 
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 gap-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary-800 text-white' 
                      : 'text-primary-100 hover:bg-primary-900 hover:text-white'
                  }`
                }
              >
                <Settings size={18} />
                <span>Account Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/support" 
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 gap-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary-800 text-white' 
                      : 'text-primary-100 hover:bg-primary-900 hover:text-white'
                  }`
                }
              >
                <HelpCircle size={18} />
                <span>Help/Support</span>
              </NavLink>
            </li>
            <li>
              <button 
                onClick={logout}
                className="w-full flex items-center px-4 py-3 gap-3 rounded-lg transition-colors text-primary-100 hover:bg-primary-900 hover:text-white"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;