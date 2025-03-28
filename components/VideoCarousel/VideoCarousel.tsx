import React from 'react'
import { hightlightsSlides } from '@/constants'
import styles from './VideoCarousel.module.css'
import { SlidesProp } from '@/interface'


const VideoCarousel = () => {
  return (
    <div className={`flex items-center`}>
      {hightlightsSlides?.map((list: SlidesProp, index: number) =>
        <div id='slider' key={index} className={`sm:pr-20 pr-10`}>
          <div className={`video_carousel_container`}>
            <div className={`w-full h-full flex_center rounded-3xl overflow-hidden bg-black`}>
              <video id='video' playsInline preload='auto' muted>
                <source src={list?.videoSrc} type='video/mp4' />
              </video>
            </div>
            <div className={`absolute top-12 left-[5%] z-[2]`}>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoCarousel