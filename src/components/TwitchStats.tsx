// src/components/TwitchStats.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TwitchData {
  followers: number;
  userId: string;
  profileImage: string;
}

type StatCardProps = {
  title: string;
  data: Array<{ month: string; value: number }>;
};

export const StatCard = ({ title, data }: StatCardProps) => {
  const [twitchData, setTwitchData] = useState<TwitchData | null>(null);

  useEffect(() => {
    async function fetchTwitchData() {
      try {
        const response = await fetch('/api/twitch');
        const data = await response.json();
        setTwitchData(data);
      } catch (error) {
        console.error('Error fetching Twitch data:', error);
      }
    }

    fetchTwitchData();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month"
              tick={{ fill: '#666' }}
              tickLine={{ stroke: '#666' }}
            />
            <YAxis 
              tick={{ fill: '#666' }}
              tickLine={{ stroke: '#666' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#8b5cf6" 
              strokeWidth={2}
              dot={{ fill: '#8b5cf6' }}
              activeDot={{ r: 6, fill: '#7c3aed' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {twitchData && title === "Total Followers" && (
        <div className="mt-4 text-center">
          <p className="text-gray-600">Current Followers: {twitchData.followers.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default StatCard;