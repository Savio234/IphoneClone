'use client';
import React, { useEffect } from 'react';
import { VideoCarousel } from '..';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './Highlights.module.css'

const Highlights = () => {
  useEffect(() => {
    gsap.to('#title', {opacity : 1, y: 0});
    gsap.to('.link', {opacity : 1, y: 0, duration: 1, stagger: 0.4});
  }, [])
  return (
    <section id='highlight' className={`h-full w-screen overflow-hidden bg-zinc common_padding`}>
      <div className={`w-full`}>
        <div className={`mb-12 w-full items-end flex justify-between`}>
          <h1 id='title' className={`section-heading`}>
            Get the highlights
          </h1>
          <div className={`flex flex-wrap items-end gap-5`}>
            <div className={`link gap-2`}>
              <p className={``}>Watch the film</p>
              <div className={`relative w-5 h-5`}>
                <Image alt='watch' fill src='/assets/images/watch.svg' />
              </div>
            </div>
            <div className={`link gap-2`}>
              <p className={``}>Watch the event</p>
              <div className={`relative w-5 h-5`}>
                <Image alt='watch' fill src='/assets/images/right.svg' />
              </div>
            </div>
            
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights