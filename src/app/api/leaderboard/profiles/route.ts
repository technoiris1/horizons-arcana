import { NextResponse } from 'next/server';
import { WebClient } from '@slack/web-api';

export async function POST(request: Request) {
  try {
    const { slackIds } = await request.json();

    if (!Array.isArray(slackIds) || slackIds.length === 0) {
      return NextResponse.json({ profiles: {} });
    }

    const slackToken = process.env.SLACK_BOT_TOKEN;
    if (!slackToken) {
      return NextResponse.json({ profiles: {} });
    }

    const client = new WebClient(slackToken);
    const profiles: Record<string, string> = {};

    await Promise.all(
      slackIds.map(async (slackId: string) => {
        try {
          const userInfo = await client.users.info({ user: slackId });
          const image = userInfo.user?.profile?.image_72;
          if (image) profiles[slackId] = image;
        } catch (error) {
          console.error(`Failed to fetch profile for ${slackId}:`, error);
        }
      })
    );

    return NextResponse.json({ profiles });
  } catch (error) {
    console.error('Profile fetch error:', error);
    return NextResponse.json({ profiles: {} });
  }
}
