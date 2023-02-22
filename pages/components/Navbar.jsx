import React from 'react'
import styles from '../../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="img/telephone.png" alt="telephone" width="32" height="32" />
        </div>
        <div className={styles.textt}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>067 891 0111</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link className={styles.listItem} href="/">Homepage</Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="img/logo.png" alt="logo" width="160" height="69" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link className={styles.cart} href="cart">
          <Image src="img/cart.png" alt="logo" width="30" height="30" />
          <div className={styles.counter}>2</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar