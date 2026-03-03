import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Calendar, Activity } from 'lucide-react';
import { activityService } from '@/lib/activity-service';
import { WeeklyStats, MonthlyStats } from '@/types';

export function Reports() {
  const [weeklyStats, setWeeklyStats] = useState<WeeklyStats | null>(null);
  const [monthlyStats, setMonthlyStats] = useState<MonthlyStats | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      setLoading(true);
      const weekly = await activityService.getWeeklyStats();
      const monthly = await activityService.getMonthlyStats();
      setWeeklyStats(weekly);
      setMonthlyStats(monthly);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-border border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted">Loading reports...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 className="text-primary" size={32} />
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
        </div>

        {/* Weekly Overview */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Calendar size={24} className="text-primary" />
            Weekly Overview
          </h2>

          {weeklyStats && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Completed */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100">
                <p className="text-muted text-sm mb-2">Completed</p>
                <p className="text-4xl font-bold text-success">{weeklyStats.completed}</p>
                <p className="text-xs text-muted mt-2">Week {weeklyStats.week}</p>
              </div>

              {/* Total */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <p className="text-muted text-sm mb-2">Total</p>
                <p className="text-4xl font-bold text-primary">{weeklyStats.total}</p>
                <p className="text-xs text-muted mt-2">Activities</p>
              </div>

              {/* Completion Rate */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-100">
                <p className="text-muted text-sm mb-2">Completion Rate</p>
                <p className="text-4xl font-bold text-success">{weeklyStats.completionRate}%</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div
                    className="bg-success h-2 rounded-full"
                    style={{ width: `${weeklyStats.completionRate}%` }}
                  ></div>
                </div>
              </div>

              {/* Pending */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 border border-yellow-100">
                <p className="text-muted text-sm mb-2">Pending</p>
                <p className="text-4xl font-bold text-warning">{weeklyStats.pending}</p>
                <p className="text-xs text-muted mt-2">In Progress</p>
              </div>

              {/* Overdue */}
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-6 border border-red-100">
                <p className="text-muted text-sm mb-2">Overdue</p>
                <p className="text-4xl font-bold text-error">{weeklyStats.overdue}</p>
                <p className="text-xs text-muted mt-2">Needs Attention</p>
              </div>
            </div>
          )}
        </div>

        {/* Monthly Overview */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <TrendingUp size={24} className="text-primary" />
            Monthly Overview
          </h2>

          {monthlyStats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Month */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <p className="text-muted text-sm mb-2">Month</p>
                <p className="text-2xl font-bold text-foreground">
                  {new Date(monthlyStats.year, monthlyStats.month - 1).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              {/* Completed */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100">
                <p className="text-muted text-sm mb-2">Completed</p>
                <p className="text-4xl font-bold text-success">{monthlyStats.completed}</p>
                <p className="text-xs text-muted mt-2">of {monthlyStats.total} total</p>
              </div>

              {/* Completion Rate */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-100">
                <p className="text-muted text-sm mb-2">Completion Rate</p>
                <p className="text-4xl font-bold text-success">{monthlyStats.completionRate}%</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div
                    className="bg-success h-2 rounded-full"
                    style={{ width: `${monthlyStats.completionRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Activity size={24} className="text-primary" />
            Performance Metrics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Efficiency Score */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Efficiency Score</h3>
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <div className="flex items-end gap-2 h-32">
                    {[65, 72, 78, 85, 82].map((value, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary rounded-t-lg transition-all hover:bg-blue-700"
                        style={{ height: `${value}%` }}
                        title={`Week ${i + 1}: ${value}%`}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-muted mt-2">
                    <span>W1</span>
                    <span>W2</span>
                    <span>W3</span>
                    <span>W4</span>
                    <span>W5</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary">82%</p>
                  <p className="text-xs text-muted">Current</p>
                </div>
              </div>
            </div>

            {/* Activity Breakdown */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Activity Breakdown</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">Preventive</span>
                    <span className="font-semibold text-foreground">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">Corrective</span>
                    <span className="font-semibold text-foreground">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">Urgent</span>
                    <span className="font-semibold text-foreground">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-error h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
