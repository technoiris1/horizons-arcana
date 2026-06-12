interface StandProps {
  name: string;
  hours: number;
  profileImage?: string;
  rank: number;
}

const baseHeights: Record<number, string> = {
  1: 'stand-base--first',
  2: 'stand-base--second',
  3: 'stand-base--third',
};

function RankBadge({ rank }: { rank: number }) {
  return (
    <div className="stand-rank-badge" aria-label={`Rank ${rank}`}>
      <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="stand-rank-star">
        <path
          d="M28 3C28.8 16.5 36.2 24.8 53 27.5C36.2 30.2 28.8 39.5 28 53C27.2 39.5 19.8 30.2 3 27.5C19.8 24.8 27.2 16.5 28 3Z"
          fill="#FFF0CA"
          stroke="#1b3364"
          strokeWidth="2.5"
        />
      </svg>
      <span className="stand-rank-number">#{rank}</span>
    </div>
  );
}

export default function Stand({ name, hours, profileImage, rank }: StandProps) {
  const baseClass = baseHeights[rank] ?? baseHeights[3];

  return (
    <div className="stand">
      <div className="stand-profile-wrap">
        <RankBadge rank={rank} />
        {profileImage ? (
          <img src={profileImage} alt={`${name}'s profile`} className="stand-avatar" />
        ) : (
          <div className="stand-avatar stand-avatar--placeholder">{name[0]}</div>
        )}
      </div>

      <p className="stand-name">{name}</p>

      <div className={`stand-base ${baseClass}`}>
        <span className="stand-hours">{Math.round(hours)} hrs</span>
      </div>
    </div>
  );
}
