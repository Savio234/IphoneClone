'use client';
import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '@/constants'
import { SlidesProp } from '@/interface'
import styles from './VideoCarousel.module.css'
import gsap from 'gsap';
import Image from 'next/image';

const VideoCarousel = () => {
  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);
  const videoSpanRef = useRef<(HTMLSpanElement | null)[]>([]);
  const videoDivRef = useRef<(HTMLDivElement | null)[]>([]);

  const [loadedData, setLoadedData] = useState<HTMLVideoElement[]>([])
  const [video, setVideo] = useState({ isEnd: false, startPlay: false, videoId: 0,
    isLastVideo: false,
    isPlaying: false
  });
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;
  useEffect(() => {
    gsap.to('#slider', {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: 'power2.inOut'
    })
    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none',
      },
      onComplete: () => {
        setVideo((prev: typeof video) => ({
          ...prev,
          startPlay: true, isPlaying: true
        }))
      }
    })
  }, [isEnd, videoId])

  useEffect(() => {
    if (loadedData?.length > 3) {
      if(!isPlaying) {
        videoRef?.current[videoId]?.pause();
      } else {
        if (startPlay) {
          videoRef?.current[videoId]?.play();
        }
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleLoadedMetaData = (event: HTMLVideoElement) => 
      setLoadedData((prev: HTMLVideoElement[]) => [...prev, event])

  useEffect(() => {
    let currentProgress = 0;
    const span = videoSpanRef?.current;

    if (span[videoId]) {
      const animate = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(animate.progress() * 100);
          if ( progress !== currentProgress ) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width: '100%'
            })
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: 'white',
            })
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: '12px'
            })
            gsap.to(span[videoId], {
              backgroundColor: '#AFAFAF'
            })
          }
        }
      })

      if (videoId === 0) {
        animate.restart();
      }

      const animationUpdate = () => {
        animate.progress(videoRef.current[videoId]?.currentTime || 0
          / 
        hightlightsSlides[videoId].videoDuration)
      }
      if (isPlaying) {
        gsap.ticker.add(animationUpdate)
      } else {
        gsap.ticker.remove(animationUpdate)
      }
    }

  }, [videoId, startPlay, isPlaying]);

  const imgSrc = isLastVideo ? '/assets/images/replay.svg' : 
    (!isPlaying ? '/assets/images/play.svg' : '/assets/images/pause.svg');
  const imgAlt = isLastVideo ? 'replay' : (isPlaying ? 'pause' : 'play');
  
  const handleProcess = (type: string, index?: number) => {
    // switch (type) {
    //   case 'video-end':
    //     setVideo((prevVideo: any) => ({...prevVideo, isEnd: true, videoId: (index && index + 1)}));
    //     break;
    //   case 'video-last':
    //     setVideo((prevVideo: any) => ({...prevVideo, isLastVideo: true}));
    //     break;
    //   case 'video-reset':
    //     setVideo((prevVideo: any) => ({...prevVideo, isLastVideo: false, videoId: 0}));
    //     break;
    //   case 'play':
    //     setVideo((prevVideo: any) => ({...prevVideo, isPlaying: !prevVideo?.isPlaying}));
    //     break;
    //    case 'pause':
    //     setVideo((prevVideo: any) => ({...prevVideo, isPlaying: !prevVideo?.isPlaying}));
    //     break;
    //   default:
    //   return video;
    // }
    if (type === 'video-end') {
      setVideo((prevVideo: typeof video) => ({ ...prevVideo, isEnd: true, videoId: index !== undefined ? index + 1 : prevVideo.videoId }));
    } else if (type === 'video-last') {
      setVideo((prevVideo: typeof video) => ({ ...prevVideo, isLastVideo: true }));
    } else if (type === 'video-reset') {
      setVideo((prevVideo: typeof video) => ({ ...prevVideo, isLastVideo: false, videoId: 0 }));
    } else if (type === 'play') {
      setVideo((prevVideo: typeof video) => ({ ...prevVideo, isPlaying: !prevVideo?.isPlaying }));
    } else if (type === 'pause') {
      setVideo((prevVideo: typeof video) => ({ ...prevVideo, isPlaying: !prevVideo?.isPlaying }));
    } else {
      return video;
    }
  }

  return (
    <>
      <div className={`flex items-center`}>
        {hightlightsSlides?.map((list: SlidesProp, index: number) =>
          <div id='slider' key={list?.id} className={`sm:pr-20 pr-10`}>
            <div className={`video_carousel_container`}>
              <div className={`w-full h-full flex_center rounded-3xl overflow-hidden bg-black`}>
                <video id='video' playsInline={true} preload='auto' muted
                  className={`${index === 1 && 'translate-x-44'} pointer-events-none`}
                  ref={(el: HTMLVideoElement | null) => { (videoRef.current[index] = el); }}
                  onEnded={() => {
                    void (index !== 3 ? handleProcess('video-end', index) : handleProcess('video-last'));
                  }}
                  onPlay={() => {
                    setVideo((prevVideo: typeof video) => ({
                      ...prevVideo, isPlaying: true
                    }))
                  }}
                  onLoadedMetadata={(event: React.SyntheticEvent<HTMLVideoElement>) => handleLoadedMetaData(event.currentTarget)}
                >
                  <source src={list?.videoSrc} type='video/mp4' />
                </video>
              </div>
              <div className={`absolute top-12 left-[5%] z-[2]`}>
                {list?.textLists?.map((text: string, index: number) =>
                  <p key={index} className={`md:text-2xl text-xl font-medium`}>
                    {text}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`flex_center relative mt-10`}>
        <div className={`flex_center py-6 px-8 bg-gray-300 backdrop-blur rounded-full`}>
          {videoRef?.current?.map((_: HTMLVideoElement | null, index: number) =>
            <span key={index} className={`mx-2 w-3 h-3 bg-gray-200 rounded-full cursor-pointer
              relative ${styles.video_div}`}
              ref={(el: HTMLDivElement | null) => { (videoDivRef.current[index] = el); }}
            >
              <span className={`absolute h-full w-full rounded-full`}
                ref={(el: HTMLSpanElement | null) => { videoSpanRef.current[index] = el; }}
              />
            </span>
          )}
        </div>
        <button className={`control_btn`}>
          <div onClick={() => isLastVideo ? handleProcess('video-reset') : 
            (isPlaying ? handleProcess('pause') : handleProcess('play'))}
            className={`relative w-6 h-6`}>
            <Image alt={imgAlt} fill src={imgSrc} />
          </div>
        </button>
      </div>
    </>
  )
}

export default VideoCarousel