"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function AnalyticsPage() {
  // Dummy analytics data (replace with DB/API data later)
  const engagementData = [
    { month: "Jan", engagement: 120 },
    { month: "Feb", engagement: 180 },
    { month: "Mar", engagement: 140 },
    { month: "Apr", engagement: 200 },
    { month: "May", engagement: 250 },
  ];

  const platformData = [
    { name: "Facebook", value: 400 },
    { name: "Instagram", value: 300 },
    { name: "WhatsApp", value: 200 },
  ];

  const COLORS = ["#1877F2", "#E1306C", "#25D366"];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Summary Cards */}
      <Card className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <CardContent>
          <CardTitle>Total Posts</CardTitle>
          <p className="text-2xl font-bold">325</p>
        </CardContent>
        <CardContent>
          <CardTitle>Total Engagement</CardTitle>
          <p className="text-2xl font-bold">1,240</p>
        </CardContent>
        <CardContent>
          <CardTitle>Followers Growth</CardTitle>
          <p className="text-2xl font-bold">+12%</p>
        </CardContent>
      </Card>

      {/* Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Engagement</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engagementData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="engagement" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                dataKey="value"
                label
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
