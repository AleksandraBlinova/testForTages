import React, { useState, useEffect } from "react";
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
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    const cart = localStorage.getItem("cart");

    if (favorites && favorites.includes(id)) {
      setIsFavorite(true);
    }

    if (cart && cart.includes(id)) {
      setIsInCart(true);
    }
  }, [id]);

  const handleFavoriteClick = () => {
    const favorites = localStorage.getItem("favorites");

    if (favorites) {
      const favoritesArray = favorites.split(",");
      if (favoritesArray.includes(id)) {
        const index = favoritesArray.indexOf(id);
        favoritesArray.splice(index, 1);
        localStorage.setItem("favorites", favoritesArray.join(","));
        setIsFavorite(false);
      } else {
        favoritesArray.push(id);
        localStorage.setItem("favorites", favoritesArray.join(","));
        setIsFavorite(true);
      }
    } else {
      localStorage.setItem("favorites", id);
      setIsFavorite(true);
    }
  };

  const handleCartClick = () => {
    const cart = localStorage.getItem("cart");

    if (cart) {
      const cartArray = cart.split(",");
      if (cartArray.includes(id)) {
        const index = cartArray.indexOf(id);
        cartArray.splice(index, 1);
        localStorage.setItem("cart", cartArray.join(","));
        setIsInCart(false);
      } else {
        cartArray.push(id);
        localStorage.setItem("cart", cartArray.join(","));
        setIsInCart(true);
      }
    } else {
      localStorage.setItem("cart", id);
      setIsInCart(true);
    }
  };

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
              onClick={handleCartClick}
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
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
              onClick={handleFavoriteClick}
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
