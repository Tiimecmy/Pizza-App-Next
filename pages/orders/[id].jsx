import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Order.module.css'

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if(index - status <1 ) return styles.done;
    if(index - status === 1 ) return styles.inProgress;
    if(index - status >1 ) return styles.undone;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>12254958945221</span>
              </td>
              <td>
                <span className={styles.name}>
                  John Doe
                </span>
              </td>
              <td>
                <span className={styles.address}>1654 R. RATCHADA ROAD RAMAIIIV.</span>
              </td>
              <td>
                <span className={styles.total}>1398฿</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="img/paid.png" width={30} height={30} alt="paid" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              {" "}
              <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="check" />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="img/bake.png" width={30} height={30} alt="bake" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              {" "}
              <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="check" />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="img/bike.png" width={30} height={30} alt="riding" />
            <span>Incoming</span>
            <div className={styles.checkedIcon}>
              {" "}
              <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="check" />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="img/delivered.png" width={30} height={30} alt="delivered" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              {" "}
              <Image className={styles.checkedIcon} src={"/img/checked.png"} width={20} height={20} alt="check" />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>PAID</button>
        </div>
      </div>
    </div>
  )
}

export default Order;
