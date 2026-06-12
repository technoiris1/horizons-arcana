'use client';

import { useLeaderboard } from '../hooks/useLeaderboard';
import Stand from './stand';

const PODIUM_ORDER = [2, 1, 3] as const;

export default function Podium() {
  const { entries: topThree, loading, error } = useLeaderboard(3);

  if (loading) {
    return (
      <div className="podium-container">
        <div className="loading">Loading podium...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="podium-container">
        <div className="error">Failed to load podium: {error}</div>
      </div>
    );
  }

  if (topThree.length === 0) {
    return (
      <div className="podium-container">
        <div className="loading">No entries yet — be the first!</div>
      </div>
    );
  }

  return (
    <div className="podium-container">
      <div className="podium-stands">
        {PODIUM_ORDER.map((rank) => {
          const entry = topThree[rank - 1];
          if (!entry) return <div key={rank} className="podium-empty" />;

          return (
            <Stand
              key={entry.slackId}
              rank={rank}
              name={entry.displayName}
              hours={entry.approvedHours}
              profileImage={entry.profileImage}
            />
          );
        })}
      </div>
    </div>
  );
}
