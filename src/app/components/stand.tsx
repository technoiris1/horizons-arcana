import Link from "next/link";

interface StandProps {
  name: string;
  hours: number;
  profileImage?: string;
  rank: number;
  slackId: string;
}

const baseHeights: Record<number, string> = {
  1: 'stand-base--first',
  2: 'stand-base--second',
  3: 'stand-base--third',
};

function RankBadge({ rank }: { rank: number }) {
  return (
    <div className={`stand-rank-badge stand-rank-badge--${rank}`} aria-label={`Rank ${rank}`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="stand-rank-shape" aria-hidden="true">
        <path
          d="M24 5
             C27 5 29.5 7 30.5 10
             C33.5 8 37.5 9.5 38.5 13
             C41 16 40 20 37.5 22.5
             C40 25.5 41 29.5 38.5 33
             C37.5 36.5 33.5 38 30.5 36
             C29.5 39 27 41 24 41
             C21 41 18.5 39 17.5 36
             C14.5 38 10.5 36.5 9.5 33
             C7 29.5 8 25.5 10.5 22.5
             C8 20 7 16 9.5 13
             C10.5 9.5 14.5 8 17.5 10
             C18.5 7 21 5 24 5Z"
          className="stand-rank-shape-fill"
          stroke="#1b3364"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="stand-rank-number">#{rank}</span>
    </div>
  );
}

export default function Stand({ name, hours, profileImage, rank, slackId }: StandProps) {
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

      <p className="stand-name"><Link href={`https://hackclub.enterprise.slack.com/team/${slackId}`} target="_blank" rel="noopener noreferrer" className="!no-underline hover:!underline hover:!decoration-wavy font-bold text-inherit">{name}</Link></p>

      <div className={`stand-base ${baseClass}`}>
        <span className="stand-hours">{Math.round(hours)} hrs</span>
      </div>
    </div>
  );
}
