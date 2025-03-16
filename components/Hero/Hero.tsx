import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={`${styles.hero_section} w-full`}>
      <div className={`${styles.hero_container} h-5/6 w-full flex-col flex-center`}>
        <h3 className={``}>iPhone 15 Pro</h3>
      </div>
    </section>
  )
}

export default Hero