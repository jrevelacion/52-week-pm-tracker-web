import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Calendar,
  CheckCircle,
  Clock,
  BarChart3,
  Info,
  LogOut,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function Navigation() {
  const location = useLocation();
  const { logout, user } = useApp();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/schedule', label: 'Schedule', icon: Calendar },
    { path: '/completed', label: 'Completed', icon: CheckCircle },
    { path: '/pending', label: 'Pending', icon: Clock },
    { path: '/reports', label: 'Reports', icon: BarChart3 },
    { path: '/info', label: 'Info', icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PM</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              52-Week PM Tracker
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  isActive(path)
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-surface'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>

          {/* User Info & Logout */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted hidden sm:inline">
              {user?.name}
            </span>
            <button
              onClick={logout}
              className="p-2 text-foreground hover:bg-surface rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex overflow-x-auto pb-2 gap-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`px-3 py-2 rounded-lg flex items-center gap-1 whitespace-nowrap transition-colors text-sm ${
                isActive(path)
                  ? 'bg-primary text-white'
                  : 'text-foreground hover:bg-surface'
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
