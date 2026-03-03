import { Info as InfoIcon, Mail, Phone, Globe } from 'lucide-react';

export function Info() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <div className="flex items-center gap-3 mb-8">
            <InfoIcon className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-foreground">About This App</h1>
          </div>

          {/* App Info */}
          <div className="mb-8 pb-8 border-b border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">52-Week PM Tracker</h2>
            <p className="text-muted mb-4">
              A comprehensive preventive maintenance tracking system designed to help facilities and
              operations teams manage their maintenance schedules efficiently.
            </p>
            <p className="text-sm text-muted">Version 1.0.0</p>
          </div>

          {/* Features */}
          <div className="mb-8 pb-8 border-b border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">Features</h2>
            <ul className="space-y-2 text-muted">
              <li>✓ 52-week maintenance planning and tracking</li>
              <li>✓ Real-time activity status updates</li>
              <li>✓ Weekly and monthly statistics</li>
              <li>✓ Completion rate monitoring</li>
              <li>✓ Overdue activity alerts</li>
              <li>✓ Comprehensive reporting and analytics</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-xl p-6 text-white">
            <h2 className="text-xl font-bold mb-4">Contact & Support</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>support@52weekpmtracker.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={20} />
                <span>www.52weekpmtracker.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
