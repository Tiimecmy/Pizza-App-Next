import styles from "../../styles/Product.module.css"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "img/pizza.png",
    name: "CAMPAGNOLA",
    price: [799, 999, 1299],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcuin pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolorsit amet, consectetur adipiscing elit.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} fill alt="pizza" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>฿{pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose your size to eat!</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="img/size.png" fill alt="sizeofpizza" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="img/size.png" fill alt="sizeofpizza" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="img/size.png" fill alt="sizeofpizza" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input type="checkbox" id="double" name="double" className={styles.checkbox} />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox} />
            <label htmlFor="cheese">More Cheese!</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="thincrush" name="thincrush" className={styles.checkbox} />
            <label htmlFor="thincrush">Thin Crush</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="garlic" name="garlic" className={styles.checkbox} />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox} />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product;