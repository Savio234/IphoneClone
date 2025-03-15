import React from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'
import { navLists } from '@/constants'

const Navbar = () => {
  return (
    <header className={`${styles.header} w-full flex py-[1.6rem] px-5 justify-between items-center `}>
      <nav className={`${styles.nav} w-full flex items-center justify-between`}>
        <div className={`${styles.logo}`}>
          <Image alt='logo' fill src={'/assets/images/apple.svg'} />
        </div>
        <div className={`${styles.devices_container} flex justify-center items-center gap-2`}>
          {navLists.map((device: string, index: number) =>
            <div className={`${styles.device} text-2xl px-5 cursor-pointer 
              text-gray hover:text-white transition-all`} 
              key={index}
            >
              {device}
            </div>
          )}
        </div>
        <div className={`${styles.icons_container} flex items-center gap-6`}>
          <div className={styles.small_icons}>
            <Image alt='' fill src={'/assets/images/search.svg'} />
          </div>
          <div className={styles.small_icons}>
            <Image alt='' fill src={'/assets/images/bag.svg'} />
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar