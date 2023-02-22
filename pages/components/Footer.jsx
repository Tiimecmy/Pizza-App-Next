import React from 'react'
import styles from '../../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" fill style={{ objectFit: "cover" }} alt='background' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. RATCHADA ROAD RAMAIIIV. #304
            <br />BKK 10120
            <br />012 345 6789
          </p>
          <p className={styles.text}>
            227 R. SRINAKARIN ROAD SUKUMVIT. #235
            <br />SMPK 11220
            <br />012 345 6789
          </p>
          <p className={styles.text}>
            3135 R. PHERBURI ROAD PROMPONG . #104
            <br />BKK 11140
            <br />012 345 6789
          </p>
          <p className={styles.text}>
            552 R. RATWITHI ROAD ANUSAOWARICHAI.
            <br />BKK 11350
            <br />012 345 6789
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 11.00 - 23.00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12.00 - 21.00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer