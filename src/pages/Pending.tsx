import { useState, useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { ActivityList } from '@/components/ActivityList';
import { activityService } from '@/lib/activity-service';
import { PMActivity } from '@/types';

export function Pending() {
  const [activities, setActivities] = useState<PMActivity[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    try {
      setLoading(true);
      const data = await activityService.getPendingActivities();
      setActivities(data);
    } catch (error) {
      console.error('Error loading activities:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = async (id: string) => {
    try {
      await activityService.completeActivity(id);
      loadActivities();
    } catch (error) {
      console.error('Error completing activity:', error);
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

  const overdueCount = activities.filter(a => new Date(a.dueDate) < new Date()).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Clock className="text-warning" size={32} />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Pending Activities</h1>
            <p className="text-muted text-sm mt-1">{activities.length} activities pending</p>
          </div>
        </div>

        {/* Alert for Overdue */}
        {overdueCount > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertTriangle className="text-error flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-semibold text-error">Overdue Activities</h3>
              <p className="text-sm text-error text-opacity-80">
                You have {overdueCount} overdue activities that need immediate attention.
              </p>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-muted text-sm mb-2">Total Pending</p>
            <p className="text-4xl font-bold text-warning">{activities.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-muted text-sm mb-2">Overdue</p>
            <p className="text-4xl font-bold text-error">{overdueCount}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-muted text-sm mb-2">On Schedule</p>
            <p className="text-4xl font-bold text-success">
              {activities.length - overdueCount}
            </p>
          </div>
        </div>

        {/* Activities List */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold text-foreground mb-6">All Pending Activities</h2>
          <ActivityList
            activities={activities}
            onComplete={handleComplete}
            onDelete={handleDelete}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
