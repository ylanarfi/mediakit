import { NextResponse } from 'next/server';

async function getTwitchToken() {
  const response = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    {
      method: 'POST',
    }
  );
  const data = await response.json();
  return data.access_token;
}

async function getTwitchUserData(token: string) {
  const response = await fetch(
    `https://api.twitch.tv/helix/users?login=${process.env.TWITCH_USERNAME}`,
    {
      headers: {
        'Client-ID': process.env.TWITCH_CLIENT_ID!,
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data.data[0];
}

async function getTwitchFollowers(token: string, userId: string) {
  const response = await fetch(
    `https://api.twitch.tv/helix/followers?broadcaster_id=${userId}`,
    {
      headers: {
        'Client-ID': process.env.TWITCH_CLIENT_ID!,
        'Authorization': `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function GET() {
  try {
    const token = await getTwitchToken();
    const userData = await getTwitchUserData(token);
    const followersData = await getTwitchFollowers(token, userData.id);

    return NextResponse.json({
      followers: followersData.total,
      userId: userData.id,
      profileImage: userData.profile_image_url,
    });
  } catch (error) {
    console.error('Error fetching Twitch data:', error);
    return NextResponse.json({ error: 'Failed to fetch Twitch data' }, { status: 500 });
  }
}