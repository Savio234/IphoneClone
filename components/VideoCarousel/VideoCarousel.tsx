'use client';
import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '@/constants'
import { SlidesProp } from '@/interface'
import styles from './VideoCarousel.module.css'
import gsap from 'gsap';

const VideoCarousel = () => {
  const videoRef = useRef<any[]>([]);
  const videoSpanRef = useRef<any[]>([]);
  const videoDivRef = useRef<any[]>([]);

  const [loadedData, setLoadedData] = useState<any[]>([])
  const [video, setVideo] = useState({ isEnd: false, startPlay: false, videoId: 0,
    isLastVideo: false,
    isPlaying: false
  });
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;
  useEffect(() => {
    if (loadedData?.length > 3) {
      if(!isPlaying) {
        videoRef?.current[videoId].pause();
      } else {
        startPlay && videoRef?.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);
  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef?.current;

    if (span[videoId]) {
      let animate = gsap.to(span[videoId], {
        onUpdate: () => {

        },
        onComplete: () => {

        }
      })
    }
  }, [videoId, startPlay]);

  return (
    <>
      <div className={`flex items-center`}>
        {hightlightsSlides?.map((list: SlidesProp, index: number) =>
          <div id='slider' key={index} className={`sm:pr-20 pr-10`}>
            <div className={`video_carousel_container`}>
              <div className={`w-full h-full flex_center rounded-3xl overflow-hidden bg-black`}>
                <video id='video' playsInline preload='auto' muted
                  ref={(el: any) => {
                    if (videoRef?.current) {
                      videoRef.current[index] = el
                    }
                  }}
                  onPlay={() => {
                    setVideo((prevVideo: any) => ({
                      ...prevVideo, isPlaying: true
                    }))
                  }}
                  // ref={(el: any) => { if (videoRef.current) videoRef.current[index] = el; }}
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
      
    </>
  )
}

export default VideoCarousel