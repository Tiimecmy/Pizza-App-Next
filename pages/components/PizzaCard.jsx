import React from 'react'
import styles from '../../styles/PizzaCard.module.css'
import Image from 'next/image'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt='products' width="250" height="250" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>799฿</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}

export default PizzaCard