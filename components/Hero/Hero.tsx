'use client';
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link';
import styles from './Hero.module.css'

const Hero = () => {
  // const windowSize = window.innerWidth
  // const getVideoSrc = windowSize > 650 ? '/assets/videos/hero.mp4' : '/assets/videos/smallHero.mp4'
  // const [videoSrc, setVideoSrc] = useState<any>(getVideoSrc)

  // const handleVideoSrcSet = () => {
  //   if (windowSize > 650) {
  //     setVideoSrc('/assets/videos/hero.mp4')
  //   } else {
  //     setVideoSrc('/assets/videos/smallHero.mp4')
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('resize', handleVideoSrcSet);

  //   return () => {
  //     window.removeEventListener('resize', handleVideoSrcSet)
  //   }
  // })
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
  'To happens once'

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //       (entries) => {
  //           entries.forEach((entry) => {
  //           if (entry.isIntersecting && !hasAnimated.current) {
  //               const counters = sectionRef.current?.querySelectorAll('[data-count]');
  //               counters?.forEach((counter) => {
  //                   const target = parseInt(counter.getAttribute('data-count') || '0');
  //                       animateCounter(counter as HTMLElement, 0, target, 2000); // 2 seconds
  //                   }
  //               );
  //               hasAnimated.current = true;
  //           }
  //           });
  //       },
  //       { threshold: 0.2 }
  //   );

  //   if (sectionRef.current) {
  //       observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //       if (sectionRef.current) {
  //           observer.unobserve(sectionRef.current);
  //       }
  //   };
  // }, []);

  'To happens more than once'

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const counters = sectionRef.current?.querySelectorAll('[data-count]');
  //         if (entry.isIntersecting) {
  //           // Animate when section enters viewport
  //           counters?.forEach((counter) => {
  //             const target = parseInt(counter.getAttribute('data-count') || '0');
  //             animateCounter(counter as HTMLElement, 0, target, 2000); // 2 seconds
  //           });
  //         } else {
  //           // Reset counters to 0 when section leaves viewport
  //           counters?.forEach((counter) => {
  //             counter.textContent = '0';
  //           });
  //         }
  //       });
  //     },
  //     { threshold: 0.3 } // Trigger when 30% of section is visible
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);
  return (
    <section className={`${styles.hero_section} w-full`}>
      <div className={`${styles.hero_container} h-5/6 w-full flex-col flex_center`}>
        <h3 id='hero' className={`hero_title`}>iPhone 15 Pro</h3>
        <div className={`w-full h-full`}>
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
          <div className={`btn h-[6.5rem] w-[15rem] rounded-[10rem] flex_center font-bold text-3xl ${styles.cta_btn}`}>
            Buy
          </div>
        </Link>
        <h3 className={`font-normal text-4xl ${styles.text}`}>From $199/month or $999</h3>
      </div>
    </section>
  )
}

export default Hero