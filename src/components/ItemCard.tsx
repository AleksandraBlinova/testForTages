import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import styles from "../styles/ItemCard.module.css";

type ItemCardProps = {
  name: string;
  code: string | null;
  oldPrice: number | null;
  currentPrice: number;
  imageUrl: string;
  material: string;
  isDiscounted: boolean;
};

const ItemCard: React.FC<ItemCardProps> = ({
  name,
  code,
  oldPrice,
  currentPrice,
  imageUrl,
  material,
  isDiscounted,
}) => {
  return (
    <div className={styles["item-card"]}>
      {isDiscounted && (
        <div className={styles["item-card__discount"]}>
          <label className={styles["item-card__discount-label"]}>Скидка</label>
        </div>
      )}
      <img src={imageUrl} alt={name} className={styles["item-card__image"]} />
      <div className={styles["item-card__details"]}>
        <h2 className={styles["item-card__name"]}>{name}</h2>
        {code && <p className={styles["item-card__code"]}>Код: {code}</p>}
        <div className={styles["item-card__prices"]}>
          {oldPrice && (
            <span className={styles["item-card__old-price"]}>{oldPrice} ₽</span>
          )}
          <span className={styles["item-card__current-price"]}>
            {currentPrice} ₽
          </span>
        </div>
        <div className={styles["item-card__actions"]}>
          <FaHeart className={styles["item-card__icon"]} />
          <FaShoppingCart className={styles["item-card__icon"]} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
