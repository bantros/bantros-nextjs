import Image from 'next/image';
import Timeline from 'components/Timeline';

interface SpotifyPlayerProps {
  album?: {
    name: string;
    images: {
      url: string;
      width: number;
      height: number;
    }[];
  };
  artist?: string;
  track?: string;
  duration_ms?: number;
  progress_ms?: number;
  playing: boolean;
  error?: {
    status: number;
    message: string;
  };
}

const SpotifyPlayer = ({
  album,
  artist,
  track,
  error,
  duration_ms,
  progress_ms,
  playing
}: SpotifyPlayerProps) => {
  return (
    <div className='p-8 md:p-16'>
      <h2 className='text-base md:text-xl text-white/60 mb-4'>
        {playing ? 'Now Playing' : 'Recently Played'}
      </h2>

      <div className='relative inline-flex items-center gap-x-4 w-full md:w-fit md:min-w-96 p-2 bg-black border border-gray-800'>
        {duration_ms && progress_ms && (
          <Timeline duration={duration_ms} progress={progress_ms} />
        )}

        <div className='relative flex-[0_0_4rem] md:flex-[0_0_6rem] w-16 h-16 md:w-24 md:h-24'>
          {album && (
            <Image
              src={album.images[0].url}
              alt={album.name}
              width={album.images[0].width}
              height={album.images[0].height}
              loading='lazy'
            />
          )}
        </div>

        <div className='text-xl md:text-4xl py-2 md:pl-4 md:pr-16'>
          {track && artist && (
            <>
              {track} <span className='text-white/30'>{artist}</span>
            </>
          )}

          {error && (
            <>
              {error.status}{' '}
              <span className='text-white/30'>{error.message}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
