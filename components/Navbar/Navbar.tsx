import React from 'react'
// import { appleImg, bagImg, searchImg } from '@/utils'
import Image from 'next/image'
import styles from './Navbar.module.css'
import { navLists } from '@/constants'

const Navbar = () => {
  return (
    <header className={`${styles.header} w-full flex py-[1.6rem] px-5 justify-between items-center `}>
      <nav className={`${styles.nav} w-full flex items-center`}>
        <div className={`${styles.logo}`}>
          <Image alt='logo' fill src={'/assets/images/apple.svg'} />
        </div>
        <div className={`${styles.devices_container} flex justify-center items-center gap-2`}>
          {navLists.map((device: string, index: number) =>
            <div className={`${styles.device} text-sm px-5`} key={index}>
              {device}
            </div>
          )}
        </div>
        <div>
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