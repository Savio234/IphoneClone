'use client';
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Link from 'next/link';
import styles from './Hero.module.css'

const Hero = () => {
  const windowSize = window.innerWidth
  const getVideoSrc = windowSize > 650 ? '/assets/videos/hero.mp4' : '/assets/videos/smallHero.mp4'
  const [videoSrc, setVideoSrc] = useState<any>(getVideoSrc)

  const handleVideoSrcSet = () => {
    if (windowSize > 650) {
      setVideoSrc('/assets/videos/hero.mp4')
    } else {
      setVideoSrc('/assets/videos/smallHero.mp4')
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  })
  useEffect(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 2,
    })
    gsap.to('#cta', {
      opacity: 1,
      y: -50,
      delay: 2
    })
  }, [])
  return (
    <section className={`${styles.hero_section} w-full`}>
      <div className={`${styles.hero_container} h-5/6 w-full flex-col flex-center`}>
        <h3 id='hero' className={`hero_title`}>iPhone 15 Pro</h3>
        <div className={`w-full h-full`}>
        {/* <div className={`md:w-10/12 w-9/12`}> */}
          <video loop autoPlay muted playsInline className={`${styles.hero_video_bg} pointer-events-none`}>
            <source type='video/mp4' src={'/assets/videos/hero.mp4'} />
          </video>
          <video loop autoPlay muted playsInline className={`${styles.hero_video_sm} pointer-events-none`}>
            <source type='video/mp4' src={'/assets/videos/smallHero.mp4'} />
          </video>
        </div>
      </div>

      <div id="cta" className={`flex flex-col items-center opacity-0 -translate-y-20`}>
        <Link href={'#highlight'}>
          <div className={`btn h-[6.5rem] w-[15rem] rounded-[10rem] flex_center font-bold text-3xl`}>
            Buy
          </div>
        </Link>
        <h3 className={`font-normal text-4xl`}>From $199/month or $999</h3>
      </div>
    </section>
  )
}

export default Hero