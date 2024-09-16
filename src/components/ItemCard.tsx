import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import styles from "../styles/ItemCard.module.css";

type ItemCardProps = {
  id: string;
  name: string;
  code: string | null;
  oldPrice: number | null;
  currentPrice: number;
  imageUrl: string;
  material: string;
  isDiscounted: boolean;
};

const ItemCard: React.FC<ItemCardProps> = ({
  id,
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
      {isDiscounted ? (
        <div className={styles["item-card__discount"]}>
          <label className={styles["item-card__discount-label"]}>Скидка</label>
        </div>
      ) : (
        <div className={styles["item-card__no__discount"]}>
          <label className={styles["item-card__discount-label"]}></label>
        </div>
      )}
      <img src={imageUrl} alt={name} className={styles["item-card__image"]} />
      <div className={styles["item-card__details"]}>
        {code ? (
          <p className={styles["item-card__code"]}> {code}</p>
        ) : (
          <p className={styles["item-card__no__code"]}>no</p>
        )}
        <h2 className={styles["item-card__name"]}>{name}</h2>
        <div className={styles["item-card__prices"]}>
          {oldPrice && (
            <span className={styles["item-card__old-price"]}>{oldPrice} ₽</span>
          )}
          <span className={styles["item-card__current-price"]}>
            {currentPrice} ₽
          </span>
          <div className={styles["item-card__icons"]}>
            {id == "1" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart"
                style={{ marginRight: "10px" }}
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            )}
            {id == "5" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#27ae60"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-check"
                style={{ marginRight: "10px" }}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
