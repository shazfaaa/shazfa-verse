import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, Volume2, VolumeX, Disc } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  subTitle: string;
  artist: string;
  mood: string;
  src: string;
  fallbackSrc: string;
}

const TWS_TRACKS: Track[] = [
  {
    id: 'tws-plot-twist',
    title: 'plot twist',
    subTitle: 'First meetings create bright stories',
    artist: 'TWS',
    mood: 'Sparkling Blue ✦',
    src: '/audio/tws-plot-twist.m4a',
    fallbackSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ac/8d/97/ac8d9717-2bbf-b1bf-b2e9-476feea6a480/mzaf_11615065500455071115.plus.aac.p.m4a',
  },
  {
    id: 'tws-if-im-s',
    title: 'If I’m S, Can You Be My N?',
    subTitle: 'Opposites create perfect synergy',
    artist: 'TWS',
    mood: 'Summer Beat! ✨',
    src: '/audio/tws-if-im-s.m4a',
    fallbackSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ea/12/b1/ea12b1bd-8f4c-cd99-1c9b-d7b1338fa90c/mzaf_1805517890383540968.plus.aac.p.m4a',
  },
  {
    id: 'tws-hey-hey',
    title: 'hey! hey!',
    subTitle: 'Our bright season begins right here',
    artist: 'TWS',
    mood: 'Summer Beat! ★',
    src: '/audio/tws-hey-hey.m4a',
    fallbackSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/85/99/61/85996160-7ac7-3d12-8ef6-e4c3289cd621/mzaf_15977848521858499848.plus.aac.p.m4a',
  },
];

export const AboutMusicPlayer: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.75);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = TWS_TRACKS[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      handleNextTrack();
    };

    const handleError = () => {
      // Try fallback URL if local audio has any issue
      if (audio.src !== currentTrack.fallbackSrc) {
        audio.src = currentTrack.fallbackSrc;
        if (isPlaying) {
          audio.play().catch(() => {});
        }
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Playback error:', err);
        });
    }
  };

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % TWS_TRACKS.length;
    setCurrentTrackIndex(nextIndex);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.src = TWS_TRACKS[nextIndex].src;
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative rounded-2xl bg-white/90 dark:bg-[#162331]/90 backdrop-blur-md border-2 border-[#DCEEFF] dark:border-[#72E2E6]/35 p-3.5 shadow-md shadow-[#7DA7D9]/10 dark:shadow-[0_0_18px_rgba(114,226,230,0.12)] hover:border-[#72E2E6] transition-all duration-300">
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
      />

      {/* Header Tape: Cute TWS Tag with Barcode Accent from Moodboard */}
      <div className="flex items-center justify-between pb-2.5 border-b border-[#DCEEFF] dark:border-[#2F4860]/70 mb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#72E2E6] animate-pulse shadow-[0_0_8px_rgba(114,226,230,0.8)]" />
          <span className="font-mono text-[10px] font-bold tracking-wider text-[#2F4860] dark:text-[#FFF7CC] uppercase flex items-center gap-1">
            <span>TWS Favorite Playlist</span>
            <span className="text-[#72E2E6]">✦</span>
          </span>
        </div>

        {/* Live Audio Visualizer Equalizer with Cyan Stage Glow */}
        <div className="flex items-end gap-0.5 h-3 px-1.5 py-0.5 rounded-full bg-[#DCEEFF]/50 dark:bg-[#111A24] border border-transparent dark:border-[#72E2E6]/20">
          <span
            className={`w-0.5 bg-[#72E2E6] rounded-full transition-all duration-150 ${
              isPlaying ? 'h-3 animate-pulse' : 'h-1'
            }`}
          />
          <span
            className={`w-0.5 bg-[#2F4860] dark:bg-[#FFF7CC] rounded-full transition-all duration-200 ${
              isPlaying ? 'h-2 animate-bounce' : 'h-1.5'
            }`}
          />
          <span
            className={`w-0.5 bg-[#72E2E6] rounded-full transition-all duration-150 ${
              isPlaying ? 'h-2.5 animate-pulse' : 'h-1'
            }`}
          />
          <span
            className={`w-0.5 bg-[#2F4860] dark:bg-[#FFF7CC] rounded-full transition-all duration-300 ${
              isPlaying ? 'h-2 animate-bounce' : 'h-1'
            }`}
          />
        </div>
      </div>

      {/* Main Track Info & Controls */}
      <div className="flex items-center gap-3">
        {/* Spinning Mini CD / Vinyl Record Thumbnail (from moodboard panel 3) */}
        <div className="relative shrink-0">
          <div
            className={`w-11 h-11 rounded-full bg-[#1A2838] dark:bg-[#111A24] border-2 border-[#DCEEFF] dark:border-[#72E2E6]/60 flex items-center justify-center shadow-md dark:shadow-[0_0_12px_rgba(114,226,230,0.35)] transition-transform duration-700 ${
              isPlaying ? 'animate-spin [animation-duration:3s]' : ''
            }`}
          >
            {/* CD Grooves */}
            <div className="w-7 h-7 rounded-full border border-[#72E2E6]/30 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#FFF7CC] border border-[#2F4860] flex items-center justify-center text-[7px] font-bold text-[#2F4860] shadow-xs">
                ★
              </div>
            </div>
          </div>
          {isPlaying && (
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#72E2E6] border-2 border-white dark:border-[#162331] animate-ping pointer-events-none" />
          )}
        </div>

        {/* Track Title, Artist, & Seek bar */}
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-1">
            <h4 className="font-syne font-bold text-xs text-[#2F4860] dark:text-white truncate">
              {currentTrack.title}
            </h4>
            <span className="shrink-0 font-mono text-[9px] text-[#7DA7D9] dark:text-[#FFF7CC]/80 font-semibold">
              {currentTrack.mood}
            </span>
          </div>
          <p className="font-mono text-[10px] text-[#7DA7D9] dark:text-[#DCEEFF]/80 truncate">
            {currentTrack.artist} · <span className="opacity-80">{currentTrack.subTitle}</span>
          </p>

          {/* Progress Bar & Timestamps */}
          <div className="mt-1.5 flex items-center gap-1.5">
            <span className="font-mono text-[9px] text-[#2F4860]/70 dark:text-[#DCEEFF]/70 w-6">
              {formatTime(currentTime)}
            </span>
            <div className="relative flex-1 flex items-center">
              <input
                type="range"
                min="0"
                max={duration || 30}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-[#DCEEFF] dark:bg-[#2F4860] rounded-lg appearance-none cursor-pointer accent-[#7DA7D9] dark:accent-[#FFF7CC]"
              />
            </div>
            <span className="font-mono text-[9px] text-[#2F4860]/70 dark:text-[#DCEEFF]/70 w-6 text-right">
              {formatTime(duration || 30)}
            </span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            className="w-8 h-8 rounded-full bg-[#FFF7CC] hover:bg-[#FFF2B2] text-[#2F4860] border-2 border-[#E6DB97] flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            )}
          </button>

          {/* Next Track Button */}
          <button
            type="button"
            onClick={handleNextTrack}
            aria-label="Next track"
            title="Next Track"
            className="w-6 h-6 rounded-full bg-[#DCEEFF] hover:bg-[#C8E4FD] dark:bg-[#2F4860] dark:hover:bg-[#3B5A78] text-[#2F4860] dark:text-[#FFF7CC] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          >
            <SkipForward className="w-3 h-3" />
          </button>

          {/* Mute Toggle */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            className="w-6 h-6 rounded-full bg-[#DCEEFF] hover:bg-[#C8E4FD] dark:bg-[#2F4860] dark:hover:bg-[#3B5A78] text-[#2F4860] dark:text-[#FFF7CC] flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          >
            {isMuted ? (
              <VolumeX className="w-3 h-3 text-rose-500" />
            ) : (
              <Volume2 className="w-3 h-3" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
