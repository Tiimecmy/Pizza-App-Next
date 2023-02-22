import React from 'react'
import Image from 'next/image'
import styles from '../styles/Cart.module.css'
import Link from 'next/link'

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image src="/img/pizza.png" alt="products" fill style={{ objectFit: "cover" }} />
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>699฿</span>
            </td>
            <td>
              <span className={styles.quantyty}>2</span>
            </td>
            <td>
              <span className={styles.total}>1398฿</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image src="/img/pizza.png" alt="products" fill style={{ objectFit: "cover" }} />
              </div>
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>699฿</span>
            </td>
            <td>
              <span className={styles.quantyty}>2</span>
            </td>
            <td>
              <span className={styles.total}>1398฿</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>1398.00฿
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>0.00฿
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>1398.00฿
          </div>
          <Link href="orders/id">
            <button className={styles.button}>CHECKOUT NOW!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart