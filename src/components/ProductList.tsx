import React, { useState } from "react";
import ItemCard from "./ItemCard";
import FilterSortBar from "./FilterSortBar";
import items from "../data/items.json";
import materials from "../data/materials.json";
import styles from "../styles/ProductList.module.css";

type Item = {
  id: string;
  name: string;
  code: string | null;
  price: {
    old_price: number | null;
    current_price: number;
  };
  image: {
    url: string;
  };
  material: number;
};

const ProductList: React.FC = () => {
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [filterMaterial, setFilterMaterial] = useState<string>("all");

  const handleSortChange = (sort: string) => {
    setSortOrder(sort);
  };

  const handleFilterChange = (filter: string) => {
    setFilterMaterial(filter);
  };

  const getMaterialName = (materialId: number) => {
    const material = materials.find((m) => m.id === materialId.toString());
    return material ? material.name : "Неизвестно";
  };

  const filteredItems = items
    .filter(
      (item: Item) =>
        filterMaterial === "all" || item.material.toString() === filterMaterial
    )
    .sort((a: Item, b: Item) =>
      sortOrder === "asc"
        ? a.price.current_price - b.price.current_price
        : b.price.current_price - a.price.current_price
    );

  return (
    <div className={styles["product-list__container"]}>
      <FilterSortBar
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />

      <div className={styles["product-list__items"]}>
        {filteredItems.map((item: Item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            code={item.code}
            oldPrice={item.price.old_price}
            currentPrice={item.price.current_price}
            imageUrl={item.image.url}
            material={getMaterialName(item.material)}
            isDiscounted={!!item.price.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
