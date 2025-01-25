'use server';

import qs from 'qs';

const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString('base64');

const getAccessToken = async () => {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: qs.stringify({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN
    }),
    cache: 'no-store'
  });
  return res.json();
};

const getRecentlyPlayedTracks = async (access_token: string) => {
  const res = await fetch(
    'https://api.spotify.com/v1/me/player/recently-played',
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      },
      cache: 'no-store'
    }
  );

  const json = await res.json();

  if (res.status > 400) {
    return {
      error: json.error,
      playing: false
    };
  }

  return {
    album: {
      name: json.items[0].track.album.name,
      images: json.items[0].track.album.images || []
    },
    artist: json.items[0].track.artists
      .map((artist: { name: string }) => artist.name)
      .join(', '),
    track: json.items[0].track.name,
    playing: false
  };
};

const getCurrentlyPlayingTrack = async () => {
  const { access_token } = await getAccessToken();

  const res = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      },
      cache: 'no-store'
    }
  );

  // abort on 204 status as no track currently being played
  if (res.status === 204) {
    return await getRecentlyPlayedTracks(access_token);
  }

  const json = await res.json();

  if (res.status > 400) {
    return {
      error: json.error,
      playing: false
    };
  }

  return {
    album: {
      name: json.item.album.name,
      images: json.item.album.images || []
    },
    artist: json.item.artists
      .map((artist: { name: string }) => artist.name)
      .join(', '),
    track: json.item.name,
    duration_ms: json.item.duration_ms,
    progress_ms: json.progress_ms,
    playing: json.is_playing
  };
};

export async function connectToSpotifyPlayer() {
  return await getCurrentlyPlayingTrack();
}
