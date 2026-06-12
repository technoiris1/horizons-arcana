'use client';

import { useEffect, useState } from 'react';

export interface LeaderboardEntry {
  slackId: string;
  displayName: string;
  approvedHours: number;
  profileImage?: string;
}

export function useLeaderboard(limit?: number) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('/api/leaderboard');
        if (!response.ok) throw new Error('Failed to fetch leaderboard');

        const data: LeaderboardEntry[] = await response.json();
        const visible = limit ? data.slice(0, limit) : data;

        if (cancelled) return;
        setEntries(visible);
        setLoading(false);

        const slackIds = visible.map((entry) => entry.slackId);
        if (slackIds.length === 0) return;

        const profileResponse = await fetch('/api/leaderboard/profiles', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slackIds }),
        });

        if (!profileResponse.ok || cancelled) return;

        const { profiles } = await profileResponse.json();
        if (cancelled) return;

        setEntries((prev) =>
          prev.map((entry) => ({
            ...entry,
            profileImage: profiles[entry.slackId] ?? entry.profileImage,
          }))
        );
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error');
          setLoading(false);
        }
      }
    };

    fetchLeaderboard();

    return () => {
      cancelled = true;
    };
  }, [limit]);

  return { entries, loading, error };
}
