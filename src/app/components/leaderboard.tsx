'use client';

import { useEffect, useState } from 'react';

interface LeaderboardEntry {
  slackId: string;
  displayName: string;
  approvedHours: number;
  profileImage?: string;
}

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('/api/leaderboard');
        if (!response.ok) throw new Error('Failed to fetch leaderboard');
        const data = await response.json();
        setLeaderboard(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="leaderboard-container">
        <div className="loading">Loading leaderboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="leaderboard-container">
        <div className="error">Failed to load leaderboard: {error}</div>
      </div>
    );
  }

  return (
    <div className="leaderboard-container">
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th></th>
            <th>Username</th>
            <th>Approved Hours</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={entry.slackId} className={`rank-${index + 1}`}>
              <td className="rank-cell">
                <span className="rank-number">#{index + 1}</span>
              </td>
              <td className="profile-cell">
                {entry.profileImage ? (
                  <img
                    src={entry.profileImage}
                    alt={entry.displayName}
                    className="profile-image"
                  />
                ) : (
                  <div className="profile-placeholder">{entry.displayName[0]}</div>
                )}
              </td>
              <td className="username-cell">{entry.displayName}</td>
              <td className="hours-cell">{entry.approvedHours.toFixed(1)} hrs</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
