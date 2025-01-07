import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { UsersList } from '../components/admin/UsersList';
import { StatsCards } from '../components/admin/StatsCards';
import { DashboardCharts } from '../components/admin/DashboardCharts';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Admin Dashboard</h1>
        <StatsCards />
        <DashboardCharts />
        <UsersList />
      </div>
    </div>
  );
}