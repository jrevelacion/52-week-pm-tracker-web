import { useState, useEffect } from 'react';
import { CheckCircle, Download } from 'lucide-react';
import { ActivityList } from '@/components/ActivityList';
import { activityService } from '@/lib/activity-service';
import { PMActivity } from '@/types';

export function Completed() {
  const [activities, setActivities] = useState<PMActivity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    try {
      setLoading(true);
      const data = await activityService.getCompletedActivities();
      setActivities(data);
    } catch (error) {
      console.error('Error loading activities:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      const blob = await activityService.exportActivities('csv');
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `completed-activities-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error exporting activities:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this activity?')) {
      try {
        await activityService.deleteActivity(id);
        loadActivities();
      } catch (error) {
        console.error('Error deleting activity:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-success" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-foreground">Completed Activities</h1>
              <p className="text-muted text-sm mt-1">{activities.length} activities completed</p>
            </div>
          </div>
          <button
            onClick={handleExport}
            className="bg-success hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Download size={20} />
            Export
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-muted text-sm mb-2">Total Completed</p>
            <p className="text-4xl font-bold text-success">{activities.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-muted text-sm mb-2">This Week</p>
            <p className="text-4xl font-bold text-primary">
              {activities.filter(a => {
                const completedDate = new Date(a.completedAt || '');
                const today = new Date();
                const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
                return completedDate >= weekAgo;
              }).length}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-muted text-sm mb-2">This Month</p>
            <p className="text-4xl font-bold text-primary">
              {activities.filter(a => {
                const completedDate = new Date(a.completedAt || '');
                const today = new Date();
                return completedDate.getMonth() === today.getMonth() &&
                       completedDate.getFullYear() === today.getFullYear();
              }).length}
            </p>
          </div>
        </div>

        {/* Activities List */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold text-foreground mb-6">All Completed Activities</h2>
          <ActivityList
            activities={activities}
            onDelete={handleDelete}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
