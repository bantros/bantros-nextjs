import { connectToSpotifyPlayer } from 'app/actions';
import Projects from 'components/Projects';
import SpotifyPlayer from 'components/SpotifyPlayer';

export default async function Home() {
  const player = await connectToSpotifyPlayer();
  return (
    <>
      <Projects />
      <SpotifyPlayer {...player} />
    </>
  );
}
