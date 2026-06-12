import { NextResponse } from 'next/server';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

interface LeaderboardEntry {
  slackId: string;
  displayName: string;
  approvedHours: number;
  profileImage?: string;
}

export async function GET() {
  try {
    let csvContent: string;
    
    if (process.env.NODE_ENV === 'production' && process.env.VERCEL_BLOB_READ_URL) {
      const response = await fetch(process.env.VERCEL_BLOB_READ_URL);
      csvContent = await response.text();
    } else {
      const csvPath = path.join(process.cwd(), 'public/csv/arcana.csv');
      csvContent = fs.readFileSync(csvPath, 'utf-8');
    }
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
    });


    const leaderboard: LeaderboardEntry[] = records
      .map((record: any) => ({
        slackId: record['Slack ID'],
        displayName: record['Display Name'],
        approvedHours: parseFloat(record['Approved hours']) || 0,
      }))
      .filter((entry: LeaderboardEntry) => entry.approvedHours > 0)
      .sort((a: LeaderboardEntry, b: LeaderboardEntry) => b.approvedHours - a.approvedHours)
      .slice(0, 15);

    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error('Leaderboard error:', error);
    return NextResponse.json(
      { error: 'Failed to generate leaderboard' },
      { status: 500 }
    );
  }
}
